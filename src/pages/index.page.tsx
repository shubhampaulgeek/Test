import { Helmet } from 'react-helmet-async';
import Home from '../pages/Home';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Paul Tools – Free Crypto, Electronics and Streaming Tools</title>
        <meta name="description" content="Explore a free multi-tool platform packed with calculators, generators, and downloaders for crypto, electronics, streaming, and other useful tools." />
        <meta name="keywords" content="crypto calculators, free crypto tools, electronics calculators, streaming tools, Nightbot command generator, YouTube tools, online utilities, airdrop estimator, inverter calculator, gas fee checker, streamer helper, crypto tools, crypto calculators, crypto tax calculator, electronics tools, electronics calculators, electrical calculators, streaming tools, nightbot tools, nightbot automation, youtube tools, twitch tools, ai clip generator, clip downloader, thumbnail downloader, free online calculators, free tools for crypto, streaming utilities, youtube streaming tools, twitch streaming tools, crypto profit calculator, crypto ROI calculator, livesnip, stream clipper" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/" />
      </Helmet>
      <Home />
    </>
  );
}
