import React, { useState } from 'react';
import { Zap, Calculator, Thermometer, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const PCBTraceCurrentCalculator = () => {
  const [traceWidth, setTraceWidth] = useState('');
  const [copperWeight, setCopperWeight] = useState('');
  const [temperatureRise, setTemperatureRise] = useState('');
  const [layerType, setLayerType] = useState('');
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const calculateCurrent = () => {
    const width = parseFloat(traceWidth);
    const weight = parseFloat(copperWeight);
    const tempRise = parseFloat(temperatureRise);

    if (!width || !weight || !tempRise || !layerType) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // IPC-2221 formula for current capacity
    const area = width * weight * 0.035; // Convert oz to mm
    const layerFactor = layerType === 'external' ? 1.0 : 0.8;
    const maxCurrent = area * Math.sqrt(tempRise) * layerFactor * 0.048;
    
    // Calculate resistance and voltage drop
    const resistance = (0.0172 * 1000) / (width * weight * 0.035); // mΩ per 1000mm
    const voltageDrop = resistance * 0.001; // V per 1000mm
    const powerDissipation = maxCurrent * maxCurrent * resistance * 0.001; // W per 1000mm

    setResult({
      maxCurrent: maxCurrent.toFixed(2),
      resistance: resistance.toFixed(3),
      voltageDrop: voltageDrop.toFixed(4),
      powerDissipation: powerDissipation.toFixed(4),
      area: area.toFixed(3)
    });
  };

  const reset = () => {
    setTraceWidth('');
    setCopperWeight('');
    setTemperatureRise('');
    setLayerType('');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            PCB Trace Current Calculator
          </CardTitle>
          <CardDescription>
            Calculate safe current limits for PCB traces using IPC-2221 standards
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="width">Trace Width (mm)</Label>
              <Input
                id="width"
                type="number"
                placeholder="e.g., 0.5"
                value={traceWidth}
                onChange={(e) => setTraceWidth(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="copper">Copper Weight (oz)</Label>
              <Select value={copperWeight} onValueChange={setCopperWeight}>
                <SelectTrigger>
                  <SelectValue placeholder="Select copper weight" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5">0.5 oz</SelectItem>
                  <SelectItem value="1">1 oz (Standard)</SelectItem>
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
              <Select value={temperatureRise} onValueChange={setTemperatureRise}>
                <SelectTrigger>
                  <SelectValue placeholder="Select temperature rise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5°C (High Reliability)</SelectItem>
                  <SelectItem value="10">10°C (Standard)</SelectItem>
                  <SelectItem value="15">15°C (High Power)</SelectItem>
                  <SelectItem value="20">20°C (Temporary)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="layer">Layer Type</Label>
              <Select value={layerType} onValueChange={setLayerType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select layer type" />
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
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Maximum Safe Current</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.maxCurrent}A
                  </p>
                  <p className="text-sm text-blue-600">
                    Based on IPC-2221 standards
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800">Trace Area</h3>
                  <p className="text-2xl font-bold text-green-600">
                    {result.area} mm²
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800">Resistance</h3>
                  <p className="text-lg font-bold text-orange-600">
                    {result.resistance} mΩ
                  </p>
                  <p className="text-sm text-orange-600">per 1000mm</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800">Voltage Drop</h3>
                  <p className="text-lg font-bold text-purple-600">
                    {result.voltageDrop}V
                  </p>
                  <p className="text-sm text-purple-600">per 1000mm</p>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800">Power Dissipation</h3>
                  <p className="text-lg font-bold text-red-600">
                    {result.powerDissipation}W
                  </p>
                  <p className="text-sm text-red-600">per 1000mm</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PCBTraceCurrentCalculator;
