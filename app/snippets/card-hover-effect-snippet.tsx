import { HoverEffect } from "@/components/ui/card-hover";
import { PiChartLine, PiCode, PiCurrencyDollar, PiEnvelope, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "Conversion-Driven Web Design",
    description: "High-converting websites optimized for user experience and search engines, built with marketing performance in mind.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiChartLine className="w-8 h-8 text-blue-600" /></div>,
    title: "SEO & Content Strategy",
    description: "Comprehensive search engine optimization combined with content marketing to boost organic traffic and authority.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiCurrencyDollar className="w-8 h-8 text-blue-600" /></div>,
    title: "PPC Advertising",
    description: "Targeted pay-per-click campaigns across Google Ads and social platforms to drive immediate results and maximize ROI.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
    title: "Social Media Management",
    description: "Full-service social media strategy including content creation, community management, and influencer partnerships.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiCode className="w-8 h-8 text-blue-600" /></div>,
    title: "Marketing Web Apps",
    description: "Custom web applications with integrated marketing tools, CRM systems, and analytics dashboards.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiEnvelope className="w-8 h-8 text-blue-600" /></div>,
    title: "Email Marketing Automation",
    description: "Personalized email campaigns with automated workflows to nurture leads and retain customers.",
  },
];