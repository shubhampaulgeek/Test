import { Helmet } from 'react-helmet-async';
import Contact from '../pages/Contact';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch with Paul Tools</title>
        <meta name="description" content="Have questions about our free online tools? Need help with calculations? Contact the Paul Tools team for support and feedback." />
        <meta name="keywords" content="contact paul tools, support, feedback, help" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/contact" />
      </Helmet>
      <Contact />
    </>
  );
}