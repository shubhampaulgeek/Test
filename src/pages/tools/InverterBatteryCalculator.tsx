
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InverterBatteryCalculator from '@/components/tools/InverterBatteryCalculator';
import SEO from '@/components/SEO';

const InverterBatteryCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Inverter Battery Backup Calculator – Estimate Power Backup Duration"
        description="Find out how long your inverter battery will last based on power usage and battery specs. Get accurate backup time for your home or office."
        keywords="inverter battery backup calculator, battery backup time, inverter calculator, UPS backup time, power backup calculator"
        canonical="https://www.shubhampaul.xyz/tools/inverter-battery-calculator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Inverter Battery Backup Time Calculator</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Calculate how long your inverter battery will last based on your power consumption
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InverterBatteryCalculator />

          {/* About Section */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Tool</h2>
            <p className="text-gray-600 mb-4">
              The Inverter Battery Backup Time Calculator determines how long your battery system will provide power during outages. Essential for home backup planning, this tool considers battery capacity, load requirements, and battery type efficiency to deliver accurate backup duration estimates for your power needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculation Factors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Battery capacity (AH rating)</li>
                  <li>• Total power load (Watts)</li>
                  <li>• Battery voltage specification</li>
                  <li>• Battery type efficiency</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Applications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Home backup system planning</li>
                  <li>• UPS sizing calculations</li>
                  <li>• Solar battery estimation</li>
                  <li>• Emergency power planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InverterBatteryCalculatorPage;
