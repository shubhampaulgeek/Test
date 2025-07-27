
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import SolarPanelOutputLossCalculator from '@/components/tools/SolarPanelOutputLossCalculator';

const SolarPanelOutputLossCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Solar Panel Output Loss Calculator"
        description="Calculate actual solar panel performance loss due to local weather, dust, and heat. Perfect for homeowners and solar installers."
        keywords="solar calculator, pv panel output, region solar loss, India solar panel tool, solar panel efficiency"
        canonical="https://www.shubhampaul.xyz/tools/solar-panel-output-loss-calculator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solar Panel Output Loss Calculator</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Estimate real-world solar panel output loss based on region-specific weather, dust, and environmental factors
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SolarPanelOutputLossCalculator />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolarPanelOutputLossCalculatorPage;
