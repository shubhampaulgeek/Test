import { Helmet } from 'react-helmet-async';
import Disclaimer from './Disclaimer';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Paul Tools</title>
        <meta name="description" content="Important disclaimers about using Paul Tools. Please read our terms and limitations before using our free online calculators and tools." />
        <meta name="keywords" content="disclaimer, terms, limitations, paul tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/disclaimer" />
      </Helmet>
      <Disclaimer />
    </>
  );
}