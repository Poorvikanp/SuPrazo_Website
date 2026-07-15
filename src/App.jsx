import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import { LanguageProvider } from '@/lib/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import PageLayout from '@/components/shared/PageLayout';

// Page imports
import Home from '@/pages/Home';
import About from '@/pages/About';
import Community from '@/pages/Community';
import DirectorsOffice from '@/pages/DirectorsOffice';
import Foundation from '@/pages/Foundation';
import Products from '@/pages/Products';
import Careers from '@/pages/Careers';
import CareersApply from '@/pages/CareersApply';
import Contact from '@/pages/Contact';
import ProductEnquiry from '@/pages/ProductEnquiry';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <ScrollToTop />
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
          </Router>
          <Toaster />
        </QueryClientProvider>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App