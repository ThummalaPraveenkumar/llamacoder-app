import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Settings, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import type { PageType } from "../types";

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Header({ currentPage, onNavigate, isLoggedIn, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" as PageType },
    { label: "Students", page: "students" as PageType },
    { label: "Colleges", page: "colleges" as PageType },
    { label: "Corporates", page: "corporates" as PageType },
    { label: "Training", page: "training" as PageType },
    { label: "Ambassador", page: "ambassador" as PageType },
    { label: "Success Stories", page: "success" as PageType },
    { label: "About", page: "about" as PageType },
    { label: "Contact", page: "contact" as PageType },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div className="flex items-center cursor-pointer" onClick={() => onNavigate("home")} whileHover={{ scale: 1.02 }}>
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold text-slate-900">C2CW</span>
              <span className="hidden sm:inline ml-2 text-sm text-slate-500">College to Corporate World</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 5).map((item) => (
              <motion.button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === item.page ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50">More</button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navItems.slice(5).map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" onClick={() => onNavigate("dashboard")} className="flex items-center gap-2">
                  <Settings className="h-4 w-4" /> Dashboard
                </Button>
                <Button variant="outline" onClick={onLogout} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" /> Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => onNavigate("auth")} className="text-slate-600">Login</Button>
                <Button onClick={() => onNavigate("auth")} className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white">Get Started</Button>
              </>
            )}
          </div>

          <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden">
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => { onNavigate(item.page); setIsMenuOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg ${
                      currentPage === item.page ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 flex flex-col space-y-2">
                  {isLoggedIn ? (
                    <>
                      <Button variant="outline" onClick={() => { onNavigate("dashboard"); setIsMenuOpen(false); }} className="w-full">Dashboard</Button>
                      <Button variant="ghost" onClick={onLogout} className="w-full">Logout</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" onClick={() => { onNavigate("auth"); setIsMenuOpen(false); }} className="w-full">Login</Button>
                      <Button onClick={() => { onNavigate("auth"); setIsMenuOpen(false); }} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white">Get Started</Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}