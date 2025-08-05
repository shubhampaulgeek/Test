
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InverterEfficiencyCalculator from '@/components/tools/InverterEfficiencyCalculator';
import SEO from '@/components/SEO';
import RelatedTools from '@/components/RelatedTools';

const InverterEfficiencyCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Inverter Efficiency Calculator"
        description="Calculate your inverter's efficiency, power output, and losses to improve energy performance. Ideal for home and solar power setups."
        keywords="inverter efficiency calculator, power inverter efficiency, solar inverter calculator, battery inverter efficiency, power loss calculator"
        canonical="https://www.shubhampaul.xyz/tools/inverter-efficiency-calculator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Inverter Efficiency Calculator</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Calculate inverter efficiency and power losses to optimize your power system performance
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InverterEfficiencyCalculator />

          {/* About Section */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Tool</h2>
            <p className="text-gray-600 mb-4">
              The Inverter Efficiency Calculator helps you measure how effectively your inverter converts DC power to AC power. Understanding efficiency is crucial for optimizing solar systems, battery backup solutions, and reducing energy waste in power conversion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Efficiency Ratings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 90%+ = Excellent performance</li>
                  <li>• 80-90% = Good efficiency</li>
                  <li>• Below 80% = Needs optimization</li>
                  <li>• Real-time efficiency monitoring</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Applications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Solar power systems</li>
                  <li>• Battery backup solutions</li>
                  <li>• UPS system analysis</li>
                  <li>• Energy cost optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Measure Input Power</h3>
                <p className="text-gray-600">Record the DC power going into your inverter from your battery or solar panels.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Measure Output Power</h3>
                <p className="text-gray-600">Measure the AC power being delivered to your appliances or load.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Analyze Results</h3>
                <p className="text-gray-600">Review efficiency percentage, power loss calculations, and optimization recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <RelatedTools category="electronics" currentTool="Inverter Efficiency Calculator" />
      <Footer />
    </div>
  );
};

export default InverterEfficiencyCalculatorPage;
