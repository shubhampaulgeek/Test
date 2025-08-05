import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CryptoAirdropEstimator from './tools/CryptoAirdropEstimator';
import CryptoROICalculator from './tools/CryptoROICalculator';
import CryptoTaxCalculator from './tools/CryptoTaxCalculator';
import DeFiYieldCalculator from './tools/DeFiYieldCalculator';
import YouTubeThumbnailDownloader from './tools/YouTubeThumbnailDownloader';
import NightbotTimerCalculator from './tools/NightbotTimerCalculator';
import NightbotCommandGenerator from './tools/NightbotCommandGenerator';
import InverterBatteryCalculator from './tools/InverterBatteryCalculator';
import InverterEfficiencyCalculator from './tools/InverterEfficiencyCalculator';

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
}

// This component is kept for backward compatibility with other parts of the app
// but is no longer used in the main tools page since we now redirect to individual URLs
const ToolModal = ({ isOpen, onClose, toolName }: ToolModalProps) => {
  const renderTool = () => {
    switch (toolName) {
      case 'Crypto Airdrop Token Price Estimator':
        return <CryptoAirdropEstimator />;
      case 'Crypto ROI Calculator':
        return <CryptoROICalculator />;
      case 'Crypto Tax Calculator':
        return <CryptoTaxCalculator />;
      case 'DeFi Yield Calculator':
        return <DeFiYieldCalculator />;
      case 'YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online':
        return <YouTubeThumbnailDownloader />;
      case 'Nightbot Timer Calculator':
        return <NightbotTimerCalculator />;
      case 'Nightbot Command Generator':
        return <NightbotCommandGenerator />;
      case 'Inverter Battery Backup Time Calculator':
        return <InverterBatteryCalculator />;
      case 'Inverter Efficiency Calculator':
        return <InverterEfficiencyCalculator />;
      default:
        return (
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold mb-2">Tool Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-400">
              This tool is currently under development and will be available soon.
            </p>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{toolName}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {renderTool()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ToolModal;
