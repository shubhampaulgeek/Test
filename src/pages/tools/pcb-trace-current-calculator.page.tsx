import { Helmet } from 'react-helmet-async';
import PCBTraceCurrentCalculator from '../../pages/tools/PCBTraceCurrentCalculator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>PCB Trace Current Calculator - Paul Tools</title>
        <meta name="description" content="Calculate safe current limits for PCB traces." />
        <meta name="keywords" content="pcb trace current calculator, pcb current capacity, pcb design, pcb tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/pcb-trace-current-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PCB Trace Current Calculator",
            "description": "Calculate safe current limits for PCB traces.",
            "url": "https://www.shubhampaul.xyz/tools/pcb-trace-current-calculator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <PCBTraceCurrentCalculator />
    </>
  );
}