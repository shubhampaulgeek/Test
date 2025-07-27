
import { useState } from 'react';
import { Clock, Calculator, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const NightbotTimerCalculator = () => {
  const [message, setMessage] = useState('');
  const [intervalMinutes, setIntervalMinutes] = useState('');
  const [chatLines, setChatLines] = useState('');
  const [result, setResult] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const generateTimer = () => {
    if (!message.trim() || !intervalMinutes || !chatLines) {
      setResult('');
      return;
    }

    const interval = parseInt(intervalMinutes);
    const lines = parseInt(chatLines);
    
    if (interval > 0 && lines > 0) {
      const timerCommand = `!addtimer ${message} ${interval}m ${lines}`;
      setResult(timerCommand);
    } else {
      setResult('');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetTimers = [
    { name: 'Social Media', message: 'Follow us on Twitter @YourHandle for updates!', interval: 10, lines: 20 },
    { name: 'Discord', message: 'Join our Discord community for exclusive content!', interval: 8, lines: 15 },
    { name: 'Subscribe', message: "Don't forget to subscribe and hit the bell icon!", interval: 15, lines: 30 },
    { name: 'Donation', message: 'Support the stream: [Donation Link]', interval: 20, lines: 25 }
  ];

  const loadPreset = (preset: typeof presetTimers[0]) => {
    setMessage(preset.message);
    setIntervalMinutes(preset.interval.toString());
    setChatLines(preset.lines.toString());
  };

  const reset = () => {
    setMessage('');
    setIntervalMinutes('');
    setChatLines('');
    setResult('');
  };

  return (
    <>
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-6 h-6" />
          Nightbot Timer Calculator
        </CardTitle>
        <CardDescription>
          Generate timed chat commands for Nightbot on Twitch and YouTube
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="message">Timer Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g., Don't forget to follow the stream!"
              rows={3}
              className="resize-vertical"
            />
            <p className="mt-1 text-xs text-muted-foreground">The message that will be posted automatically</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="interval">Interval (Minutes)</Label>
              <Input
                id="interval"
                type="number"
                value={intervalMinutes}
                onChange={(e) => setIntervalMinutes(e.target.value)}
                placeholder="e.g., 10"
                min="1"
              />
              <p className="mt-1 text-xs text-muted-foreground">How often to post (in minutes)</p>
            </div>
            
            <div>
              <Label htmlFor="chatLines">Chat Lines Required</Label>
              <Input
                id="chatLines"
                type="number"
                value={chatLines}
                onChange={(e) => setChatLines(e.target.value)}
                placeholder="e.g., 20"
                min="1"
              />
              <p className="mt-1 text-xs text-muted-foreground">Minimum chat activity required</p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={generateTimer} className="flex-1">
            <Calculator className="h-4 w-4 mr-2" />
            Generate Timer Command
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>
        
        {result && (
            <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Generated Command</h3>
              <Button
                onClick={copyToClipboard}
                size="sm"
                variant="outline"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <code className="block bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
              {result}
            </code>
            <p className="mt-2 text-xs text-muted-foreground">
              Copy this command and paste it in your Twitch chat to add the timer to Nightbot
            </p>
          </div>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Nightbot Timer Calculator?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Managing chat engagement on Twitch and YouTube streams can be time-consuming. This calculator makes it easy to create perfectly timed Nightbot messages, helping you promote your socials, remind viewers to subscribe, or share important info automatically. It saves streamers time, keeps chat active, and ensures your key messages are never missed.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Popular Timer Presets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presetTimers.map((preset, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">{preset.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">"{preset.message}"</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                  <span>Every {preset.interval} minutes</span>
                  <span>{preset.lines} chat lines required</span>
                </div>
                <Button
                  onClick={() => loadPreset(preset)}
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  Use This Preset
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
      {/* FAQ Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. What is a Nightbot Timer Calculator?</h3>
            <p className="text-gray-700">It helps you set up automated Nightbot messages for Twitch or YouTube streams, making chat engagement easier.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">2. How do I use this tool?</h3>
            <p className="text-gray-700">Enter your message, set timing parameters, and generate the Nightbot timer command to automate chat posts.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">3. What are chat lines in timer settings?</h3>
            <p className="text-gray-700">Chat lines are the minimum number of messages before the timer triggers, helping prevent spam in your stream chat.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Can I use variables in timer messages?</h3>
            <p className="text-gray-700">Yes, use Nightbot variables like $(user), $(count), and $(time) for dynamic and personalized messages.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">5. How do I delete or manage a timer?</h3>
            <p className="text-gray-700">Use the !deltimer command or manage timers directly in the Nightbot dashboard for full control.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">6. Does this tool work for both Twitch and YouTube?</h3>
            <p className="text-gray-700">Yes, Nightbot supports both Twitch and YouTube platforms for timer automation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">7. Can I set multiple timers?</h3>
            <p className="text-gray-700">Yes, you can create and manage multiple timers for different messages and intervals.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">8. Is login or authentication required?</h3>
            <p className="text-gray-700">No, you can generate timer commands without logging in. Just copy and use them in your Nightbot dashboard or chat.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">9. How do I prevent timer spam?</h3>
            <p className="text-gray-700">Set higher chat line and interval values to reduce message frequency and avoid spamming your viewers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">10. Is my data stored?</h3>
            <p className="text-gray-700">No, all calculations and command generations are local and private to your browser session.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default NightbotTimerCalculator;
