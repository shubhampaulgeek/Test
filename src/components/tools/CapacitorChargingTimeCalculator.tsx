import React, { useState } from 'react';
import { Zap, Calculator, Clock, Battery } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const CapacitorChargingTimeCalculator = () => {
  const [resistance, setResistance] = useState('');
  const [capacitance, setCapacitance] = useState('');
  const [voltage, setVoltage] = useState('');
  const [mode, setMode] = useState('');
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const calculateTime = () => {
    const R = parseFloat(resistance);
    const C = parseFloat(capacitance);
    const V = parseFloat(voltage);

    if (!R || !C || !V || !mode) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    // Convert capacitance from µF to F
    const C_farads = C / 1000000;
    
    // Calculate time constant
    const timeConstant = R * C_farads;
    
    // Calculate times for different voltage levels
    const times = {
      '63.2%': timeConstant,
      '86.5%': timeConstant * 2,
      '95.0%': timeConstant * 3,
      '98.2%': timeConstant * 4,
      '99.3%': timeConstant * 5
    };

    // Calculate specific voltage time if mode is charge
    let specificTime = 0;
    if (mode === 'charge') {
      const targetVoltage = V * 0.95; // 95% of final voltage
      specificTime = -timeConstant * Math.log(1 - (targetVoltage / V));
    } else {
      const remainingVoltage = V * 0.05; // 5% of initial voltage
      specificTime = -timeConstant * Math.log(remainingVoltage / V);
    }

    setResult({
      timeConstant: timeConstant.toFixed(6),
      specificTime: specificTime.toFixed(6),
      times: times,
      mode: mode
    });
  };

  const reset = () => {
    setResistance('');
    setCapacitance('');
    setVoltage('');
    setMode('');
    setResult(null);
  };

  const formatTime = (seconds) => {
    if (seconds < 0.001) return `${(seconds * 1000000).toFixed(2)} µs`;
    if (seconds < 1) return `${(seconds * 1000).toFixed(2)} ms`;
    if (seconds < 60) return `${seconds.toFixed(2)} s`;
    if (seconds < 3600) return `${(seconds / 60).toFixed(2)} min`;
    return `${(seconds / 3600).toFixed(2)} h`;
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Capacitor Charging Time Calculator
          </CardTitle>
          <CardDescription>
            Calculate RC circuit timing, time constants, and charge/discharge characteristics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="resistance">Resistance (Ω)</Label>
              <Input
                id="resistance"
                type="number"
                placeholder="e.g., 1000"
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacitance">Capacitance (µF)</Label>
              <Input
                id="capacitance"
                type="number"
                placeholder="e.g., 100"
                value={capacitance}
                onChange={(e) => setCapacitance(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="voltage">Voltage (V)</Label>
              <Input
                id="voltage"
                type="number"
                placeholder="e.g., 12"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mode">Mode</Label>
              <Select value={mode} onValueChange={setMode}>
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="charge">Charging</SelectItem>
                  <SelectItem value="discharge">Discharging</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateTime} className="flex-1">
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Time
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>

          {result && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">Time Constant (τ)</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatTime(parseFloat(result.timeConstant))}
                  </p>
                  <p className="text-sm text-blue-600">
                    τ = R × C
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800">
                    {result.mode === 'charge' ? '95% Charge Time' : '5% Discharge Time'}
                  </h3>
                  <p className="text-2xl font-bold text-green-600">
                    {formatTime(parseFloat(result.specificTime))}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Voltage Progression Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(result.times).map(([percentage, time]) => (
                    <div key={percentage} className="flex justify-between items-center">
                      <span className="text-gray-600">{percentage}</span>
                      <span className="font-semibold text-gray-800">{formatTime(time)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <p className="font-medium text-yellow-800">
                    <strong>Note:</strong> Times are theoretical. Real-world results may vary due to component tolerance, temperature, and circuit parasitics.
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

export default CapacitorChargingTimeCalculator;
