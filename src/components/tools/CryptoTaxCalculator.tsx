import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Calculator, Plus, Trash2, Download, Search, TrendingUp, RotateCcw, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import debounce from 'lodash.debounce';
import Papa from 'papaparse';

const initialTransaction = () => ({
  crypto: '',
  cryptoName: '',
  cryptoSymbol: '',
  purchaseDate: '',
  sellDate: '',
  investmentAmount: '',
  purchasePrice: '',
  sellPrice: '',
  fees: ''
});

const CryptoTaxCalculator = () => {
  const [transactions, setTransactions] = useState([initialTransaction()]);
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoLoading, setCryptoLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(-1);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(null);
  const [shortTermRate, setShortTermRate] = useState('');
  const [longTermRate, setLongTermRate] = useState('');
  const dropdownRef = useRef(null);

  // Fetch crypto data on component mount
  useEffect(() => {
    fetchCryptoData();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchCryptoData = async () => {
    setCryptoLoading(true);
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false');
      const data = await response.json();
      setCryptoList(data);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
    setCryptoLoading(false);
  };

  const addTransaction = () => {
    setTransactions(prev => [...prev, initialTransaction()]);
  };

  const removeTransaction = (index) => {
    if (transactions.length > 1) {
      setTransactions(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updateTransaction = (index, field, value) => {
    setTransactions(prev => prev.map((tx, i) => 
      i === index ? { ...tx, [field]: value } : tx
    ));
  };

  const selectCrypto = (index, crypto) => {
    updateTransaction(index, 'crypto', crypto.id);
    updateTransaction(index, 'cryptoName', crypto.name);
    updateTransaction(index, 'cryptoSymbol', crypto.symbol.toUpperCase());
    updateTransaction(index, 'sellPrice', crypto.current_price.toString());
    setDropdownOpen(-1);
  };

  const filteredCryptos = useMemo(() => {
    if (!searchQuery) return cryptoList.slice(0, 10);
    return cryptoList.filter(crypto => 
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10);
  }, [cryptoList, searchQuery]);

    const calculateTax = () => {
    const calculatedResults = transactions.map(tx => {
      const investmentAmount = parseFloat(tx.investmentAmount) || 0;
      const purchasePrice = parseFloat(tx.purchasePrice) || 0;
      const sellPrice = parseFloat(tx.sellPrice) || 0;
      const fees = parseFloat(tx.fees) || 0;
      const purchaseDate = new Date(tx.purchaseDate);
      const sellDate = new Date(tx.sellDate);
      
      const holdingDays = Math.ceil((sellDate.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24));
      const isLongTerm = holdingDays > 365;
      const taxRate = isLongTerm ? (parseFloat(longTermRate) || 0) : (parseFloat(shortTermRate) || 0);
      
      // Calculate units bought
      const unitsBought = purchasePrice > 0 ? investmentAmount / purchasePrice : 0;
      
      // Calculate total sell value
      const totalSellValue = unitsBought * sellPrice;
      
      // Calculate net proceeds (after fees)
      const netProceeds = totalSellValue - fees;
      
      // Calculate ROI (gain)
      const roi = netProceeds - investmentAmount;
      
      // Calculate tax
      const tax = roi > 0 ? (roi * taxRate) / 100 : 0;
      
      // Calculate ROI after tax
      const roiAfterTax = roi - tax;
      
      // Calculate net profit/loss
      const netProfit = roiAfterTax;

      return {
        ...tx,
        investmentAmount,
        fees,
        unitsBought,
        totalSellValue,
        netProceeds,
        holdingDays,
        isLongTerm,
        taxRate,
        roi,
        roiAfterTax,
        gain: roi,
        tax,
        netProfit
      };
    });

    setResults(calculatedResults);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const resetForm = () => {
    setTransactions([initialTransaction()]);
    setResults(null);
    setShortTermRate('');
    setLongTermRate('');
    setSearchQuery('');
    setDropdownOpen(-1);
  };

  const exportToExcel = () => {
    if (!results) return;
    
         const excelData = results.map((result, index) => ({
       'Transaction #': index + 1,
       'Crypto': result.cryptoName,
       'Symbol': result.cryptoSymbol,
       'Purchase Date': formatDate(result.purchaseDate),
       'Sell Date': formatDate(result.sellDate),
       'Investment Amount ($)': parseFloat(result.investmentAmount),
       'Purchase Price ($)': parseFloat(result.purchasePrice),
       'Sell Price ($)': parseFloat(result.sellPrice),
       'Fees ($)': result.fees > 0 ? parseFloat(result.fees) : 0,
       'Units Bought': result.unitsBought.toFixed(4),
       'Total Sell Value ($)': result.totalSellValue,
       'Net Proceeds ($)': result.netProceeds,
       'ROI ($)': result.roi,
       'ROI after Tax ($)': result.roiAfterTax,
       'Holding Days': result.holdingDays,
       'Term Type': result.isLongTerm ? 'Long Term' : 'Short Term',
       'Tax Rate (%)': result.taxRate,
       'Gain ($)': result.gain,
       'Tax ($)': result.tax,
       'Net Profit/Loss ($)': result.netProfit
     }));

    // Add summary row
    const totalGain = results.reduce((sum, r) => sum + r.gain, 0);
    const totalTax = results.reduce((sum, r) => sum + r.tax, 0);
    const totalNet = results.reduce((sum, r) => sum + r.netProfit, 0);

    excelData.push({
      'Transaction #': 'TOTAL',
      'Crypto': '',
      'Symbol': '',
      'Purchase Date': '',
      'Sell Date': '',
      'Purchase Price ($)': '',
      'Sell Price ($)': '',
      'Holding Days': '',
      'Term Type': '',
      'Tax Rate (%)': '',
      'Gain ($)': totalGain,
      'Tax ($)': totalTax,
      'Net Profit/Loss ($)': totalNet
    });

    const csv = Papa.unparse(excelData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `crypto-tax-report-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      {/* Enhanced Tool Description */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900">
            <Calculator className="w-5 h-5" />
            Crypto Tax Calculator - Calculate Your Capital Gains Tax
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">💡 Understanding Crypto Taxes</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Cryptocurrency transactions are taxable events in most countries. When you sell crypto for a profit, you're subject to capital gains tax. This calculator helps you determine your tax liability based on your holding period and applicable tax rates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 text-sm mb-1">✅ What This Calculator Does:</h4>
                <ul className="text-green-700 text-xs space-y-1">
                  <li>• Calculates capital gains/losses</li>
                  <li>• Determines short vs long-term holding</li>
                  <li>• Applies appropriate tax rates</li>
                  <li>• Includes transaction fees</li>
                  <li>• Exports results to CSV</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <h4 className="font-medium text-orange-800 text-sm mb-1">📊 Key Tax Concepts:</h4>
                <ul className="text-orange-700 text-xs space-y-1">
                  <li>• Short-term: Held less than 1 year (higher tax rate)</li>
                  <li>• Long-term: Held 1 year or more (lower tax rate)</li>
                  <li>• Capital gains = Sell price - Purchase price</li>
                  <li>• Net profit = Gains - Fees - Taxes</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Rate Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Tax Rate Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="shortTermRate">Short-Term Capital Gains Tax (%)</Label>
            <Input
                id="shortTermRate"
              type="number"
                value={shortTermRate}
                onChange={(e) => setShortTermRate(e.target.value)}
                placeholder="30"
            />
            </div>
            <div>
              <Label htmlFor="longTermRate">Long-Term Capital Gains Tax (%)</Label>
            <Input
                id="longTermRate"
              type="number"
                value={longTermRate}
                onChange={(e) => setLongTermRate(e.target.value)}
                placeholder="20"
            />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Crypto Transactions
            </span>
            <div className="flex gap-2">
              <Button onClick={addTransaction} size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Transaction
              </Button>
              <Button onClick={resetForm} variant="outline" size="sm" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {transactions.map((tx, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Transaction {index + 1}</h3>
                {transactions.length > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeTransaction(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Crypto Selection */}
                <div className="relative">
                    <Label>Crypto</Label>
                    <div className="relative">
                    <Input
                      placeholder="Search crypto..."
                      value={tx.cryptoName || ''}
                      onClick={() => setDropdownOpen(index)}
                      readOnly
                      className="cursor-pointer"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>
                  
                  {dropdownOpen === index && (
                    <div ref={dropdownRef} className="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      <div className="p-2 border-b">
                      <Input
                          placeholder="Search cryptos..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full"
                      />
                      </div>
                      {cryptoLoading ? (
                        <div className="p-4 text-center text-gray-500">Loading...</div>
                      ) : (
                        <div>
                          {filteredCryptos.map((crypto) => (
                                <div
                              key={crypto.id}
                              onClick={() => selectCrypto(index, crypto)}
                              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 flex items-center justify-between"
                                >
                              <div className="flex items-center gap-3">
                                <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
                                <div>
                                  <div className="font-medium">{crypto.name}</div>
                                  <div className="text-sm text-gray-500">{crypto.symbol.toUpperCase()}</div>
                                </div>
                                  </div>
                              <div className="text-right">
                                <div className="font-medium">${crypto.current_price.toLocaleString()}</div>
                                <div className={`text-xs ${crypto.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {crypto.price_change_percentage_24h > 0 ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Purchase Date */}
                <div>
                    <Label>Purchase Date</Label>
                    <Input
                      type="date"
                      value={tx.purchaseDate}
                    onChange={(e) => updateTransaction(index, 'purchaseDate', e.target.value)}
                  />
                </div>

                {/* Sell Date */}
                <div>
                    <Label>Sell Date</Label>
                    <Input
                      type="date"
                      value={tx.sellDate}
                    onChange={(e) => updateTransaction(index, 'sellDate', e.target.value)}
                    />
                  </div>

                {/* Investment Amount */}
                <div>
                  <Label>Investment Amount ($)</Label>
                      <Input
                        type="number"
                    value={tx.investmentAmount}
                    onChange={(e) => updateTransaction(index, 'investmentAmount', e.target.value)}
                    placeholder="1000"
                    step="0.01"
                  />
          </div>

                {/* Purchase Price */}
                <div>
                  <Label>Purchase Price Of Crypto ($)</Label>
            <Input
              type="number"
                    value={tx.purchasePrice}
                    onChange={(e) => updateTransaction(index, 'purchasePrice', e.target.value)}
                    placeholder="100"
                    step="0.01"
                  />
                </div>

                {/* Sell Price */}
                <div>
                  <Label>Sell Price Of Crypto ($)</Label>
                  <Input
                    type="number"
                    value={tx.sellPrice}
                    onChange={(e) => updateTransaction(index, 'sellPrice', e.target.value)}
                    placeholder="Auto-filled with live price"
                    step="0.01"
                  />
                </div>

                {/* Fees */}
                <div>
                  <Label>Fees (Optional) ($)</Label>
                  <Input
                    type="number"
                    value={tx.fees}
                    onChange={(e) => updateTransaction(index, 'fees', e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                  />
                  <p className="text-xs text-gray-500 mt-1">Include all total fees for both purchase and sell transactions</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Calculate Button */}
      <div className="flex justify-center">
        <Button 
          onClick={calculateTax} 
          size="lg" 
          className="px-8 py-3 text-lg"
                     disabled={transactions.some(tx => !tx.crypto || !tx.purchaseDate || !tx.sellDate || !tx.investmentAmount || !tx.purchasePrice || !tx.sellPrice)}
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate Tax
        </Button>
      </div>

      {/* Results */}
      {results && (
        <Card>
          <CardHeader>
            <CardTitle>Crypto Tax Calculation Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
                         {results.map((result, index) => (
               <div key={index} className="border rounded-lg p-6 space-y-4">
                 <h3 className="text-xl font-bold text-blue-600">
                   Crypto {index + 1}: {result.cryptoName} ({result.cryptoSymbol})
                 </h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                   <div>
                     <span className="font-medium">Purchased At:</span> {formatCurrency(result.purchasePrice)}
                   </div>
                   <div>
                     <span className="font-medium">Sold At:</span> {formatCurrency(result.sellPrice)}
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                   <div>
                     <span className="font-medium">Amount Invested:</span> {formatCurrency(result.investmentAmount)}
                   </div>
                   <div>
                     <span className="font-medium">Fees:</span> {result.fees > 0 ? formatCurrency(result.fees) : 'N/A'}
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                   <div>
                     <span className="font-medium">Holding Days:</span> {result.holdingDays} Days - {result.isLongTerm ? 'Long Term' : 'Short Term'}
                   </div>
                   <div>
                     <span className="font-medium">Tax Rate Applied:</span> {result.taxRate}%
                   </div>
                 </div>

                 {/* Calculation Breakdown */}
                 <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                   <h4 className="font-semibold text-gray-800 mb-2">📈 Calculation Breakdown</h4>
                   <div className="grid grid-cols-1 gap-2">
                     <div>
                       <span className="font-medium">Units Bought:</span> {formatCurrency(result.investmentAmount)} / {formatCurrency(result.purchasePrice)} = <strong>{result.unitsBought.toFixed(4)} {result.cryptoSymbol}</strong>
                     </div>
                     <div>
                       <span className="font-medium">Total Sell Value ({result.unitsBought.toFixed(4)} {result.cryptoSymbol} @ {formatCurrency(result.sellPrice)}):</span> <strong>{formatCurrency(result.totalSellValue)}</strong>
                     </div>
                     <div>
                       <span className="font-medium">Net Proceeds (after fees):</span> {formatCurrency(result.totalSellValue)} - {formatCurrency(result.fees)} = <strong>{formatCurrency(result.netProceeds)}</strong>
                     </div>
                     <div>
                       <span className="font-medium">ROI:</span> {formatCurrency(result.netProceeds)} - {formatCurrency(result.investmentAmount)} = <strong>{formatCurrency(result.roi)}</strong>
                     </div>
                     <div>
                       <span className="font-medium">Tax ({result.taxRate}% on Gain):</span> {result.taxRate}% of {formatCurrency(result.roi)} = <strong>{formatCurrency(result.tax)}</strong>
                     </div>
                     <div>
                       <span className="font-medium">ROI after Tax:</span> {formatCurrency(result.roi)} - {formatCurrency(result.tax)} = <strong>{formatCurrency(result.roiAfterTax)}</strong>
                     </div>
                   </div>
                 </div>

                 {/* Final Summary */}
                 <div className="bg-blue-50 p-4 rounded-lg space-y-2 text-sm">
                   <h4 className="font-semibold text-blue-800 mb-2">✅ Final Summary</h4>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div>
                       <span className="font-medium">Gain:</span> <strong>{formatCurrency(result.gain)}</strong>
                     </div>
                     <div>
                       <span className="font-medium">Tax:</span> <strong>{formatCurrency(result.tax)}</strong>
                     </div>
                     <div>
                       <span className={`font-medium ${result.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                         Net Profit/Loss: <strong>{formatCurrency(result.netProfit)}</strong>
                       </span>
                </div>
                </div>
              </div>
                </div>
             ))}

                         {/* Summary */}
             <div className="border-t pt-4">
               <h4 className="text-lg font-semibold mb-3">Summary</h4>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="text-center p-3 bg-gray-50 rounded">
                   <div className="text-2xl font-bold text-blue-600">
                     {formatCurrency(results.reduce((sum, r) => sum + r.gain, 0))}
                   </div>
                   <div className="text-sm text-gray-600">Total Gain</div>
                 </div>
                 <div className="text-center p-3 bg-gray-50 rounded">
                   <div className="text-2xl font-bold text-red-600">
                     {formatCurrency(results.reduce((sum, r) => sum + r.tax, 0))}
                   </div>
                   <div className="text-sm text-gray-600">Total Tax</div>
                 </div>
                 <div className="text-center p-3 bg-gray-50 rounded">
                   <div className={`text-2xl font-bold ${results.reduce((sum, r) => sum + r.netProfit, 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                     {formatCurrency(results.reduce((sum, r) => sum + r.netProfit, 0))}
                   </div>
                   <div className="text-sm text-gray-600">Net Profit/Loss</div>
                 </div>
                </div>
               
               {/* Export Button */}
               <div className="flex justify-center mt-6">
                 <Button onClick={exportToExcel} className="gap-2">
                   <FileSpreadsheet className="w-4 h-4" />
                   Export to Excel
                 </Button>
              </div>
            </div>
        </CardContent>
      </Card>
      )}



      {/* Tax Planning Tips */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-xl">💡 Tax Planning Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">📈 Strategic Considerations</h4>
              <ul className="text-purple-800 text-sm space-y-1">
                <li>• Consider holding for at least one year for lower tax rates</li>
                <li>• Use losses to offset gains in the same tax year</li>
                <li>• Keep detailed records of all transactions</li>
                <li>• Consider tax-loss harvesting strategies</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">🔍 Record Keeping</h4>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Save all transaction confirmations</li>
                <li>• Document fees and exchange rates</li>
                <li>• Use consistent accounting methods</li>
                <li>• Consider using crypto tax software</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CryptoTaxCalculator;
