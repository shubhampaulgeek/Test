
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIClipGenerator from '@/components/tools/AIClipGenerator';
import SEO from '@/components/SEO';

const AIClipGeneratorPage = () => {
  return (
    <>
      <SEO
        title="AI Clip Title & Description Generator"
        description="Use AI to instantly generate catchy titles and descriptions for your YouTube or Twitch stream clips. Boost engagement with smart content suggestions."
        keywords="AI clip generator, stream clips, YouTube titles, Twitch clips, content creation, AI tools"
        canonical="https://www.shubhampaul.xyz/tools/ai-clip-generator"
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="py-8">
          <AIClipGenerator />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIClipGeneratorPage;
