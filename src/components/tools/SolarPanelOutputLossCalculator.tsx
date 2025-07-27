import React, { useState } from 'react';
import { Sun, MapPin, Thermometer, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const SolarPanelOutputLossCalculator = () => {
  const [panelWattage, setPanelWattage] = useState('');
  const [tiltAngle, setTiltAngle] = useState('');
  const [ambientTemp, setAmbientTemp] = useState('');
  const [region, setRegion] = useState('');
  const [surfaceCondition, setSurfaceCondition] = useState('');
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const regionData = {
    'india': { tempLoss: 0.15, dustLoss: 0.12, seasonalFactor: 0.85 },
    'us': { tempLoss: 0.10, dustLoss: 0.05, seasonalFactor: 0.90 },
    'europe': { tempLoss: 0.08, dustLoss: 0.03, seasonalFactor: 0.88 },
    'middle-east': { tempLoss: 0.20, dustLoss: 0.18, seasonalFactor: 0.82 },
    'australia': { tempLoss: 0.12, dustLoss: 0.08, seasonalFactor: 0.87 }
  };

  const calculateOutput = () => {
    const wattage = parseFloat(panelWattage);
    const angle = parseFloat(tiltAngle);
    const temp = parseFloat(ambientTemp) || 25;

    if (!wattage || !angle || !region || !surfaceCondition) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    const regionInfo = regionData[region];
    const surfaceLoss = surfaceCondition === 'dusty' ? regionInfo.dustLoss : 0.02;
    const tiltLoss = Math.abs(angle - 30) * 0.01; // Optimal tilt is around 30°
    const tempLoss = temp > 25 ? (temp - 25) * 0.004 : 0;

    const totalLoss = regionInfo.tempLoss + surfaceLoss + tiltLoss + tempLoss;
    const adjustedOutput = wattage * (1 - totalLoss) * regionInfo.seasonalFactor;
    const dailyYield = adjustedOutput * 5; // Assuming 5 peak sun hours average

    setResult({
      originalWattage: wattage,
      adjustedOutput: adjustedOutput.toFixed(2),
      totalLoss: (totalLoss * 100).toFixed(1),
      dailyYield: dailyYield.toFixed(2),
      monthlyYield: (dailyYield * 30).toFixed(2)
    });
  };

  const reset = () => {
    setPanelWattage('');
    setTiltAngle('');
    setAmbientTemp('');
    setRegion('');
    setSurfaceCondition('');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="w-5 h-5" />
            Solar Panel Output Loss Calculator
          </CardTitle>
          <CardDescription>
            Estimate real-world solar panel output loss based on region-specific weather, dust, and environmental factors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="wattage">Panel Wattage (W)</Label>
              <Input
                id="wattage"
                type="number"
                placeholder="e.g., 400"
                value={panelWattage}
                onChange={(e) => setPanelWattage(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tilt">Tilt Angle (degrees)</Label>
              <Input
                id="tilt"
                type="number"
                placeholder="e.g., 30"
                value={tiltAngle}
                onChange={(e) => setTiltAngle(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="middle-east">Middle East</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="surface">Surface Condition</Label>
              <Select value={surfaceCondition} onValueChange={setSurfaceCondition}>
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clean">Clean</SelectItem>
                  <SelectItem value="dusty">Dusty</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="temp">Ambient Temperature (°C) - Optional</Label>
            <Input
              id="temp"
              type="number"
              placeholder="e.g., 35 (default: 25°C)"
              value={ambientTemp}
              onChange={(e) => setAmbientTemp(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateOutput} className="flex-1">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Output
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>

          {result && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Adjusted Output</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.adjustedOutput}W
                  </p>
                  <p className="text-sm text-blue-600">
                    vs {result.originalWattage}W rated
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800">Total Loss</h3>
                  <p className="text-2xl font-bold text-orange-600">
                    {result.totalLoss}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800">Daily Yield</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {result.dailyYield}Wh
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Monthly Yield</h3>
                  <p className="text-2xl font-bold text-purple-600">
                    {result.monthlyYield}Wh
                  </p>
                </div>
              </div>
            </div>
          )}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Why Solar Panel Output Loss Calculator?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Real-world solar panel output is affected by dust, weather, temperature, and installation factors. This calculator helps you estimate and understand these losses, so you can optimize your solar investment, plan maintenance, and set realistic expectations for energy production. It's essential for anyone looking to maximize the efficiency and return on investment of their solar PV system.
              </p>
            </CardContent>
          </Card>

          {/* About This Tool */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">About This Tool</h3>
            <p className="text-gray-600 mb-4">
              The Solar Panel Output Loss Calculator helps you estimate the real-world performance loss of your solar panels due to factors like weather, dust, temperature, and installation conditions. This tool is ideal for homeowners, solar installers, and energy consultants who want to understand and optimize the efficiency of their solar PV systems.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Region-specific loss estimation (weather, dust, etc.)</li>
              <li>• Takes into account temperature and environmental factors</li>
              <li>• Calculates both theoretical and actual output</li>
              <li>• User-friendly interface for quick calculations</li>
              <li>• Useful for both residential and commercial solar projects</li>
            </ul>
          </div>

          {/* How to Use Section */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">How to Use This Tool?</h3>
            <ol className="list-decimal list-inside space-y-1 text-base text-gray-600">
              <li>Select your region from the dropdown</li>
              <li>Enter your solar panel's rated wattage</li>
              <li>Input the tilt angle of your panels</li>
              <li>Choose surface condition (clean or dusty)</li>
              <li>Optionally enter ambient temperature for more accuracy</li>
              <li>Click "Calculate Output" to see real-world performance</li>
            </ol>
          </div>

          {/* FAQ Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. What is a Solar Panel Output Loss Calculator?</h3>
                <p className="text-gray-700">It estimates real-world power loss in solar panels due to weather, dust, and other factors.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2. How do I use this tool?</h3>
                <p className="text-gray-700">Enter your panel’s rated wattage and select your region to get loss estimates.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3. What factors cause output loss in solar panels?</h3>
                <p className="text-gray-700">Weather, dust, temperature, shading, and installation angle.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Does the calculator account for seasonal changes?</h3>
                <p className="text-gray-700">Yes, it uses region-specific averages for more accurate results.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Can I use this for commercial solar systems?</h3>
                <p className="text-gray-700">Yes, it works for both residential and commercial installations.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">6. How can I reduce output loss?</h3>
                <p className="text-gray-700">Clean panels regularly, optimize tilt angle, and avoid shading.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">7. Does the tool estimate daily and monthly yield?</h3>
                <p className="text-gray-700">Yes, it provides both daily and monthly energy output estimates.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">8. Is this tool suitable for off-grid setups?</h3>
                <p className="text-gray-700">Yes, it’s helpful for sizing batteries and inverters in off-grid systems.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">9. Does panel orientation affect results?</h3>
                <p className="text-gray-700">Yes, the tool factors in tilt angle for more accurate loss estimation.</p>
            </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">10. Is my data private?</h3>
                <p className="text-gray-700">Yes, all calculations are performed locally and not stored.</p>
          </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default SolarPanelOutputLossCalculator;
