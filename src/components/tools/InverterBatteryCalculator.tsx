
import { useState } from 'react';
import { Battery, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InverterBatteryCalculator = () => {
  const [batteryAh, setBatteryAh] = useState('');
  const [powerLoad, setPowerLoad] = useState('');
  const [batteryVoltage, setBatteryVoltage] = useState('');
  const [batteryType, setBatteryType] = useState('lead-acid');
  const [result, setResult] = useState<{
    dischargingCurrent: number;
    theoreticalBackupTime: number;
    actualBackupTimeHours: number;
    actualBackupTimeMinutes: number;
  } | null>(null);

  const calculateBackupTime = () => {
    const ah = parseFloat(batteryAh);
    const load = parseFloat(powerLoad);
    const voltage = parseFloat(batteryVoltage);
    
    if (ah && load && voltage && ah > 0 && load > 0 && voltage > 0) {
      const dischargingCurrent = load / voltage;
      const theoreticalBackupTime = ah / dischargingCurrent;
      
      const efficiency = batteryType === 'lead-acid' ? 0.7 : 0.9;
      const actualBackupTime = theoreticalBackupTime * efficiency;
      const hours = Math.floor(actualBackupTime);
      const minutes = Math.round((actualBackupTime - hours) * 60);
      
      setResult({
        dischargingCurrent,
        theoreticalBackupTime,
        actualBackupTimeHours: hours,
        actualBackupTimeMinutes: minutes
      });
    } else {
      setResult(null);
    }
  };

  const reset = () => {
    setBatteryAh('');
    setPowerLoad('');
    setBatteryVoltage('');
    setBatteryType('lead-acid');
    setResult(null);
  };

  return (
    <>
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Battery className="w-6 h-6" />
          Inverter Battery Backup Time Calculator
        </CardTitle>
        <CardDescription>
          Calculate how long your inverter battery will last based on your power consumption
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="batteryAh">Battery Capacity (AH)</Label>
            <Input
              id="batteryAh"
              type="number"
              value={batteryAh}
              onChange={(e) => setBatteryAh(e.target.value)}
              placeholder="e.g., 150"
            />
            <p className="mt-1 text-xs text-muted-foreground">Battery capacity in Ampere Hours</p>
          </div>
          
          <div>
            <Label htmlFor="powerLoad">Power Load (Watts)</Label>
            <Input
              id="powerLoad"
              type="number"
              value={powerLoad}
              onChange={(e) => setPowerLoad(e.target.value)}
              placeholder="e.g., 500"
            />
            <p className="mt-1 text-xs text-muted-foreground">Total power consumption in Watts</p>
          </div>

          <div>
            <Label htmlFor="batteryVoltage">Battery Voltage (V)</Label>
            <Input
              id="batteryVoltage"
              type="number"
              value={batteryVoltage}
              onChange={(e) => setBatteryVoltage(e.target.value)}
              placeholder="e.g., 12"
            />
            <p className="mt-1 text-xs text-muted-foreground">Battery voltage (typically 12V, 24V, or 48V)</p>
          </div>

          <div>
            <Label htmlFor="batteryType">Battery Type</Label>
            <select
              id="batteryType"
              value={batteryType}
              onChange={(e) => setBatteryType(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground"
            >
              <option value="lead-acid">Lead Acid</option>
              <option value="gel-dry-tubular-lithium">Gel/Dry/Tubular/Lithium-Ion</option>
            </select>
            <p className="mt-1 text-xs text-muted-foreground">Select your battery type</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={calculateBackupTime} className="flex-1">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate Backup Time
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>
        
        {result !== null && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 result-card-info rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Discharging Current
              </h3>
              <p className="text-result-value text-info-value">
                {result.dischargingCurrent.toFixed(2)} Amps
              </p>
            </div>
            
            <div className="p-6 result-card-success rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Actual Backup Time
              </h3>
              <p className="text-result-value text-success-value">
                {result.actualBackupTimeHours}h {result.actualBackupTimeMinutes}m
              </p>
            </div>
          </div>
        )}

        {result !== null && (
          <div className="p-4 result-card-warning rounded-lg">
            <p className="text-sm font-medium">
              <strong>Note:</strong> Lead acid batteries can be discharged till 70% & other batteries like Gel/Dry/Tubular/Lithium-Ion till 90% to maintain lifespan. Results are based on that only. Always check efficiency, losses and refer inverter and battery manuals for better information.
            </p>
          </div>
                 )}
       </CardContent>
     </Card>

     {/* FAQ Section */}
     <Card className="mt-8">
       <CardHeader>
         <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
       </CardHeader>
       <CardContent className="space-y-6">
         <div>
           <h3 className="text-lg font-semibold mb-2">1. What is an Inverter Battery Backup Time Calculator?</h3>
           <p className="text-gray-700">It estimates how long your inverter can power your appliances during an outage based on battery capacity, load, and efficiency.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">2. How do I calculate battery backup time?</h3>
           <p className="text-gray-700">Enter your battery capacity (Ah), inverter load (Watts), battery voltage, and select battery type to get an accurate backup time estimate.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">3. What units should I use for battery capacity?</h3>
           <p className="text-gray-700">Use ampere-hours (Ah) or watt-hours (Wh) as specified on your battery label for best results.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">4. Does the tool account for inverter and battery efficiency?</h3>
           <p className="text-gray-700">Yes, select your battery type to automatically apply typical efficiency values for lead-acid or lithium batteries.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">5. Can I use this for solar or UPS battery systems?</h3>
           <p className="text-gray-700">Yes, the calculator works for solar, UPS, and regular inverter batteries, including systems with multiple batteries.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">6. Why is my backup time less than expected?</h3>
           <p className="text-gray-700">Possible reasons include battery aging, high load, low efficiency, or extreme temperatures affecting battery performance.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">7. How can I increase backup time?</h3>
           <p className="text-gray-700">Reduce load, use higher-capacity batteries, improve inverter efficiency, and maintain batteries regularly.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">8. Does temperature affect battery backup?</h3>
           <p className="text-gray-700">Yes, extreme heat or cold can reduce battery performance and backup time. Store batteries in a temperature-controlled environment.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">9. Is this tool suitable for multiple batteries?</h3>
           <p className="text-gray-700">Yes, add up the total capacity of all batteries in your system for a combined backup estimate.</p>
         </div>
         <div>
           <h3 className="text-lg font-semibold mb-2">10. Is my data stored?</h3>
           <p className="text-gray-700">No, all calculations are done locally in your browser and are not saved or shared.</p>
         </div>
       </CardContent>
     </Card>
   </>
 );
};

export default InverterBatteryCalculator;
