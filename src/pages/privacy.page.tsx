import { Helmet } from 'react-helmet-async';
import Privacy from '../pages/Privacy';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Paul Tools</title>
        <meta name="description" content="Learn about how Paul Tools handles your privacy and data. We don't store personal information and all calculations happen in your browser." />
        <meta name="keywords" content="privacy policy, data protection, paul tools privacy" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/privacy" />
      </Helmet>
      <Privacy />
    </>
  );
}