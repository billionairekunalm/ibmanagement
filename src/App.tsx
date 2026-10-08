import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import DemoConversionBlock from './components/DemoConversionBlock';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import TechnicianDashboard from './pages/TechnicianDashboard';
import RadiologistDashboard from './pages/RadiologistDashboard';
import AdminDashboard from './pages/AdminDashboard';
import DentistApp from './pages/DentistApp';
import Pricing from './pages/Pricing';
import WhoItsFor from './pages/WhoItsFor';
import Security from './pages/Security';
import Integrations from './pages/Integrations';
import Switching from './pages/Switching';
import About from './pages/About';
import Demo from './pages/Demo';
import ThankYou from './pages/ThankYou';
import Resources from './pages/Resources';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Dpa from './pages/Dpa';

// Helper to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper to conditionalise conversion block
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  
  // Exclude demo pages, legal pages, thank you page, and contact page from displaying the footer conversion block
  const excludeConversion = [
    '/demo',
    '/demo/thank-you',
    '/contact',
    '/privacy',
    '/terms',
    '/dpa'
  ].includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-dicom-black">
        <div key={pathname} className="animate-fadeInUp">
          {children}
        </div>
      </main>
      {!excludeConversion && <DemoConversionBlock />}
      <WhatsAppButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/technician" element={<TechnicianDashboard />} />
          <Route path="/product/radiologist" element={<RadiologistDashboard />} />
          <Route path="/product/admin" element={<AdminDashboard />} />
          <Route path="/product/dentist-app" element={<DentistApp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/who-its-for" element={<WhoItsFor />} />
          <Route path="/security" element={<Security />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/switching" element={<Switching />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/thank-you" element={<ThankYou />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dpa" element={<Dpa />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
