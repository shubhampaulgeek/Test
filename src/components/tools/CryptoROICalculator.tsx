import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Edit3, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import debounce from 'lodash.debounce';

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
}

interface ROICalculationResult {
  initialInvestment: number;
  currentValue: number;
  profitLoss: number;
  roiPercentage: number;
}

const CryptoROICalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
  const [cryptoPagesLoaded, setCryptoPagesLoaded] = useState(1);
  const [cryptoLoading, setCryptoLoading] = useState(false);
  const [cryptoHasMore, setCryptoHasMore] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ROICalculationResult | null>(null);
  const [useManualPrice, setUseManualPrice] = useState(false);
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);
  const { toast } = useToast();
  const [debouncedQuery, setDebouncedQuery] = useState('');
  // Remove currency selector, exchange rate fetching, and related logic
  // Only show results in USD
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState<{ [key: string]: number }>({ USD: 1 });
  const [currencyList, setCurrencyList] = useState<string[]>(['USD']);

  // Fetch exchange rates on mount
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        setRates(data.conversion_rates);
        setCurrencyList(Object.keys(data.conversion_rates));
      });
  }, []);

  const getSymbol = (code: string) => {
    // Basic mapping for common currencies, fallback to code
    const symbols: { [key: string]: string } = {
      USD: '$', EUR: '€', GBP: '£', INR: '₹', JPY: '¥', CNY: '¥', RUB: '₽', KRW: '₩', AUD: 'A$', CAD: 'C$', CHF: 'Fr.', SGD: 'S$', HKD: 'HK$', NZD: 'NZ$', ZAR: 'R', BRL: 'R$', MXN: '$', IDR: 'Rp', TRY: '₺', AED: 'د.إ', SAR: '﷼', SEK: 'kr', NOK: 'kr', DKK: 'kr', PLN: 'zł', THB: '฿', VND: '₫', PHP: '₱', MYR: 'RM', TWD: 'NT$', CZK: 'Kč', HUF: 'Ft', ILS: '₪', CLP: '$', COP: '$', ARS: '$', PEN: 'S/', PKR: '₨', NGN: '₦', EGP: '£', KES: 'KSh', GHS: '₵', UAH: '₴', BDT: '৳', LKR: '₨', MMK: 'K', IQD: 'ع.د', QAR: 'ر.ق', OMR: 'ر.ع.', KWD: 'د.ك', BHD: 'ب.د', JOD: 'د.ا', MAD: 'د.م.', TND: 'د.ت', DZD: 'دج', LYD: 'ل.د', SDG: 'ج.س', BTC: '₿', ETH: 'Ξ', USDT: '₮', USDC: '₮', BNB: 'BNB', XRP: 'XRP', ADA: '₳', DOGE: 'Ð', SOL: '◎', DOT: '●', MATIC: 'M', AVAX: 'AVAX', SHIB: 'SHIB', TRX: 'TRX', LTC: 'Ł', BCH: '₿', XLM: '★', UNI: 'UNI', LINK: '⛓', XMR: 'ɱ', ATOM: '⚛', ETC: '⟠', XTZ: 'ꜩ', AAVE: 'AAVE', EOS: 'ε', MKR: 'DAI', OKB: 'OKB', CRO: 'CRO', ALGO: 'Ɐ', FTT: 'FTT', LEO: 'LEO', XDC: 'XDC', VET: 'VET', HBAR: 'ℏ', ICP: 'ICP', FIL: '⨎', EGLD: 'EGLD', AXS: 'AXS', SAND: 'SAND', MANA: 'MANA', GRT: 'GRT', KLAY: 'KLAY', FLOW: 'FLOW', CHZ: 'CHZ', ENJ: 'ENJ', ZIL: 'ZIL', BAT: 'BAT', ZRX: 'ZRX', REN: 'REN', DGB: 'DGB', NANO: 'NANO', SC: 'SC', ICX: 'ICX', QTUM: 'QTUM', BTG: 'BTG', XVG: 'XVG', DCR: 'DCR', RVN: 'RVN', LSK: 'LSK', ARDR: 'ARDR', STRAX: 'STRAX', STEEM: 'STEEM', WAVES: 'WAVES', MAID: 'MAID', GNO: 'GNO', REP: 'REP', SNT: 'SNT', CVC: 'CVC', FUN: 'FUN', RLC: 'RLC', ANT: 'ANT', LRC: 'LRC', POLY: 'POLY', STORJ: 'STORJ', MTL: 'MTL', DNT: 'DNT', LOOM: 'LOOM', POE: 'POE', QSP: 'QSP', VTC: 'VTC', NAV: 'NAV', PIVX: 'PIVX', SYS: 'SYS', GAME: 'GAME', GRS: 'GRS', EMC2: 'EMC2', VIA: 'VIA', EXP: 'EXP', PART: 'PART', XCP: 'XCP', BLK: 'BLK', RDD: 'RDD', NXT: 'NXT', BURST: 'BURST', ARK: 'ARK', CLOAK: 'CLOAK', XEM: 'XEM', BCN: 'BCN', XDN: 'XDN', AEON: 'AEON', XVC: 'XVC', NVC: 'NVC', PPC: 'PPC', FTC: 'FTC', NMC: 'NMC', IXC: 'IXC', DGC: 'DGC', MUE: 'MUE', XPM: 'XPM', XBC: 'XBC', XMY: 'XMY', XST: 'XST', XZC: 'XZC', ZEN: 'ZEN', ZEC: 'ZEC', BTCP: 'BTCP', BCD: 'BCD', SBTC: 'SBTC', BSV: 'BSV', DASH: 'DASH', MONA: 'MONA', ZCL: 'ZCL', USDD: 'USDD', USDE: 'USDE', USDS: 'USDS', DAI: 'DAI', BUSD: 'BUSD', TUSD: 'TUSD', PAX: 'PAX', GUSD: 'GUSD', HUSD: 'HUSD', SUSD: 'SUSD', UST: 'UST', LUNA: 'LUNA', MIR: 'MIR', ANC: 'ANC', KRT: 'KRT', SDT: 'SDT', MIM: 'MIM', FRAX: 'FRAX', FEI: 'FEI', AMPL: 'AMPL', RSV: 'RSV', USDP: 'USDP', USN: 'USN', USDN: 'USDN'
    };
    return symbols[code] || code;
  };

  const convertCurrency = (amount: number, to: string) => {
    if (!rates[to] || isNaN(amount)) return 'N/A';
    return (amount * rates[to]).toLocaleString(undefined, { style: 'currency', currency: to });
  };

  // Debounce search input
  useEffect(() => {
    const handler = debounce((val) => setDebouncedQuery(val), 200);
    handler(searchQuery);
    return () => handler.cancel();
  }, [searchQuery]);

  const filteredCryptoList = useMemo(() => {
    const query = debouncedQuery.toLowerCase();
    return cryptoList.filter(
      (crypto) => crypto.name.toLowerCase().includes(query) || crypto.symbol.toLowerCase().includes(query)
    );
  }, [cryptoList, debouncedQuery]);
  const visibleCryptos = filteredCryptoList.slice(0, 30 + (cryptoPagesLoaded - 1) * 30);

  const fetchCryptoPage = async (page: number) => {
    setCryptoLoading(true);
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`);
    const data: CryptoData[] = await response.json();
    setCryptoList(prev => {
      // Deduplicate by id
      const all = prev.concat(data);
      return Array.from(new Map(all.map(c => [c.id, c])).values());
    });
    setCryptoLoading(false);
    if (data.length < 100 || page >= 10) setCryptoHasMore(false);
  };

  useEffect(() => {
    if (!useManualPrice) fetchCryptoPage(1);
  }, [useManualPrice]);

  const handleDropdownScroll = () => {
    if (!dropdownRef.current || cryptoLoading || !cryptoHasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = dropdownRef.current;
    if (scrollHeight - scrollTop - clientHeight < 40) {
      // Near bottom, load next page
      if (cryptoPagesLoaded < 10) {
        setCryptoPagesLoaded(p => p + 1);
        fetchCryptoPage(cryptoPagesLoaded + 1);
      }
    }
  };

  const calculateROI = () => {
    const initial = parseFloat(initialInvestment);
    const price = parseFloat(purchasePrice);
    const currPrice = parseFloat(currentPrice);

    if (initial > 0 && price > 0 && currPrice >= 0) {
      const quantity = initial / price;
      const currentValue = currPrice * quantity;
      const profitLoss = currentValue - initial;
      const roiPercentage = (profitLoss / initial) * 100;

      setResult({
        initialInvestment: initial,
        currentValue: currentValue,
        profitLoss: profitLoss,
        roiPercentage: roiPercentage,
      });
    } else {
      toast({
        title: 'Invalid Input',
        description: 'Please ensure all input fields are valid numbers.',
        variant: 'destructive',
      });
    }
  };

  const reset = () => {
    setInitialInvestment('');
    setPurchasePrice('');
    setCurrentPrice('');
    setResult(null);
    setSelectedCrypto(null);
    setSearchQuery('');
  };

  const handleCryptoSelect = (crypto: CryptoData) => {
    setSelectedCrypto(crypto);
    setCurrentPrice(crypto.current_price.toString());
    setSearchQuery('');
  };

  return (
    <>
      <Helmet>
        <title>Crypto ROI Calculator</title>
        <meta name="description" content="Calculate your cryptocurrency Return on Investment (ROI) with live market data or manual price entry." />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/crypto-roi-calculator" />
      </Helmet>
      <div className="space-y-6">
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Crypto ROI Calculator
            </CardTitle>
            <CardDescription>
              Calculate your cryptocurrency Return on Investment (ROI) with live market data or manual entry
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Price Input Mode Toggle */}
            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
              <div className="flex items-center gap-2">
                <Label htmlFor="manual-mode">Manual Price Entry</Label>
                <Switch 
                  id="manual-mode"
                  checked={useManualPrice} 
                  onCheckedChange={setUseManualPrice}
                />
              </div>
              <p className="text-sm text-gray-700">
                {useManualPrice ? 'Enter prices manually' : 'Use live market prices'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="initial">Initial Investment ($)</Label>
                <Input
                  id="initial"
                  type="number"
                  placeholder="e.g., 1000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purchasePrice">Purchase Price ($)</Label>
                <Input
                  id="purchasePrice"
                  type="number"
                  placeholder="e.g., 50"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentPrice">Current Price ($)</Label>
                <div className="relative">
                  <Input
                    id="currentPrice"
                    type="number"
                    placeholder="e.g., 100"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(e.target.value)}
                    disabled={!useManualPrice && selectedCrypto !== null}
                  />
                  {!useManualPrice && selectedCrypto !== null && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-8 w-8 p-0"
                      onClick={() => setUseManualPrice(true)}
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Live Price Search */}
            {!useManualPrice && (
              <div className="space-y-2">
                <Label htmlFor="cryptoSearch" className="flex items-center gap-2">
                  Search Cryptocurrency for Live Price
                  {isFetching && <Loader2 className="w-4 h-4 animate-spin" />}
                </Label>
                <p className="text-xs text-red-600 mb-1">
                  * To search for a crypto coin, start typing its name. If it doesn't appear, try entering the first letter, scroll a bit, then type the remaining letters. This helps especially with low-cap coins that may load slowly due to API fetching limits.
                </p>
                <Input
                  id="cryptoSearch"
                  type="text"
                  placeholder="Search for Bitcoin, Ethereum, etc..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Selected Crypto Display */}
                {selectedCrypto && (
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={selectedCrypto.image}
                          alt={selectedCrypto.name}
                          className="w-6 h-6"
                          onError={(e: any) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder.svg';
                          }}
                        />
                        <div>
                          <p className="font-medium text-green-800">
                            {selectedCrypto.name} ({selectedCrypto.symbol.toUpperCase()})
                          </p>
                          <p className="text-sm text-green-600">
                            Live Price: ${selectedCrypto.current_price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setSelectedCrypto(null);
                          setCurrentPrice('');
                          setSearchQuery('');
                        }}
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                )}

                {/* Search Results */}
                {filteredCryptoList.length > 0 && searchQuery && !selectedCrypto && (
                  <div
                    className="max-h-48 overflow-y-auto rounded-md border bg-white shadow-md"
                    ref={dropdownRef}
                    onScroll={handleDropdownScroll}
                  >
                    {visibleCryptos.map((crypto) => (
                      <button
                        key={crypto.id}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-colors flex items-center justify-between border-b last:border-b-0"
                        onClick={() => handleCryptoSelect(crypto)}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={crypto.image}
                            alt={crypto.name}
                            className="w-5 h-5"
                            onError={(e: any) => {
                              e.target.onerror = null;
                              e.target.src = '/placeholder.svg';
                            }}
                          />
                          <div>
                            <p className="font-medium text-gray-900">{crypto.name}</p>
                            <p className="text-xs text-gray-500">
                              {crypto.symbol.toUpperCase()}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">${crypto.current_price.toLocaleString()}</p>
                        </div>
                      </button>
                    ))}
                    {cryptoLoading && (
                      <div className="flex items-center justify-center p-2"><Loader2 className="w-4 h-4 animate-spin" /></div>
                    )}
                    {!cryptoLoading && !cryptoHasMore && visibleCryptos.length === 0 && searchQuery && (
                      <div className="p-2 text-gray-400">No results found.</div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2">
              <Button onClick={calculateROI} className="flex-1" disabled={isLoading}>
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Calculate ROI
              </Button>
              <Button onClick={reset} variant="outline">
                Reset
              </Button>
            </div>

            {result !== null && (
              <>
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800">Current Value</h3>
                    <p className="text-2xl font-bold text-blue-600">
                      ${result.currentValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} <span className="text-base text-gray-500 font-normal">(USD)</span>
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${
                    result.profitLoss >= 0 
                      ? 'bg-green-50' 
                      : 'bg-red-50'
                  }`}>
                    <h3 className={`font-semibold ${
                      result.profitLoss >= 0 
                        ? 'text-green-800' 
                        : 'text-red-800'
                    }`}>
                      {result.profitLoss >= 0 ? 'Profit' : 'Loss'}
                    </h3>
                    <p className={`text-2xl font-bold ${
                      result.profitLoss >= 0 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      ${Math.abs(result.profitLoss).toLocaleString(undefined, { maximumFractionDigits: 2 })} <span className="text-base text-gray-500 font-normal">(USD)</span>
                    </p>
                  </div>

                  <div className={`p-4 rounded-lg ${
                    result.roiPercentage >= 0 
                      ? 'bg-green-50' 
                      : 'bg-red-50'
                  }`}>
                    <h3 className={`font-semibold ${
                      result.roiPercentage >= 0 
                        ? 'text-green-800' 
                        : 'text-red-800'
                    }`}>
                      ROI Percentage
                    </h3>
                    <p className={`text-2xl font-bold ${
                      result.roiPercentage >= 0 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {result.roiPercentage >= 0 ? '+' : ''}{result.roiPercentage.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Currency Converter Tool - above FAQ */}
        <div className="max-w-md mx-auto mt-8 mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-yellow-800 text-sm flex items-center">
              <span className="inline-block mr-1">💱</span> Quick Currency Converter
            </h3>
            <div className="flex items-center gap-2">
              <Label htmlFor="converter-toggle" className="text-xs text-gray-700">Enable</Label>
              <Switch 
                id="converter-toggle"
                checked={showCurrencyConverter} 
                onCheckedChange={setShowCurrencyConverter}
              />
            </div>
          </div>
          {showCurrencyConverter && <CurrencyConverterMini />}
        </div>

        {/* FAQ Section */}
      </div>
    </>
  );
};

