
import { useState } from 'react';
import { Zap, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InverterEfficiencyCalculator = () => {
  const [inputPower, setInputPower] = useState('');
  const [outputPower, setOutputPower] = useState('');
  const [result, setResult] = useState<{
    efficiency: number;
    powerLoss: number;
    powerLossPercentage: number;
  } | null>(null);

  const calculateEfficiency = () => {
    const input = parseFloat(inputPower);
    const output = parseFloat(outputPower);
    
    if (input && output && input > 0 && output >= 0) {
      const efficiency = (output / input) * 100;
      const powerLoss = input - output;
      const powerLossPercentage = (powerLoss / input) * 100;
      
      setResult({
        efficiency: Math.min(efficiency, 100),
        powerLoss: Math.max(powerLoss, 0),
        powerLossPercentage: Math.max(powerLossPercentage, 0)
      });
    } else {
      setResult(null);
    }
  };

  const getEfficiencyClass = (efficiency: number) => {
    if (efficiency >= 90) return 'result-card-success';
    if (efficiency >= 80) return 'result-card-warning';
    return 'result-card-error';
  };

  const getEfficiencyValueClass = (efficiency: number) => {
    if (efficiency >= 90) return 'text-success-value';
    if (efficiency >= 80) return 'text-warning-value';
    return 'text-error-value';
  };

  const reset = () => {
    setInputPower('');
    setOutputPower('');
    setResult(null);
  };

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Inverter Efficiency Calculator
          </CardTitle>
          <CardDescription>
            Calculate inverter efficiency and power losses to optimize your power system performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="inputPower">DC Input Power (Watts)</Label>
              <Input
                id="inputPower"
                type="number"
                value={inputPower}
                onChange={(e) => setInputPower(e.target.value)}
                placeholder="e.g., 500"
              />
              <p className="mt-1 text-xs text-muted-foreground">Power coming into the inverter from battery/solar</p>
            </div>
            
            <div>
              <Label htmlFor="outputPower">AC Output Power (Watts)</Label>
              <Input
                id="outputPower"
                type="number"
                value={outputPower}
                onChange={(e) => setOutputPower(e.target.value)}
                placeholder="e.g., 450"
              />
              <p className="mt-1 text-xs text-muted-foreground">Power delivered by the inverter to appliances</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={calculateEfficiency} className="flex-1">
              <Calculator className="h-4 w-4 mr-2" />
              Calculate Efficiency
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
          
          {result !== null && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-lg ${getEfficiencyClass(result.efficiency)}`}>
                <h3 className="text-lg font-semibold mb-2">
                  Efficiency
                </h3>
                <p className={`text-result-value ${getEfficiencyValueClass(result.efficiency)}`}>
                  {result.efficiency.toFixed(2)}%
                </p>
              </div>

              <div className="p-6 result-card-error rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Power Loss
                </h3>
                <p className="text-result-value text-error-value">
                  {result.powerLoss.toFixed(2)}W
                </p>
              </div>
              
              <div className="p-6 result-card-warning rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Loss Percentage
                </h3>
                <p className="text-result-value text-warning-value">
                  {result.powerLossPercentage.toFixed(2)}%
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default InverterEfficiencyCalculator;
