import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLogin } from '@/hooks/useLogin';
import { createContext, useContext } from 'react';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Tech from '@/pages/Tech';
import Download from '@/pages/Download';
import About from '@/pages/About';
import Support from '@/pages/Support';

interface LoginContextType {
  isLoggedIn: boolean;
  toast: string | null;
  login: () => void;
  logout: () => void;
  clearToast: () => void;
}

const LoginContext = createContext<LoginContextType | null>(null);

export function useLoginContext() {
  const ctx = useContext(LoginContext);
  if (!ctx) throw new Error('useLoginContext must be used within LoginProvider');
  return ctx;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function Toast() {
  const { toast, clearToast } = useLoginContext();

  useEffect(() => {
    if (toast) {
      const t = setTimeout(clearToast, 3000);
      return () => clearTimeout(t);
    }
  }, [toast, clearToast]);

  if (!toast) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="fixed top-20 left-1/2 -translate-x-1/2 z-[55]"
    >
      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg bg-white border border-gray-100">
        <span className="text-sm font-medium text-[#1A2B3C]">{toast}</span>
      </div>
    </motion.div>
  );
}

export default function App() {
  const { state, login, logout, clearToast } = useLogin();
  const location = useLocation();

  return (
    <LoginContext.Provider value={{ isLoggedIn: state.isLoggedIn, toast: state.toast, login, logout, clearToast }}>
      <ScrollToTop />
      <div className="min-h-[100dvh] flex flex-col">
        <Navbar />
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
              <Route path="/tech" element={<PageWrapper><Tech /></PageWrapper>} />
              <Route path="/download" element={<PageWrapper><Download /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/support" element={<PageWrapper><Support /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
        <Toast />
      </div>
    </LoginContext.Provider>
  );
}
