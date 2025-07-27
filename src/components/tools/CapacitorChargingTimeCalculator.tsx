import React, { useState } from 'react';
import { Battery, Clock, Calculator } from 'lucide-react';
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
  const [mode, setMode] = useState('charge');
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const calculateTime = () => {
    const R = parseFloat(resistance);
    const C = parseFloat(capacitance) * 1e-6; // Convert µF to F
    const V = parseFloat(voltage);

    if (!R || !C || !V) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    const timeConstant = R * C; // RC time constant in seconds
    
    // Calculate time to reach different percentages
    const times = {
      '63.2%': timeConstant,
      '86.5%': 2 * timeConstant,
      '95.0%': 3 * timeConstant,
      '98.2%': 4 * timeConstant,
      '99.3%': 5 * timeConstant
    };

    setResult({
      timeConstant: timeConstant,
      times: times,
      mode: mode
    });
  };

  const reset = () => {
    setResistance('');
    setCapacitance('');
    setVoltage('');
    setMode('charge');
    setResult(null);
  };

  const formatTime = (seconds) => {
    if (seconds < 1) {
      return `${(seconds * 1000).toFixed(1)} ms`;
    } else if (seconds < 60) {
      return `${seconds.toFixed(2)} s`;
    } else if (seconds < 3600) {
      return `${(seconds / 60).toFixed(2)} min`;
    } else {
      return `${(seconds / 3600).toFixed(2)} hr`;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Battery className="w-5 h-5" />
            Capacitor Charging Time Calculator
          </CardTitle>
          <CardDescription>
            Calculate charging and discharging times for RC circuits based on resistance and capacitance values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="resistance">Resistance (Ω)</Label>
              <Input
                id="resistance"
                type="number"
                placeholder="e.g., 10000"
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
                  <SelectValue />
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
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800">Time Constant (τ = RC)</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {formatTime(result.timeConstant)}
                </p>
                <p className="text-sm text-blue-600">
                  Time to reach ~63% {result.mode === 'charge' ? 'charge' : 'discharge'}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">
                  {result.mode === 'charge' ? 'Charging' : 'Discharging'} Timeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(result.times).map(([percentage, time]) => (
                    <div key={percentage} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{percentage}</span>
                        <span className="text-sm text-gray-600">
                          {formatTime(time)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Why Capacitor Charging Time Calculator?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Understanding capacitor charge and discharge times is essential for designing timing circuits, filters, and power supplies. This calculator makes it easy to predict how long a capacitor will take to reach a certain voltage, helping you optimize your circuit's performance and avoid trial-and-error. It's a must-have for electronics students, hobbyists, and engineers.
              </p>
            </CardContent>
          </Card>

          {/* About This Tool */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">About This Tool</h3>
            <p className="text-gray-600 mb-4">
              The Capacitor Charging Time Calculator helps you determine the charging and discharging times for capacitors in RC circuits. This tool is ideal for electronics hobbyists, students, and engineers working with timing circuits, filters, and power supplies.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• Calculates time constants and charge/discharge timelines</li>
              <li>• Supports both charging and discharging modes</li>
              <li>• User-friendly interface for quick calculations</li>
              <li>• Useful for timing, filtering, and power supply design</li>
              <li>• Provides results in seconds, milliseconds, minutes, or hours</li>
            </ul>
          </div>

          {/* How to Use Section */}
          <div className="mt-8 p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">How to Use This Tool?</h3>
            <ol className="list-decimal list-inside space-y-1 text-base text-gray-600">
              <li>Enter resistance value in ohms (Ω)</li>
              <li>Enter capacitance value in microfarads (µF)</li>
              <li>Enter voltage level in volts (V)</li>
              <li>Choose charge or discharge mode</li>
              <li>Click "Calculate Time" to see timing breakdown</li>
            </ol>
          </div>

          {/* FAQ Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. What is a Capacitor Charging Time Calculator?</h3>
                <p className="text-gray-700">It calculates how long it takes for a capacitor to charge or discharge in an RC circuit.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2. How do I use this tool?</h3>
                <p className="text-gray-700">Enter resistance, capacitance, and select charge or discharge mode for results.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3. What is the time constant (τ) in RC circuits?</h3>
                <p className="text-gray-700">The time constant (τ = RC) is the time to reach ~63% charge or discharge.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Can I use this for both charging and discharging?</h3>
                <p className="text-gray-700">Yes, select the mode to get the correct timing.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">5. Does the tool support different units?</h3>
                <p className="text-gray-700">Enter resistance in ohms (Ω) and capacitance in microfarads (μF) for accurate results.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">6. What is the formula for capacitor charging time?</h3>
                <p className="text-gray-700">The voltage across a charging capacitor is V = Vmax(1 - e^(-t/RC)).</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">7. How accurate is this calculator?</h3>
                <p className="text-gray-700">It provides theoretical values; real-world results may vary due to leakage and tolerance.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">8. Can I use this for timing applications?</h3>
                <p className="text-gray-700">Yes, it’s ideal for designing oscillators, timers, and delay circuits.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">9. Does temperature affect charging time?</h3>
                <p className="text-gray-700">Yes, temperature can affect resistance and capacitance, altering timing.</p>
            </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">10. Is my data saved?</h3>
                <p className="text-gray-700">No, all calculations are performed locally and not stored.</p>
          </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default CapacitorChargingTimeCalculator;
