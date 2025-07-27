import { useState } from 'react';
import { Bot, Plus, Trash2, Edit3, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface Command {
  id: number;
  name: string;
  response: string;
  userLevel: string;
  cooldown: number;
}

const NightbotCommandGenerator = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentCommand, setCurrentCommand] = useState({
    name: '',
    response: '',
    userLevel: 'everyone',
    cooldown: 30
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const addCommand = () => {
    if (!currentCommand.name || !currentCommand.response) return;

    const newCommand: Command = {
      id: Date.now(),
      ...currentCommand
    };

    setCommands([...commands, newCommand]);
    setCurrentCommand({ name: '', response: '', userLevel: 'everyone', cooldown: 30 });
  };

  const editCommand = (id: number) => {
    const command = commands.find(cmd => cmd.id === id);
    if (command) {
      setCurrentCommand({
        name: command.name,
        response: command.response,
        userLevel: command.userLevel,
        cooldown: command.cooldown
      });
      setEditingId(id);
    }
  };

  const updateCommand = () => {
    if (editingId === null) return;

    setCommands(commands.map(cmd => 
      cmd.id === editingId ? { ...cmd, ...currentCommand } : cmd
    ));
    setCurrentCommand({ name: '', response: '', userLevel: 'everyone', cooldown: 30 });
    setEditingId(null);
  };

  const deleteCommand = (id: number) => {
    setCommands(commands.filter(cmd => cmd.id !== id));
  };

  const generateNightbotCommand = (command: Command) => {
    return `!addcom -ul=${command.userLevel} -cd=${command.cooldown} !${command.name} ${command.response}`;
  };

  const copyCommand = (command: Command) => {
    navigator.clipboard.writeText(generateNightbotCommand(command));
    setCopiedId(command.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const commandPresets = [
    { name: 'social', response: 'Follow us on Twitter @YourHandle for updates!', userLevel: 'everyone', cooldown: 60 },
    { name: 'discord', response: 'Join our Discord community: [Your Discord Link]', userLevel: 'everyone', cooldown: 300 },
    { name: 'schedule', response: 'Stream schedule: Monday, Wednesday, Friday at 7 PM EST', userLevel: 'everyone', cooldown: 120 },
    { name: 'commands', response: 'Available commands: !social, !discord, !schedule, !uptime', userLevel: 'everyone', cooldown: 60 }
  ];

  const loadPreset = (preset: typeof commandPresets[0]) => {
    setCurrentCommand(preset);
  };

  const reset = () => {
    setCommands([]);
    setCurrentCommand({ name: '', response: '', userLevel: 'everyone', cooldown: 30 });
    setEditingId(null);
  };

  return (
    <>
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="w-6 h-6" />
          Nightbot Command Generator
        </CardTitle>
        <CardDescription>
          Create, edit, delete and manage custom commands for Nightbot to enhance your Twitch and YouTube streams
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="commandName">Command Name</Label>
              <Input
                id="commandName"
                value={currentCommand.name}
                onChange={(e) => setCurrentCommand({...currentCommand, name: e.target.value})}
                placeholder="e.g., social"
              />
              <p className="mt-1 text-xs text-muted-foreground">Without the "!" prefix</p>
            </div>
            
            <div>
              <Label htmlFor="userLevel">User Level</Label>
              <select
                id="userLevel"
                value={currentCommand.userLevel}
                onChange={(e) => setCurrentCommand({...currentCommand, userLevel: e.target.value})}
                className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground"
              >
                <option value="everyone">Everyone</option>
                <option value="subscriber">Subscribers</option>
                <option value="vip">VIPs</option>
                <option value="moderator">Moderators</option>
                <option value="owner">Owner Only</option>
              </select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="response">Command Response</Label>
            <Textarea
              id="response"
              value={currentCommand.response}
              onChange={(e) => setCurrentCommand({...currentCommand, response: e.target.value})}
              placeholder="e.g., Follow us on Twitter @YourHandle for updates!"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="cooldown">Cooldown (seconds)</Label>
            <Input
              id="cooldown"
              type="number"
              value={currentCommand.cooldown === undefined ? '' : currentCommand.cooldown}
              onChange={(e) => {
                const value = e.target.value;
                setCurrentCommand({
                  ...currentCommand,
                  cooldown: value === '' ? undefined : Number(value)
                });
              }}
            />
            <p className="mt-1 text-xs text-muted-foreground">Time between command uses</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={editingId ? updateCommand : addCommand} disabled={!currentCommand.name || !currentCommand.response} className="flex-1">
            <Plus className="h-4 w-4 mr-2" />
            {editingId ? 'Update Command' : 'Add Command'}
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>

        {editingId && (
          <Button
            onClick={() => {
              setEditingId(null);
              setCurrentCommand({ name: '', response: '', userLevel: 'everyone', cooldown: 30 });
            }}
            variant="secondary"
            className="w-full"
          >
            Cancel Edit
          </Button>
        )}

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Start Presets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commandPresets.map((preset, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <code className="text-blue-600 font-mono">!{preset.name}</code>
                  <Button onClick={() => loadPreset(preset)} size="sm" variant="outline">
                    Load
                  </Button>
                </div>
                  <p className="text-sm text-gray-700">{preset.response}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Nightbot Command Generator?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Custom chat commands are a powerful way to engage your audience, automate responses, and streamline moderation on Twitch and YouTube. This tool lets you easily create, edit, and manage Nightbot commands—no coding or memorizing syntax required. Save time, reduce errors, and keep your stream chat interactive and fun with just a few clicks.
            </p>
          </CardContent>
        </Card>

        {commands.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Your Commands</h3>
            <div className="space-y-4">
              {commands.map((command) => (
                  <div key={command.id} className="bg-white rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <code className="text-blue-600 font-mono text-lg">!{command.name}</code>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {command.userLevel}
                        </span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {command.cooldown}s cooldown
                        </span>
                      </div>
                        <p className="text-gray-700">{command.response}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button
                        onClick={() => copyCommand(command)}
                        size="sm"
                        variant="outline"
                        title="Copy Nightbot command"
                      >
                        {copiedId === command.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button
                        onClick={() => editCommand(command.id)}
                        size="sm"
                        variant="outline"
                        title="Edit command"
                      >
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => deleteCommand(command.id)}
                        size="sm"
                        variant="outline"
                        title="Delete command"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                    <div className="bg-gray-100 rounded p-3">
                      <code className="text-gray-800 text-sm font-mono">
                      {generateNightbotCommand(command)}
                    </code>
                  </div>
                </div>
              ))}
            </div>
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
            <h3 className="text-lg font-semibold mb-2">1. What is a Nightbot Command Generator?</h3>
            <p className="text-gray-700">It helps you create, edit, and manage custom Nightbot commands for your Twitch or YouTube stream, making moderation and engagement easier.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">2. How do I use this tool?</h3>
            <p className="text-gray-700">Enter the command name, response, user level, and cooldown to generate a Nightbot command you can copy and use instantly.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">3. What user levels are supported?</h3>
            <p className="text-gray-700">Everyone, subscribers, VIPs, moderators, and owner—choose who can use each command for better control.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Can I edit or delete commands?</h3>
            <p className="text-gray-700">Yes, use the tool to update or remove existing commands, or manage them in the Nightbot dashboard.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">5. What are command presets?</h3>
            <p className="text-gray-700">Quick start templates for common commands like !social, !discord, and !schedule to save you time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">6. How do I copy a command to Nightbot?</h3>
            <p className="text-gray-700">Use the copy button and paste the command into your Nightbot dashboard or chat to activate it.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">7. Does this tool support cooldowns?</h3>
            <p className="text-gray-700">Yes, set cooldown times to prevent spam and keep your chat organized.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">8. Can I use variables in responses?</h3>
            <p className="text-gray-700">Yes, Nightbot supports variables for dynamic content, such as $(user) or $(count).</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">9. Is login required?</h3>
            <p className="text-gray-700">No, you can generate commands without logging in. All processing is local to your browser.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">10. Is my data saved?</h3>
            <p className="text-gray-700">No, all commands are generated locally and are not stored or shared.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default NightbotCommandGenerator;
