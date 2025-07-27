
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CapacitorChargingTimeCalculator from '@/components/tools/CapacitorChargingTimeCalculator';

const CapacitorChargingTimeCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEO
        title="Capacitor Charging Time Calculator"
        description="Calculate how long your capacitor will charge or discharge in a simple RC circuit. Great for DIYers and students."
        keywords="rc circuit time calculator, capacitor charge time, electronics student tool, RC time constant"
        canonical="https://www.shubhampaul.xyz/tools/capacitor-charging-time-calculator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Capacitor Charging Time Calculator</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Calculate charging and discharging times for RC circuits based on resistance and capacitance values
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CapacitorChargingTimeCalculator />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CapacitorChargingTimeCalculatorPage;
