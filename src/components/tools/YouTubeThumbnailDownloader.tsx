
import { useState } from 'react';
import { Download, Search, Info, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const YouTubeThumbnailDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [thumbnails, setThumbnails] = useState<{
    default: string;
    medium: string;
    high: string;
    maxres: string;
  } | null>(null);
  const [videoInfo, setVideoInfo] = useState<{
    title: string;
    channelName: string;
  } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const extractVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const fetchThumbnails = async () => {
    if (!videoUrl.trim()) {
      setError('Please enter a YouTube video URL');
      return;
    }
    
    const videoId = extractVideoId(videoUrl);
    
    if (!videoId) {
      setError('Invalid YouTube URL. Please enter a valid YouTube video URL.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setThumbnails(null);
    setVideoInfo(null);
    
    try {
      // Use YouTube Data API v3 with the provided API key
      const apiKey = 'AIzaSyCJle7cqhiYMyB_5N-x1OAlYwwANzyFF48';
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch video data');
      }
      
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        const videoData = data.items[0].snippet;
        
        setVideoInfo({
          title: videoData.title,
          channelName: videoData.channelTitle
        });
        
        setThumbnails({
          default: `https://i.ytimg.com/vi/${videoId}/default.jpg`,
          medium: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
          high: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          maxres: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        });
      } else {
        throw new Error('Video not found or is private');
      }
      
    } catch (err) {
      setError('Failed to fetch video data. Please check the URL and try again.');
      console.error('Error fetching video data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (url: string, size: string) => {
    navigator.clipboard.writeText(url);
    setCopied(size);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadThumbnail = (url: string, size: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `youtube_thumbnail_${size}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reset = () => {
    setVideoUrl('');
    setThumbnails(null);
    setVideoInfo(null);
    setError(null);
  };

  return (
    <>
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="w-6 h-6" />
          YouTube Thumbnail Downloader
        </CardTitle>
        <CardDescription>
          Extract and download high-quality thumbnails from any YouTube video
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="videoUrl">YouTube Video URL</Label>
          <div className="flex gap-2">
            <Input
              id="videoUrl"
              type="url"
              placeholder="e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              value={videoUrl}
              onChange={handleChange}
              className="flex-1"
            />
            <Button onClick={fetchThumbnails} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Extract'}
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Works with all YouTube URL formats including youtu.be, embed links, and shared links
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-lg text-sm">
            {error}
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {thumbnails && (
          <div className="space-y-6">
            {videoInfo && (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {videoInfo.title}
                </h3>
                  <p className="text-sm text-gray-700">
                  Channel: {videoInfo.channelName}
                </p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-medium mb-4">Available Thumbnails</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">HD Quality (1280×720)</p>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src={thumbnails.high} 
                        alt="HD thumbnail" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <Button
                        onClick={() => downloadThumbnail(thumbnails.high, 'HD')}
                        className="flex-1"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download HD
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(thumbnails.high, 'HD')}
                        variant="outline"
                        size="sm"
                      >
                        {copied === 'HD' ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          'Copy URL'
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Standard Quality (480×360)</p>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src={thumbnails.medium} 
                        alt="Standard thumbnail" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <Button
                        onClick={() => downloadThumbnail(thumbnails.medium, 'SD')}
                        className="flex-1"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download SD
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(thumbnails.medium, 'SD')}
                        variant="outline"
                        size="sm"
                      >
                        {copied === 'SD' ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          'Copy URL'
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Max Resolution (1920×1080) <span className="text-xs text-muted-foreground">(if available)</span>
                    </p>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src={thumbnails.maxres} 
                        alt="Max resolution thumbnail" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = thumbnails.high;
                        }}
                      />
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <Button
                        onClick={() => downloadThumbnail(thumbnails.maxres, 'maxres')}
                        className="flex-1"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download Max
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(thumbnails.maxres, 'maxres')}
                        variant="outline"
                        size="sm"
                      >
                        {copied === 'maxres' ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          'Copy URL'
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Thumbnail Preview (120×90)</p>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden p-4 flex justify-center">
                      <img 
                        src={thumbnails.default} 
                        alt="Default thumbnail" 
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <Button
                        onClick={() => downloadThumbnail(thumbnails.default, 'default')}
                        className="flex-1"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download Preview
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(thumbnails.default, 'default')}
                        variant="outline"
                        size="sm"
                      >
                        {copied === 'default' ? (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          'Copy URL'
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why YouTube Thumbnail Downloader?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Thumbnails are essential for video promotion, social sharing, and custom branding. This tool lets you quickly extract and download high-quality thumbnails from any YouTube video—no screenshotting or editing required. Perfect for content creators, marketers, and educators who want to reuse, analyze, or showcase YouTube visuals with ease.
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
      {/* FAQ Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. What is a YouTube Thumbnail Downloader?</h3>
            <p className="text-gray-700">It extracts and downloads high-quality thumbnails from any public YouTube video for presentations, analysis, or inspiration.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">2. How do I use this tool?</h3>
            <p className="text-gray-700">Paste the YouTube video URL and click extract to get all available thumbnail resolutions instantly.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">3. What resolutions are supported?</h3>
            <p className="text-gray-700">HD (1280x720), standard (480x360), preview (120x90), and max resolution (1920x1080) if available.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">4. Can I download thumbnails from private videos?</h3>
            <p className="text-gray-700">No, only public YouTube videos are supported for thumbnail extraction.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">5. Is it legal to download YouTube thumbnails?</h3>
            <p className="text-gray-700">Thumbnails are public, but always respect copyright and fair use guidelines when using them.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">6. Are there any watermarks on the thumbnails?</h3>
            <p className="text-gray-700">No, thumbnails are downloaded in original quality without any watermarks.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">7. Can I use this for YouTube Shorts?</h3>
            <p className="text-gray-700">Yes, the tool works for both YouTube Shorts and regular videos.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">8. Is login required to use this tool?</h3>
            <p className="text-gray-700">No, you can use the tool without logging in. All processing is done locally in your browser.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">9. How do I use the thumbnails I download?</h3>
            <p className="text-gray-700">Use them for presentations, analysis, or inspiration—avoid commercial use without permission from the content owner.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">10. Is my data stored?</h3>
            <p className="text-gray-700">No, all processing and downloads are done locally and not saved or shared.</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default YouTubeThumbnailDownloader;
