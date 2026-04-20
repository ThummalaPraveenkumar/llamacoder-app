import { Mail, Phone, MapPin, Users } from "lucide-react";
import type { PageType } from "../types";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const footerLinks = {
  platform: [
    { label: "For Students", page: "students" as PageType },
    { label: "For Colleges", page: "colleges" as PageType },
    { label: "For Corporates", page: "corporates" as PageType },
    { label: "Training Partners", page: "training" as PageType },
    { label: "Campus Ambassador", page: "ambassador" as PageType },
  ],
  company: [
    { label: "About Us", page: "about" as PageType },
    { label: "Success Stories", page: "success" as PageType },
    { label: "Contact", page: "contact" as PageType },
    { label: "Careers", page: "about" as PageType },
    { label: "Blog", page: "home" as PageType },
  ],
  resources: [
    { label: "Help Center", page: "contact" as PageType },
    { label: "Privacy Policy", page: "home" as PageType },
    { label: "Terms of Service", page: "home" as PageType },
    { label: "Cookie Policy", page: "home" as PageType },
  ],
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C2</span>
              </div>
              <span className="text-xl font-bold">C2CW</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Bridging the gap between colleges and corporates. India's leading Talent Supply Chain Platform for industry-ready graduates.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@c2cw.in</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 C2CW. All rights reserved. Made with love in India
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
              <Users className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}