
import React, { useState, useEffect } from 'react';
import { Fuel, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

// Infura-supported EVM chains
const infuraChains = [
  { key: 'ethereum', name: 'Ethereum', symbol: 'ETH', chainId: 1 },
  { key: 'polygon', name: 'Polygon', symbol: 'MATIC', chainId: 137 },
  { key: 'arbitrum', name: 'Arbitrum One', symbol: 'ETH', chainId: 42161 },
  { key: 'optimism', name: 'Optimism', symbol: 'ETH', chainId: 10 },
  { key: 'base', name: 'Base', symbol: 'ETH', chainId: 8453 },
  { key: 'bsc', name: 'BNB Smart Chain', symbol: 'BNB', chainId: 56 },
  { key: 'avalanche', name: 'Avalanche', symbol: 'AVAX', chainId: 43114 },
  { key: 'linea', name: 'Linea', symbol: 'ETH', chainId: 59144 },
  { key: 'zksync', name: 'zkSync Era', symbol: 'ETH', chainId: 324 },
];

const INFURA_GAS_API = 'https://gas.api.infura.io/v3/076ed2d5277c48d3a419057cf9305ee8';

async function fetchInfuraGas(chainId: number) {
  const url = `${INFURA_GAS_API}/networks/${chainId}/suggestedGasFees`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  const json = await res.json();
  // The structure is json.low, json.medium, json.high (all in gwei, as string)
  if (!json.low || !json.medium || !json.high) throw new Error('Malformed response');
  return {
    slow: parseFloat(json.low.suggestedMaxFeePerGas),
    normal: parseFloat(json.medium.suggestedMaxFeePerGas),
    fast: parseFloat(json.high.suggestedMaxFeePerGas),
    baseFee: parseFloat(json.estimatedBaseFee),
  };
}

const actions = {
  send: { name: 'Send Token', gasEstimate: 21000 },
  swap: { name: 'Token Swap', gasEstimate: 150000 },
  mint: { name: 'NFT Mint', gasEstimate: 100000 },
};

const GasFeeEstimator = () => {
  const [selectedChain, setSelectedChain] = useState('');
  const [actionType, setActionType] = useState('');
  const [gasData, setGasData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mocked, setMocked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (selectedChain) {
      const fetchGas = async () => {
        setIsLoading(true);
        setError('');
        setMocked(false);
        const chain = infuraChains.find(c => c.key === selectedChain);
        if (!chain) {
          setError('Unsupported chain.');
          setIsLoading(false);
          return;
        }
        try {
          const gasData = await fetchInfuraGas(chain.chainId);
          setGasData(gasData);
        } catch (e: any) {
          setError('Failed to fetch live gas prices. Showing estimated values.');
          setMocked(true);
          // Fallback mock data for selected chain
          setGasData({ slow: 30, normal: 35, fast: 40, baseFee: 30 });
        } finally {
          setIsLoading(false);
        }
      };
      fetchGas();
    } else {
      setGasData(null);
    }
  }, [selectedChain]);

  const getGasLimit = () => {
    return actionType ? actions[actionType].gasEstimate : 21000;
  };

  // Infura returns gwei, so convert to wei for calculation
  const calculateFee = (gasPriceGwei: number, gasLimit: number) => {
    const feeInGwei = gasPriceGwei * gasLimit;
    const feeInEth = (gasPriceGwei * gasLimit) / 1e9;
    return {
      gwei: feeInGwei.toFixed(0),
      eth: feeInEth.toFixed(6),
    };
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fuel className="w-5 h-5" />
          Gas Fee Estimator
        </CardTitle>
        <CardDescription>
          Check real-time gas fees for all major EVM blockchains supported by Infura across different transaction types.
        </CardDescription>
        <div className="text-xs text-gray-500 mt-2">
          <b>Supported blockchains:</b> {infuraChains.map(c => c.name).join(', ')}
        </div>
      </CardHeader>
      
      {/* Enhanced Tool Description */}
      <div className="px-6 pb-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Understanding Gas Fees</h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            Gas fees are the transaction costs you pay to execute operations on blockchain networks. They compensate miners/validators for processing your transactions and help prevent network spam. Understanding gas fees is crucial for cost-effective blockchain interactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-medium text-green-800 text-sm mb-1">✅ What This Tool Shows:</h4>
            <ul className="text-green-700 text-xs space-y-1">
              <li>• Real-time gas prices in gwei</li>
              <li>• Transaction cost estimates</li>
              <li>• Speed vs cost trade-offs</li>
              <li>• Multi-chain support</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <h4 className="font-medium text-orange-800 text-sm mb-1">📊 Speed Options:</h4>
            <ul className="text-orange-700 text-xs space-y-1">
              <li>• Slow: Cheapest, longer wait</li>
              <li>• Standard: Balanced option</li>
              <li>• Fast: Highest priority</li>
              <li>• Base fee: Network minimum</li>
            </ul>
          </div>
        </div>
      </div>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="chain">Blockchain</Label>
            <Select value={selectedChain} onValueChange={v => { setSelectedChain(v); setGasData(null); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select blockchain" />
              </SelectTrigger>
              <SelectContent>
                {infuraChains.map((chain) => (
                  <SelectItem key={chain.key} value={chain.key}>
                    {chain.name} ({chain.symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="action">Action Type</Label>
            <Select value={actionType} onValueChange={setActionType} disabled={!selectedChain}>
              <SelectTrigger>
                <SelectValue placeholder="Select action" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(actions).map(([key, action]) => (
                  <SelectItem key={key} value={key}>
                    {action.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          onClick={() => selectedChain && setSelectedChain(selectedChain)}
          className="w-full"
          disabled={!selectedChain || isLoading}
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Fetching Gas Data...
            </>
          ) : (
            <>
              <Fuel className="w-4 h-4 mr-2" />
              Get Current Gas Fees
            </>
          )}
        </Button>
        {error && <div className="text-yellow-600 font-medium my-2">{error}</div>}
        {mocked && <div className="text-xs text-yellow-700 mb-2">Mock data shown. Live data will appear when available.</div>}
        {gasData && actionType && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Gas Fees for {infuraChains.find(c => c.key === selectedChain)?.name}</h3>
              <div className="text-sm text-gray-500">
                {infuraChains.find(c => c.key === selectedChain)?.symbol}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Slow</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{gasData.slow.toFixed(2)} gwei</p>
                  <p className="font-bold text-green-600">
                    {calculateFee(gasData.slow, getGasLimit()).eth} {infuraChains.find(c => c.key === selectedChain)?.symbol}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Standard</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{gasData.normal.toFixed(2)} gwei</p>
                  <p className="font-bold text-blue-600">
                    {calculateFee(gasData.normal, getGasLimit()).eth} {infuraChains.find(c => c.key === selectedChain)?.symbol}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Fast</h4>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{gasData.fast.toFixed(2)} gwei</p>
                  <p className="font-bold text-red-600">
                    {calculateFee(gasData.fast, getGasLimit()).eth} {infuraChains.find(c => c.key === selectedChain)?.symbol}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              <b>Base Fee:</b> {gasData.baseFee.toFixed(2)} gwei
            </div>
          </div>
        )}
        <div className="text-xs text-gray-500 mt-2">
          <b>Note:</b> Data is fetched from Infura Gas API. Supported blockchains: {infuraChains.map(c => c.name).join(', ')}
          <br />
          <b>Note:</b> No backend proxy required. Infura supports CORS for browser requests.
        </div>
      </CardContent>
    </Card>



    {/* Gas Fee Tips */}
    <Card className="w-full max-w-3xl mx-auto mt-6">
      <CardHeader>
        <CardTitle className="text-xl">💡 Gas Fee Optimization Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">⏰ Timing Strategies</h4>
            <ul className="text-purple-800 text-sm space-y-1">
              <li>• Avoid peak hours (US business hours)</li>
              <li>• Check gas prices before sending</li>
              <li>• Use weekends for non-urgent transactions</li>
              <li>• Monitor network congestion</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">🔧 Technical Tips</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Use Layer 2 solutions when possible</li>
              <li>• Batch multiple operations together</li>
              <li>• Choose appropriate gas limits</li>
              <li>• Consider alternative blockchains</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default GasFeeEstimator;
