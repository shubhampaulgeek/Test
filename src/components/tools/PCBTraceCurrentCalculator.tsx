import React, { useState } from 'react';
import { Zap, Calculator, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const PCBTraceCurrentCalculator = () => {
  const [traceWidth, setTraceWidth] = useState('');
  const [widthUnit, setWidthUnit] = useState('mm');
  const [copperWeight, setCopperWeight] = useState('');
  const [tempRise, setTempRise] = useState('10');
  const [layerType, setLayerType] = useState('external');
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const calculateCurrent = () => {
    const width = parseFloat(traceWidth);
    const temp = parseFloat(tempRise);
    const copper = parseFloat(copperWeight);

    if (!width || !temp || !copper) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Convert width to mils if in mm
    const widthMils = widthUnit === 'mm' ? width * 39.37 : width;
    
    // IPC-2221 formula for external layers
    // I = k * (dT^b) * (A^c)
    // Where k, b, c are constants based on layer type
    const k = layerType === 'external' ? 0.048 : 0.024;
    const b = 0.44;
    const c = 0.725;
    
    // Cross-sectional area in square mils
    const area = widthMils * (copper * 1.37); // 1 oz = 1.37 mils thickness
    
    const maxCurrent = k * Math.pow(temp, b) * Math.pow(area, c);
    
    // Calculate resistance and voltage drop
    const resistance = (0.00051 * 1000) / (widthMils * copper * 1.37); // ohms per inch
    const voltageDrop = maxCurrent * resistance; // V/inch
    
    setResult({
      maxCurrent: maxCurrent.toFixed(2),
      traceArea: area.toFixed(2),
      resistance: (resistance * 1000).toFixed(3), // mOhms/inch
      voltageDrop: (voltageDrop * 1000).toFixed(2), // mV/inch
      recommendation: maxCurrent > 5 ? 'Consider wider trace or heavier copper' : 'Trace width is adequate'
    });
  };

  const reset = () => {
    setTraceWidth('');
    setTempRise('10');
    setCopperWeight('');
    setLayerType('external');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            PCB Trace Current Capacity Calculator
          </CardTitle>
          <CardDescription>
            Calculate safe current handling capacity for PCB traces based on IPC-2221 standards
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="width">Trace Width</Label>
              <div className="flex gap-2">
                <Input
                  id="width"
                  type="number"
                  placeholder="e.g., 0.5"
                  value={traceWidth}
                  onChange={(e) => setTraceWidth(e.target.value)}
                  className="flex-1"
                />
                <Select value={widthUnit} onValueChange={setWidthUnit}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mm">mm</SelectItem>
                    <SelectItem value="mils">mils</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="copper">Copper Weight (oz)</Label>
              <Select value={copperWeight} onValueChange={setCopperWeight}>
                <SelectTrigger>
                  <SelectValue placeholder="Select copper weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">0.5 oz</SelectItem>
                  <SelectItem value="1">1 oz</SelectItem>
                  <SelectItem value="2">2 oz</SelectItem>
                  <SelectItem value="3">3 oz</SelectItem>
                  <SelectItem value="4">4 oz</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="temp">Temperature Rise (°C)</Label>
              <Input
                id="temp"
                type="number"
                placeholder="10"
                value={tempRise}
                onChange={(e) => setTempRise(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="layer">Layer Type</Label>
              <Select value={layerType} onValueChange={setLayerType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="external">External Layer</SelectItem>
                  <SelectItem value="internal">Internal Layer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateCurrent} className="flex-1">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Current
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>

          {result && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800">Max Current</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {result.maxCurrent}A
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Trace Area</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.traceArea}
                  </p>
                  <p className="text-sm text-blue-600">square mils</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800">Resistance</h3>
                  <p className="text-2xl font-bold text-orange-600">
                    {result.resistance}
                  </p>
                  <p className="text-sm text-orange-600">mΩ/inch</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Voltage Drop</h3>
                  <p className="text-2xl font-bold text-purple-600">
                    {result.voltageDrop}
                  </p>
                  <p className="text-sm text-purple-600">mV/inch</p>
                </div>
              </div>

              {parseFloat(result.maxCurrent) > 5 && (
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <p className="font-medium text-yellow-800">
                      {result.recommendation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Why PCB Trace Current Calculator?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Proper PCB trace sizing is critical for safety, reliability, and performance in electronics design. This calculator helps you determine the safe current-carrying capacity of PCB traces based on industry standards, preventing overheating, voltage drops, and potential circuit failures. It's an essential tool for engineers, makers, and students working on custom PCB layouts.
              </p>
            </CardContent>
          </Card>

          {/* About This Tool */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">About This Tool</h3>
            <p className="text-gray-600 mb-4">
              The PCB Trace Current Capacity Calculator helps you determine the safe current-carrying capacity of PCB traces based on width, copper weight, temperature rise, and layer type. This tool is essential for PCB designers and engineers to ensure reliable and safe circuit board layouts.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Calculates max current using IPC-2221 standards</li>
              <li>• Supports both mm and mils for trace width</li>
              <li>• Considers copper weight and temperature rise</li>
              <li>• Handles both external and internal PCB layers</li>
              <li>• Provides resistance and voltage drop estimates</li>
            </ul>
          </div>

          {/* How to Use Section */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">How to Use This Tool?</h3>
            <ol className="list-decimal list-inside space-y-1 text-base text-gray-600">
              <li>Enter trace width in mm or mils</li>
              <li>Choose copper weight (1 oz is standard)</li>
              <li>Set allowed temperature rise (10°C is typical)</li>
              <li>Select layer type (external cools better)</li>
              <li>Click "Calculate Current" to see safe amperage</li>
            </ol>
          </div>

          {/* FAQ Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. What is a PCB Trace Current Calculator?</h3>
                <p className="text-gray-700">It estimates the maximum safe current a PCB trace can carry based on width, copper weight, and temperature rise.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2. How do I use this tool?</h3>
                <p className="text-gray-700">Enter trace width, copper weight, and desired temperature rise to get current capacity.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3. What standards does this calculator use?</h3>
                <p className="text-gray-700">It follows IPC-2221 guidelines for PCB design and safety.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Can I use this for both internal and external PCB layers?</h3>
                <p className="text-gray-700">Yes, select the appropriate layer type for accurate results.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Does the tool support metric and imperial units?</h3>
                <p className="text-gray-700">Yes, you can input values in mm, mils, or ounces.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">6. Why is trace width important for current capacity?</h3>
                <p className="text-gray-700">Wider traces can carry more current and reduce voltage drop and overheating.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">7. How does copper weight affect current capacity?</h3>
                <p className="text-gray-700">Higher copper weight increases the trace’s ability to carry current.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">8. What is temperature rise in PCB traces?</h3>
                <p className="text-gray-700">It’s the increase in temperature due to current flow; keep it within safe limits.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">9. Can I use this for high-frequency signals?</h3>
                <p className="text-gray-700">For high-frequency, consider skin effect and impedance in addition to current.</p>
            </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">10. Is my data stored?</h3>
                <p className="text-gray-700">No, all calculations are local and private.</p>
          </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default PCBTraceCurrentCalculator;
