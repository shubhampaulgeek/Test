import { Helmet } from 'react-helmet-async';
import About from '../pages/About';

export function Page() {
  return (
    <>
      <Helmet>
        <title>About Us - Paul Tools</title>
        <meta name="description" content="Learn about Paul Tools, your one-stop destination for free online useful tools from different categories like Crypto, Electronics, Streaming." />
        <meta name="keywords" content="about paul tools, online utilities, free tools, crypto calculators" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/about" />
      </Helmet>
      <About />
    </>
  );
}