export default CryptoROICalculator;

function CurrencyConverterMini() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rates, setRates] = useState<{ [key: string]: number }>({ USD: 1 });
  const [currencyList, setCurrencyList] = useState<string[]>(['USD']);
  const [converted, setConverted] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_TTHSgYzjc4wvTRft0Q25OOTmiMKobYpVmmq9v6U7')
      .then(res => res.json())
      .then(data => {
        if (data && data.data && typeof data.data === 'object') {
          // Parse rates from data.data[code].value
          const ratesObj: { [key: string]: number } = {};
          Object.keys(data.data).forEach(code => {
            ratesObj[code] = data.data[code].value;
          });
          setRates(ratesObj);
          const codes = Object.keys(ratesObj).sort();
          setCurrencyList(codes);
          if (!codes.includes('USD')) setFrom(codes[0] || 'USD');
          if (!codes.includes('EUR')) setTo(codes[1] || codes[0] || 'USD');
        } else {
          setError('Failed to load currency rates.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load currency rates.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!amount || isNaN(Number(amount)) || !rates[from] || !rates[to]) {
      setConverted('');
      return;
    }
    // Convert from 'from' currency to USD, then to 'to' currency
    const usdValue = Number(amount) / rates[from];
    const val = usdValue * rates[to];
    setConverted(val.toLocaleString(undefined, { style: 'currency', currency: to }));
  }, [amount, from, to, rates]);

  if (loading) return <div className="text-xs text-gray-500">Loading rates...</div>;
  if (error) return <div className="text-xs text-red-600">{error}</div>;

  return (
    <div className="flex gap-2 items-end flex-wrap">
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">From</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={from}
          onChange={e => setFrom(e.target.value)}
        >
          {currencyList.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          className="border rounded px-2 py-1 w-full"
          placeholder={`Amount in ${from}`}
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">To</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={to}
          onChange={e => setTo(e.target.value)}
        >
          {currencyList.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">Result</label>
        <input
          className="border rounded px-2 py-1 w-full bg-gray-100"
          value={converted}
          readOnly
        />
      </div>
    </div>
  );
}
