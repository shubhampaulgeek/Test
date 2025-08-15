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
        </CardContent>
      </Card>
    </div>
  );
};

export default SolarPanelOutputLossCalculator;
