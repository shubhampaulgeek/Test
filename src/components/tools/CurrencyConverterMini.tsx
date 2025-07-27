import React, { useState, useEffect } from 'react';

const CurrencyConverterMini = () => {
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
};

export default CurrencyConverterMini; 