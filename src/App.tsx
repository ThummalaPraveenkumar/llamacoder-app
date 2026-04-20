import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StudentsPage from "./pages/StudentsPage";
import CollegesPage from "./pages/CollegesPage";
import CorporatesPage from "./pages/CorporatesPage";
import TrainingPartnersPage from "./pages/TrainingPartnersPage";
import CampusAmbassadorPage from "./pages/CampusAmbassadorPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";

export type PageType = 'home' | 'students' | 'colleges' | 'corporates' | 'training' | 'ambassador' | 'success' | 'about' | 'contact' | 'auth' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'student' | 'college' | 'corporate' | 'training' | null>(null);

  const handleLogin = (type: 'student' | 'college' | 'corporate' | 'training') => {
    setIsLoggedIn(true);
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'students': return <StudentsPage onNavigate={setCurrentPage} />;
      case 'colleges': return <CollegesPage onNavigate={setCurrentPage} />;
      case 'corporates': return <CorporatesPage onNavigate={setCurrentPage} />;
      case 'training': return <TrainingPartnersPage onNavigate={setCurrentPage} />;
      case 'ambassador': return <CampusAmbassadorPage onNavigate={setCurrentPage} />;
      case 'success': return <SuccessStoriesPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'auth': return <AuthPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'dashboard': return <DashboardPage userType={userType} onNavigate={setCurrentPage} />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <AnimatePresence mode="wait">
        <main key={currentPage}>{renderPage()}</main>
      </AnimatePresence>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;