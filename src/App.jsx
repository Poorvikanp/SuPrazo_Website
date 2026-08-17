import React, { useEffect, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import { LanguageProvider } from '@/lib/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import PageLayout from '@/components/shared/PageLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '@/pages/Home';

const About = React.lazy(() => import('@/pages/About').then(m => ({ default: m.default })));
const Community = React.lazy(() => import('@/pages/Community').then(m => ({ default: m.default })));
const DirectorsOffice = React.lazy(() => import('@/pages/DirectorsOffice').then(m => ({ default: m.default })));
const Foundation = React.lazy(() => import('@/pages/Foundation').then(m => ({ default: m.default })));
const Products = React.lazy(() => import('@/pages/Products').then(m => ({ default: m.default })));
const Careers = React.lazy(() => import('@/pages/Careers').then(m => ({ default: m.default })));
const CareersApply = React.lazy(() => import('@/pages/CareersApply').then(m => ({ default: m.default })));
const Contact = React.lazy(() => import('@/pages/Contact').then(m => ({ default: m.default })));
const ProductEnquiry = React.lazy(() => import('@/pages/ProductEnquiry').then(m => ({ default: m.default })));

function AOSRefresh() {
  const location = useLocation();
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      mirror: true,
    });
  }, []);

  return (
    <AuthProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <ScrollToTop />
            <AOSRefresh />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route element={<PageLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/directors-office" element={<DirectorsOffice />} />
                  <Route path="/foundation" element={<Foundation />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/careers/apply" element={<CareersApply />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products/enquiry" element={<ProductEnquiry />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
            <Toaster />
          </Router>
        </QueryClientProvider>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App