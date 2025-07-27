import React, { useState, useEffect, useMemo } from 'react';
import { Calculator, TrendingUp, Download, Share2, RefreshCw, ArrowLeftRight, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import debounce from 'lodash.debounce';

const COINGECKO_API = 'https://api.coingecko.com/api/v3';
const EXCHANGE_RATE_API = 'https://open.er-api.com/v6/latest/USD';

const popularPairs = [
  { crypto: 'bitcoin', fiat: 'usd', label: 'BTC/USD' },
  { crypto: 'ethereum', fiat: 'inr', label: 'ETH/INR' },
  { crypto: 'tether', fiat: 'eur', label: 'USDT/EUR' },
  { crypto: 'solana', fiat: 'usd', label: 'SOL/USD' },
  { crypto: 'dogecoin', fiat: 'jpy', label: 'DOGE/JPY' },
];

const CryptoFiatConverter = () => {
  const [cryptoList, setCryptoList] = useState([]); // [{id, symbol, name, image, current_price}]
  const [fiatList, setFiatList] = useState([]); // [{code, name, rate}]
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const [selectedFiat, setSelectedFiat] = useState('usd');
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [fiatAmount, setFiatAmount] = useState('');
  const [cryptoPrice, setCryptoPrice] = useState('');
  const [fiatRate, setFiatRate] = useState('');
  const [loading, setLoading] = useState(false);
  const [trendData, setTrendData] = useState([]); // [{date, price}]
  const [trendDays, setTrendDays] = useState(7);
  const [error, setError] = useState('');
  const [cryptoSearch, setCryptoSearch] = useState('');
  const [fiatSearch, setFiatSearch] = useState('');
  const [cryptoPage, setCryptoPage] = useState(1);
  const [cryptoLoading, setCryptoLoading] = useState(false);
  const [cryptoHasMore, setCryptoHasMore] = useState(true);
  const [showCryptoDropdown, setShowCryptoDropdown] = useState(false);
  const [showFiatDropdown, setShowFiatDropdown] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Add this reset handler inside the component
  const handleReset = () => {
    setSelectedCrypto('bitcoin');
    setSelectedFiat('usd');
    setCryptoAmount('');
    setFiatAmount('');
    setCryptoSearch('');
    setFiatSearch('');
    setCryptoPage(1);
    setTrendDays(7);
    setError('');
    setShowCryptoDropdown(false);
    setShowFiatDropdown(false);
    setTrendData([]);
  };

  // Fetch crypto list and prices (infinite scroll style)
  useEffect(() => {
    const perPage = 250;
    const fetchPage = async (page: number) => {
      setCryptoLoading(true);
      const res = await fetch(`${COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`);
      const data = await res.json();
      setCryptoList(prev => {
        // Deduplicate by id
        const all = prev.concat(data);
        return Array.from(new Map(all.map(c => [c.id, c])).values());
      });
      setCryptoLoading(false);
      if (data.length < perPage) setCryptoHasMore(false);
    };
    // Only fetch on mount or when page increases
    fetchPage(cryptoPage);
  }, [cryptoPage]);

  // Debounce search input
  useEffect(() => {
    const handler = debounce((val) => setDebouncedQuery(val), 200);
    handler(cryptoSearch);
    return () => handler.cancel();
  }, [cryptoSearch]);

  // Fetch fiat rates
  useEffect(() => {
    fetch(EXCHANGE_RATE_API)
      .then(res => res.json())
      .then(data => {
        const rates = Object.entries(data.rates).map(([code, rate]) => ({ code, name: code, rate }));
        setFiatList(rates);
      });
  }, []);

  // Fetch selected crypto price
  useEffect(() => {
    if (!selectedCrypto) return;
    setLoading(true);
    fetch(`${COINGECKO_API}/simple/price?ids=${selectedCrypto}&vs_currencies=usd`)
      .then(res => res.json())
      .then(data => {
        setCryptoPrice(data[selectedCrypto]?.usd || '');
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [selectedCrypto]);

  // Fetch trend data
  useEffect(() => {
    if (!selectedCrypto || !selectedFiat) return;
    fetch(`${COINGECKO_API}/coins/${selectedCrypto}/market_chart?vs_currency=${selectedFiat}&days=${trendDays}`)
      .then(res => res.json())
      .then(data => {
        setTrendData(data.prices || []);
      });
  }, [selectedCrypto, selectedFiat, trendDays]);

  // Conversion logic
  const getEffectiveCryptoPrice = () => (cryptoPrice || '0');
  // Fix getEffectiveFiatRate to use the correct rate from fiatList for the selectedFiat
  const getEffectiveFiatRate = () => {
    if (selectedFiat === 'usd') return 1;
    const fiatObj = fiatList.find(f => f.code === selectedFiat);
    return Number(fiatObj?.rate ?? 1);
  };

  const handleCryptoChange = (val: string) => {
    setCryptoAmount(val);
    const price = parseFloat(getEffectiveCryptoPrice());
    const rate = getEffectiveFiatRate();
    if (price && rate && val) {
      setFiatAmount(((parseFloat(val) * price * rate).toFixed(2) + ''));
    } else {
      setFiatAmount('');
    }
  };

  const handleFiatChange = (val: string) => {
    setFiatAmount(val);
    const price = parseFloat(getEffectiveCryptoPrice());
    const rate = getEffectiveFiatRate();
    if (price && rate && val) {
      setCryptoAmount(((parseFloat(val) / (price * rate)).toFixed(8) + ''));
    } else {
      setCryptoAmount('');
    }
  };

  const handleQuickSelect = (crypto: string, fiat: string) => {
    setSelectedCrypto(crypto);
    setSelectedFiat(fiat);
    setCryptoAmount('');
    setFiatAmount('');
  };

  const handleExport = () => {
    const text = `Crypto: ${selectedCrypto}\nFiat: ${selectedFiat}\nCrypto Amount: ${cryptoAmount}\nFiat Amount: ${fiatAmount}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'crypto-fiat-conversion.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const text = `Crypto: ${selectedCrypto}\nFiat: ${selectedFiat}\nCrypto Amount: ${cryptoAmount}\nFiat Amount: ${fiatAmount}`;
    if (navigator.share) {
      await navigator.share({ title: 'Crypto to Fiat Conversion', text });
    } else {
      alert('Sharing not supported on this device.');
    }
  };

  // UI for manual mode banner
  // Remove ManualBanner component

  // Helper to get display rate and mode
  const getDisplayRate = () => {
    return cryptoPrice ? cryptoPrice : '—';
  };
  const getDisplayFiatRate = () => {
    if (selectedFiat === 'usd') return '1';
    const fiatObj = fiatList.find(f => f.code === selectedFiat);
    return fiatObj ? String(fiatObj.rate) : '—';
  };
  const getMode = () => ('Live');
  const cryptoSymbol = cryptoList.find((c: any) => c.id === selectedCrypto)?.symbol?.toUpperCase() || selectedCrypto.toUpperCase();
  const fiatSymbol = selectedFiat.toUpperCase();

  const filteredCryptos = useMemo(() => {
    const query = debouncedQuery.toLowerCase();
    return cryptoList.filter((c: any) =>
      c.name.toLowerCase().includes(query) ||
      c.symbol.toLowerCase().includes(query)
    );
  }, [cryptoList, debouncedQuery]);
  const filteredFiats = fiatList.filter((f: any) =>
    f.code.toLowerCase().includes(fiatSearch.toLowerCase()) ||
    (f.name && f.name.toLowerCase().includes(fiatSearch.toLowerCase()))
  );

  // Update crypto selection (dropdown and search)
  const handleCryptoSelect = (cryptoId: string) => {
    setSelectedCrypto(cryptoId);
    setCryptoAmount('1'); // Always set to 1 on crypto select
    setCryptoSearch('');
    setShowCryptoDropdown(false);
  };

  // Update fiat selection (dropdown and search)
  const handleFiatSelect = (fiatCode: string) => {
    setSelectedFiat(fiatCode);
    setFiatSearch('');
    setShowFiatDropdown(false);
  };

  // Remove setTimeouts and optimize conversion logic
  // --- Remove setTimeouts in handleCryptoSelect and handleFiatSelect ---
  // --- useEffect to recalculate fiatAmount whenever relevant data changes ---
  React.useEffect(() => {
    // Only recalculate if cryptoAmount is set (default to '1' after crypto select)
    if (cryptoAmount && selectedCrypto && selectedFiat && cryptoPrice && fiatList.length > 0) {
      const price = parseFloat(cryptoPrice || '0');
      const rate = getEffectiveFiatRate();
      if (price && rate) {
        setFiatAmount((parseFloat(cryptoAmount) * price * rate).toFixed(2));
      } else {
        setFiatAmount('');
      }
    }
  }, [cryptoAmount, cryptoPrice, selectedFiat, fiatList]);

  // --- Remove the old useEffect that only updated fiatAmount if cryptoAmount === '1' ---

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowLeftRight className="w-6 h-6" />
          Crypto to Fiat Converter/Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Remove ManualBanner */}
        {/* Remove manual mode switch buttons */}
        <div className="flex flex-wrap gap-2 mb-2">
          {popularPairs.map(pair => (
            <Button key={pair.label} size="sm" variant="outline" onClick={() => handleQuickSelect(pair.crypto, pair.fiat)}>
              {pair.label}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <Label>Cryptocurrency</Label>
              <Input
                type="text"
                className="mb-2"
                placeholder="Search crypto..."
                value={cryptoSearch}
                onChange={e => {
                  setCryptoSearch(e.target.value);
                  setShowCryptoDropdown(e.target.value.length > 0);
                }}
                onFocus={() => setShowCryptoDropdown(cryptoSearch.length > 0)}
                onBlur={() => setTimeout(() => setShowCryptoDropdown(false), 150)}
              />
              {showCryptoDropdown && cryptoSearch && (
                <div className="absolute z-10 bg-white border border-gray-200 rounded shadow max-h-60 overflow-y-auto w-full" style={{top: '100%', left: 0}}>
                  {filteredCryptos.length > 0 ? filteredCryptos.slice(0, 30).map((c: any) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-blue-100"
                      onMouseDown={() => handleCryptoSelect(c.id)}
                    >
                      <div className="flex items-center gap-2">
                        <img src={c.image} alt={c.name} className="w-5 h-5" onError={e => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = '/placeholder.svg'; }} />
                        <span className="font-bold">{c.symbol.toUpperCase()}</span>
                        <span>{c.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 min-w-[60px] text-right">${c.current_price}</span>
                    </div>
                  )) : (
                    <div className="px-3 py-2 text-gray-400">No results</div>
                  )}
                </div>
              )}
            </div>
            {!cryptoSearch && (
              <>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={selectedCrypto}
                  onChange={e => handleCryptoSelect(e.target.value)}
                >
                  {filteredCryptos.map((c: any) => (
                    <option key={c.id} value={c.id}>{c.name} ({c.symbol.toUpperCase()})</option>
                  ))}
                </select>
                {/* Removed Load more button */}
              </>
            )}
            <div className="flex gap-2 mt-2">
              <Input
                type="number"
                placeholder="Crypto amount"
                value={cryptoAmount}
                onChange={e => handleCryptoChange(e.target.value)}
              />
              <Button variant="ghost" onClick={() => handleCryptoChange('')}><RefreshCw className="w-4 h-4" /></Button>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Live price: {cryptoPrice ? `$${cryptoPrice}` : '—'}</div>
          </div>
          <div>
            <div className="relative">
              <Label>Fiat Currency</Label>
              <Input
                type="text"
                className="mb-2"
                placeholder="Search currency..."
                value={fiatSearch}
                onChange={e => {
                  setFiatSearch(e.target.value);
                  setShowFiatDropdown(e.target.value.length > 0);
                }}
                onFocus={() => setShowFiatDropdown(fiatSearch.length > 0)}
                onBlur={() => setTimeout(() => setShowFiatDropdown(false), 150)}
              />
              {showFiatDropdown && fiatSearch && (
                <div className="absolute z-10 bg-white border border-gray-200 rounded shadow max-h-60 overflow-y-auto w-full" style={{top: '100%', left: 0}}>
                  {filteredFiats.length > 0 ? filteredFiats.slice(0, 30).map((f: any) => (
                    <div
                      key={f.code}
                      className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                      onMouseDown={() => handleFiatSelect(f.code)}
                    >
                      {f.code.toUpperCase()}{f.name && f.name !== f.code ? ` - ${f.name}` : ''}
                    </div>
                  )) : (
                    <div className="px-3 py-2 text-gray-400">No results</div>
                  )}
                </div>
              )}
            </div>
            {!fiatSearch && (
              <>
                <select
                  className="w-full border rounded px-3 py-2"
                  value={selectedFiat}
                  onChange={e => handleFiatSelect(e.target.value)}
                >
                  {filteredFiats.map((f: any) => (
                    <option key={f.code} value={f.code}>{f.code.toUpperCase()}</option>
                  ))}
                </select>
                {/* Removed Load more button */}
              </>
            )}
            <div className="flex gap-2 mt-2">
              <Input
                type="number"
                placeholder="Fiat amount"
                value={fiatAmount}
                onChange={e => handleFiatChange(e.target.value)}
              />
              <Button variant="ghost" onClick={() => handleFiatChange('')}><RefreshCw className="w-4 h-4" /></Button>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Live rate: {getDisplayFiatRate()} <span className="ml-1">({selectedCrypto && selectedFiat ? `1 ${selectedFiat.toUpperCase()} = ${selectedCrypto.toUpperCase()}` : ''})</span></div>
          </div>
        </div>
        {/* After the currency input grid, add the result section and live rate display */}
        <div className="mt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm max-w-xl mx-auto">
            <div className="mb-2 text-lg font-semibold text-gray-700">Result</div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-2">
              <div className="text-base text-gray-700">
                <span className="font-bold text-lg text-blue-700">
                  {cryptoAmount || '—'} {cryptoSymbol}
                </span>
                <span className="mx-2">=</span>
                <span className="font-bold text-lg text-green-700">
                  {fiatAmount || '—'} {fiatSymbol}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 mb-2">
              <div className="bg-gray-50 rounded p-2 border border-gray-100">
                <div><span className="font-medium">Crypto:</span> {cryptoAmount || '—'} {cryptoSymbol}</div>
                <div><span className="font-medium">Fiat:</span> {fiatAmount || '—'} {fiatSymbol}</div>
              </div>
              <div className="bg-gray-50 rounded p-2 border border-gray-100">
                <div><span className="font-medium">Conversion Rate:</span> 1 {cryptoSymbol} = {cryptoPrice ? `$${cryptoPrice}` : '—'} USD</div>
                <div><span className="font-medium">USD to {fiatSymbol} Rate:</span> {selectedFiat === 'usd' ? '1' : (fiatList.find(f => f.code === selectedFiat)?.rate || '—')}</div>
                <div><span className="font-medium">Mode:</span> <span className={getMode() === 'Live' ? 'text-green-600 font-semibold' : 'text-green-600 font-semibold'}>{getMode()}</span></div>
              </div>
            </div>
            {/* Remove manual mode disclaimer */}
          </div>
        </div>
        <div className="text-xs text-red-700 dark:text-red-400 mt-2">
          <strong>Disclaimer:</strong> Crypto prices are volatile. Rates shown here are for informational purposes only.
        </div>
        <p className="text-xs text-red-600 mt-1">
          * To search for a crypto coin, start typing its name. If it doesn't appear, try entering the first letter, scroll a bit, then type the remaining letters. This helps especially with low-cap coins that may load slowly due to API fetching limits.
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoFiatConverter; 