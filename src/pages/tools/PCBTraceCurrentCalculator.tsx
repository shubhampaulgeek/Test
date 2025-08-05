
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PCBTraceCurrentCalculator from '@/components/tools/PCBTraceCurrentCalculator';
import RelatedTools from '@/components/RelatedTools';

const PCBTraceCurrentCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="PCB Trace Current Calculator"
        description="Instantly calculate safe current handling capacity for your PCB traces using IPC-2221 formulas. Supports copper weight and temp rise options."
        keywords="pcb trace current calculator, copper trace amp limit, electronics design tool, IPC-2221"
        canonical="https://www.shubhampaul.xyz/tools/pcb-trace-current-calculator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PCB Trace Current Calculator</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Calculate safe current handling capacity for PCB traces based on IPC-2221 standards
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PCBTraceCurrentCalculator />
        </div>
      </section>

      {/* Related Tools Section */}
      <RelatedTools category="electronics" currentTool="PCB Trace Current Capacity Calculator" />
      <Footer />
    </div>
  );
};

export default PCBTraceCurrentCalculatorPage;
