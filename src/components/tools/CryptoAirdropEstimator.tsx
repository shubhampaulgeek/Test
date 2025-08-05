
import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CryptoAirdropEstimator = () => {
  const [marketCap, setMarketCap] = useState('');
  const [supply, setSupply] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculatePrice = () => {
    const mcap = parseFloat(marketCap);
    const totalSupply = parseFloat(supply);
    
    if (mcap > 0 && totalSupply > 0) {
      const price = mcap / totalSupply;
      setResult(price);
    }
  };

  const reset = () => {
    setMarketCap('');
    setSupply('');
    setResult(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Crypto Airdrop Price Estimator
        </CardTitle>
        <CardDescription>
          Estimate the value of upcoming crypto airdrops using market cap, total supply, and circulating supply.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="marketCap">Market Capitalization ($)</Label>
          <Input
            id="marketCap"
            type="number"
            placeholder="e.g., 1000000"
            value={marketCap}
            onChange={(e) => setMarketCap(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="supply">Circulating Supply/Total Supply (tokens)</Label>
          <Input
            id="supply"
            type="number"
            placeholder="e.g., 100000000"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={calculatePrice} className="flex-1">
            Calculate
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>

        {result !== null && (
          <>
            <div className="mt-4 p-4 result-card-success rounded-lg">
              <h3 className="font-semibold text-success mb-2">Estimated Token Price</h3>
              <p className="text-result-value text-success-value">
                ${result.toFixed(8)}
              </p>
            </div>
          </>
        )}
      </CardContent>
      {/* Remove FAQ Section from tool card */}
    </Card>
  );
};

export default CryptoAirdropEstimator;
