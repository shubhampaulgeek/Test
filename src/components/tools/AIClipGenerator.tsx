
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Copy, Sparkles, Info, HelpCircle, MessageSquare, Zap, Server } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AIClipGenerator = () => {
  const [transcript, setTranscript] = useState('');
  const [chatLog, setChatLog] = useState('');
  const [style, setStyle] = useState('Gaming');
  const [tone, setTone] = useState('Casual');
  const [format, setFormat] = useState('JSON');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const { toast } = useToast();

  const styleOptions = ['Gaming', 'Funny', 'Dramatic', 'Educational', 'Sports', 'Music', 'Tech'];
  const toneOptions = ['Casual', 'Gen Z slang', 'Professional', 'Hype', 'Friendly', 'Exciting'];
  const formatOptions = ['JSON', 'Plain Text', 'Markdown'];



  const handleGenerate = async () => {
    if (!transcript.trim()) {
      toast({
        title: 'Missing Input',
        description: 'Please provide a transcript to generate clip metadata.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      // Use relative URL for production, absolute for development
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? '/api/generate-clip' 
        : 'http://localhost:3000/api/generate-clip';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript,
          chatLog,
          style,
          tone,
          format,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.result);
      toast({
        title: 'Success!',
        description: 'Clip title and description generated successfully.',
      });
    } catch (error) {
      console.error('Error generating clip metadata:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to generate clip metadata. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast({
      title: 'Copied!',
      description: 'Result copied to clipboard.',
    });
  };

  const clearAll = () => {
    setTranscript('');
    setChatLog('');
    setResult('');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            AI Clip Title & Description Generator
          </h1>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Generate engaging titles and descriptions for your stream clips using AI
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Zap className="w-4 h-4 text-blue-500" />
          <span>Powered by Google Gemini</span>
        </div>
      </div>

      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="generator">Generator</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="guide">How to Use</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Input Content</CardTitle>
                <CardDescription>Provide the transcript and chat log from your stream</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="transcript">Transcript *</Label>
                  <Textarea
                    id="transcript"
                    placeholder="Enter the stream transcript here... (e.g., 'No way he just aced that round blindfolded!')"
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="chatLog">Chat Log (Optional)</Label>
                  <Textarea
                    id="chatLog"
                    placeholder="Enter chat messages here... (e.g., 'OMGGGG, He's cracked, Give him a trophy')"
                    value={chatLog}
                    onChange={(e) => setChatLog(e.target.value)}
                    rows={3}
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Settings Section */}
            <Card>
              <CardHeader>
                <CardTitle>Generation Settings</CardTitle>
                <CardDescription>Customize the style and tone of your generated content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="style">Style Preset</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {styleOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tone">Language Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {toneOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="format">Output Format</Label>
                  <Select value={format} onValueChange={setFormat}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {formatOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <Server className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Server-side API for enhanced security</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button onClick={handleGenerate} disabled={isLoading} size="lg">
              {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Generate Content
            </Button>
            <Button onClick={clearAll} variant="outline" size="lg">
              Clear All
            </Button>
          </div>

          {/* Results Section */}
          {result && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Generated Content</CardTitle>
                    <CardDescription>Your AI-generated clip title and description</CardDescription>
                  </div>
                  <Button onClick={copyToClipboard} variant="outline" size="sm">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-900">{result}</pre>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Usage Tips */}
          <Card>
            <CardHeader>
              <CardTitle>💡 Tips for Better Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Transcript:</strong> Include the most exciting part of your clip</li>
                <li>• <strong>Chat Log:</strong> Add viewer reactions to understand the hype</li>
                <li>• <strong>Style:</strong> Choose based on your content type (Gaming, Funny, etc.)</li>
                <li>• <strong>Tone:</strong> Match your audience (Gen Z slang for younger viewers)</li>
                <li>• <strong>Format:</strong> JSON for programmatic use, Plain Text for easy copying</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                <CardTitle>About This Tool</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700">
                Our AI Clip Title & Description Generator is powered by Google Gemini AI, designed specifically for content creators who want to transform their stream highlights into viral clips with compelling titles and descriptions.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">What Makes This Tool Special?</h3>
              <p className="text-gray-700">
                Gone are the days of staring at a blank screen, wondering how to describe your epic gaming moment or funny reaction. This intelligent tool analyzes your stream transcript and chat reactions to craft titles that grab attention and descriptions that tell the story.
              </p>

              <h3 className="text-xl font-semibold mb-3">Powered by Google Gemini AI</h3>
              <p className="text-gray-700">
                We've integrated Google's advanced Gemini AI model to give you the best results. Gemini excels at understanding context, generating creative content, and adapting to different writing styles, making it perfect for creating engaging clip titles and descriptions. All API calls are processed securely through our servers.
              </p>

              <h3 className="text-xl font-semibold mb-3">Customization at Your Fingertips</h3>
              <p className="text-gray-700">
                Whether you're a hardcore gamer, educational streamer, or comedy content creator, our style presets ensure your titles match your brand. From casual friendly tones to hyped-up Gen Z slang, we've got every audience covered.
              </p>

              <h3 className="text-xl font-semibold mb-3">Save Time, Increase Views</h3>
              <p className="text-gray-700">
                Instead of spending precious minutes crafting the perfect title, let our AI do the heavy lifting while you focus on creating amazing content. Better titles mean more clicks, more engagement, and ultimately, more growth for your channel.
              </p>

              {/* Why section appended here */}
              <h3 className="text-xl font-semibold mb-3 mt-8">Why AI Clip Title & Description Generator?</h3>
              <p className="text-gray-700">
                Great titles and descriptions are key to making your stream clips stand out and get discovered. This tool uses AI to instantly generate catchy, relevant, and platform-optimized metadata—saving you time and boosting your content’s reach. Perfect for streamers, editors, and social media managers who want to grow their audience with less effort.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guide" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-green-600" />
                <CardTitle>How to Use This Tool</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">Step 1: Prepare Your Content</h3>
              <p className="text-gray-700">
                Start by copying the most exciting part of your stream transcript. This could be a reaction to an incredible play, a funny moment, or an educational explanation. The key is to capture the essence of what makes your clip special.
              </p>

              <h3 className="text-xl font-semibold mb-3">Step 2: Add Chat Context (Optional but Recommended)</h3>
              <p className="text-gray-700">
                Chat reactions often tell the story better than words. Copy some of the most engaged chat messages from that moment - "OMGGGG", "CLIP IT", "NO WAY" - these reactions help the AI understand the hype and energy of the moment.
              </p>

              <h3 className="text-xl font-semibold mb-3">Step 3: Choose Your Style and Tone</h3>
              <p className="text-gray-700">
                Select the style that matches your content type. Gaming clips work well with "Gaming" or "Hype" styles, while educational content benefits from "Educational" or "Professional" styles. Match your tone to your audience - younger viewers love "Gen Z slang" while broader audiences prefer "Casual" or "Friendly".
              </p>

              <h3 className="text-xl font-semibold mb-3">Step 4: Select Output Format</h3>
              <p className="text-gray-700">
                Choose JSON if you're using the results programmatically or want structured data. Select Plain Text for easy copy-pasting to your video platforms. Markdown is perfect if you're creating content for platforms that support formatted text.
              </p>

              <h3 className="text-xl font-semibold mb-3">Step 5: Generate with Google Gemini</h3>
              <p className="text-gray-700">
                Our tool uses Google Gemini AI to analyze your content and generate compelling titles and descriptions. Gemini's advanced language understanding ensures natural, engaging results that match your selected style and tone.
              </p>

              <h3 className="text-xl font-semibold mb-3">Pro Tips for Maximum Impact</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Keep transcripts focused on the highlight moment (30-60 seconds worth)</li>
                <li>Include emotional reactions from chat for better context</li>
                <li>Experiment with different style combinations</li>
                <li>Generate multiple versions and pick the best one</li>
                <li>Use the copy button to quickly grab your results</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-600" />
                <CardTitle>Frequently Asked Questions</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Q: Do I need to provide both transcript and chat log?</h3>
                <p className="text-gray-700">
                  No, only the transcript is required. However, adding chat reactions helps the AI understand the excitement and energy of the moment, leading to more engaging titles and descriptions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Q: How does Google Gemini work for this tool?</h3>
                <p className="text-gray-700">
                  Google Gemini analyzes your transcript and chat context to create engaging, natural-sounding titles and descriptions. It's particularly good at understanding gaming terminology, internet culture, and creating content that resonates with streaming audiences. All requests are processed securely through our servers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Q: What if I get an error about API quotas?</h3>
                <p className="text-gray-700">
                  This means our Google Gemini service has reached its usage limit. Please wait a few minutes and try again, or contact support if the issue persists.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Q: How long should my transcript be?</h3>
                <p className="text-gray-700">
                  Keep it focused! 30-60 seconds worth of transcript works best. Too long and the AI might lose focus on the main highlight; too short and it might not have enough context.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Q: Can I use this for non-gaming content?</h3>
                <p className="text-gray-700">
                  Absolutely! We have style presets for Educational, Music, Tech, Sports, and more. The tool works great for any type of streaming content - just choose the appropriate style and tone.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Q: What's the difference between output formats?</h3>
                <p className="text-gray-700">
                  JSON gives you structured data with clear title and description fields. Plain Text provides simple, copy-ready content. Markdown includes formatting that works well on platforms supporting rich text.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Q: Is my content stored or saved anywhere?</h3>
                <p className="text-gray-700">
                  No, we don't store your transcripts or generated content. Everything is processed in real-time and nothing is saved on our servers for privacy and security.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Q: Can I generate multiple versions of the same clip?</h3>
                <p className="text-gray-700">
                  Yes! Try different style and tone combinations, or switch between AI providers to get various creative takes on the same content. This helps you find the perfect title for maximum impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIClipGenerator;
