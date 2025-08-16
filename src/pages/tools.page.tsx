import { Helmet } from 'react-helmet-async';
import Tools from './Tools';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Free Online Tools - Crypto, Electronics, Streaming | Paul Tools</title>
        <meta name="description" content="Browse our collection of free online tools for crypto calculations, electronics engineering, streaming utilities. All tools are free and privacy-focused." />
        <meta name="keywords" content="crypto calculators, free crypto tools, electronics calculators, streaming tools, Nightbot command generator, YouTube tools, online utilities, airdrop estimator, inverter calculator, gas fee checker, streamer helper, crypto tools, crypto calculators, crypto tax calculator, electronics tools, electronics calculators, electrical calculators, streaming tools, nightbot tools, nightbot automation, youtube tools, twitch tools, ai clip generator, clip downloader, thumbnail downloader, free online calculators, free tools for crypto, streaming utilities, youtube streaming tools, twitch streaming tools, crypto profit calculator, crypto ROI calculator, livesnip, stream clipper" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools" />
      </Helmet>
      <Tools />
    </>
  );
}
