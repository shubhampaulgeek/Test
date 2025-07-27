
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
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Why Inverter Efficiency Calculator?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Understanding your inverter's efficiency is crucial for optimizing energy usage and minimizing losses in solar, battery, or backup power systems. This calculator helps you quickly assess how much input power is being converted to usable output, identify inefficiencies, and make informed decisions about maintenance or upgrades. Whether for home, business, or off-grid setups, maximizing inverter efficiency saves energy and reduces costs.
          </p>
        </CardContent>
      </Card>
      {/* FAQ Section - moved below How to Use This Tool? */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. What is an Inverter Efficiency Calculator?</h3>
            <p className="text-gray-700">It calculates how efficiently your inverter converts DC input power to AC output power, helping you optimize your energy system.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">2. How do I use this tool?</h3>
            <p className="text-gray-700">Enter your inverter’s DC input and AC output power to get efficiency, power loss, and loss percentage instantly.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">3. What is a good inverter efficiency percentage?</h3>
            <p className="text-gray-700">Most modern inverters have 85–95% efficiency; higher values indicate better performance and less energy loss.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Does the calculator show power loss?</h3>
            <p className="text-gray-700">Yes, it displays both the absolute and percentage power loss, so you can identify inefficiencies in your system.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Can I use this for solar inverters?</h3>
            <p className="text-gray-700">Yes, this tool works for solar, battery, and grid-tied inverters for both residential and commercial systems.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">6. Why is my inverter efficiency low?</h3>
            <p className="text-gray-700">Possible reasons include poor wiring, overloading, high temperatures, or an old inverter. Regular maintenance helps improve efficiency.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">7. How can I improve inverter efficiency?</h3>
            <p className="text-gray-700">Use quality cables, avoid overloading, ensure proper ventilation, and maintain your inverter regularly for optimal efficiency.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">8. Does temperature affect inverter efficiency?</h3>
            <p className="text-gray-700">Yes, high temperatures can reduce efficiency. Ensure your inverter is installed in a well-ventilated area.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">9. Is my data saved?</h3>
            <p className="text-gray-700">No, all calculations are performed locally in your browser and are not saved or shared.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">10. Is this tool suitable for commercial inverters?</h3>
            <p className="text-gray-700">Yes, the calculator is suitable for both residential and commercial inverter systems.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default InverterEfficiencyCalculator;
