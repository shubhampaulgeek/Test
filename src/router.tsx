
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Import the page components that have proper SEO setup
import { Page as HomePage } from "./pages/index.page";
import { Page as AboutPage } from "./pages/about.page";
import { Page as ContactPage } from "./pages/contact.page";
import { Page as PrivacyPage } from "./pages/privacy.page";
import { Page as DisclaimerPage } from "./pages/disclaimer.page";
import { Page as ToolsPage } from "./pages/tools.page";

// Tool pages with SEO
import { Page as CryptoROIPage } from "./pages/tools/crypto-roi-calculator.page";
import { Page as CryptoAirdropPage } from "./pages/tools/crypto-airdrop-estimator.page";
import { Page as CryptoTaxPage } from "./pages/tools/crypto-tax-calculator.page";
import { Page as DeFiYieldPage } from "./pages/tools/defi-yield-calculator.page";
import { Page as GasFeePage } from "./pages/tools/gas-fee-estimator.page";
import { Page as InverterBatteryPage } from "./pages/tools/inverter-battery-calculator.page";
import { Page as InverterEfficiencyPage } from "./pages/tools/inverter-efficiency-calculator.page";
import { Page as SolarPanelPage } from "./pages/tools/solar-panel-output-loss-calculator.page";
import { Page as PCBTracePage } from "./pages/tools/pcb-trace-current-calculator.page";
import { Page as CapacitorPage } from "./pages/tools/capacitor-charging-time-calculator.page";
import { Page as NightbotTimerPage } from "./pages/tools/nightbot-timer-calculator.page";
import { Page as NightbotCommandPage } from "./pages/tools/nightbot-command-generator.page";
import { Page as AIClipPage } from "./pages/tools/ai-clip-generator.page";
import { Page as YouTubeThumbnailPage } from "./pages/tools/youtube-thumbnail-downloader.page";

const NotFound = lazy(() => import("./pages/NotFound"));

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/disclaimer" element={<DisclaimerPage />} />
    <Route path="/tools" element={<ToolsPage />} />
    
    {/* Tool Routes */}
    <Route path="/tools/crypto-roi-calculator" element={<CryptoROIPage />} />
    <Route path="/tools/crypto-airdrop-estimator" element={<CryptoAirdropPage />} />
    <Route path="/tools/crypto-tax-calculator" element={<CryptoTaxPage />} />
    <Route path="/tools/defi-yield-calculator" element={<DeFiYieldPage />} />
    <Route path="/tools/gas-fee-estimator" element={<GasFeePage />} />
    <Route path="/tools/inverter-battery-calculator" element={<InverterBatteryPage />} />
    <Route path="/tools/inverter-efficiency-calculator" element={<InverterEfficiencyPage />} />
    <Route path="/tools/solar-panel-output-loss-calculator" element={<SolarPanelPage />} />
    <Route path="/tools/pcb-trace-current-calculator" element={<PCBTracePage />} />
    <Route path="/tools/capacitor-charging-time-calculator" element={<CapacitorPage />} />
    <Route path="/tools/nightbot-timer-calculator" element={<NightbotTimerPage />} />
    <Route path="/tools/nightbot-command-generator" element={<NightbotCommandPage />} />
    <Route path="/tools/ai-clip-generator" element={<AIClipPage />} />
    <Route path="/tools/youtube-thumbnail-downloader" element={<YouTubeThumbnailPage />} />
    
    <Route path="*" element={<NotFound />} />
  </Routes>
);
