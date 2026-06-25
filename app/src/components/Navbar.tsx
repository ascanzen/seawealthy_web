import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Package, Cpu, Download, Users, Headphones,
  LogIn, LogOut, Menu, X, Waves
} from 'lucide-react';
import { useLoginContext } from '@/App';
import LoginModal from './LoginModal';

const navItems = [
  { path: '/', label: '首页', icon: Home },
  { path: '/products', label: '产品中心', icon: Package },
  { path: '/tech', label: '技术能力', icon: Cpu },
  { path: '/download', label: '终端下载', icon: Download },
  { path: '/about', label: '关于我们', icon: Users },
  { path: '/support', label: '客服中心', icon: Headphones },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, logout } = useLoginContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="max-container h-full flex items-center justify-between section-padding">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E88E5] to-[#0A4F7C] flex items-center justify-center">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-[#0A4F7C] hidden sm:block">
              海盈平科技
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-[#1E88E5]'
                    : 'text-[#5A6A7A] hover:text-[#1E88E5]'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1E88E5] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-[#5A6A7A] hover:text-red-500 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>退出</span>
              </button>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-[#1E88E5] to-[#0A4F7C] text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>登录</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-[#E8F4FD] transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-20 space-y-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        isActive(item.path)
                          ? 'bg-[#E8F4FD] text-[#1E88E5]'
                          : 'text-[#5A6A7A] hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t">
                  {!isLoggedIn ? (
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        setLoginOpen(true);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1E88E5] to-[#0A4F7C] text-white"
                    >
                      <LogIn className="w-5 h-5" />
                      <span>登录</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        logout();
                        setMobileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>退出登录</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
