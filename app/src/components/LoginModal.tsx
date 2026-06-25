import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn, Mail, Lock } from 'lucide-react';
import { useLoginContext } from '@/App';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useLoginContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.includes('@')) {
      setError('请输入有效的邮箱地址');
      return;
    }
    if (password.length < 6) {
      setError('密码长度至少6位');
      return;
    }
    login();
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[420px] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#0A4F7C] flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A2B3C]">欢迎回来</h2>
              <p className="text-sm text-[#5A6A7A] mt-2">登录您的专属工具后台</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1A2B3C] mb-1.5">
                  邮箱地址
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A2B3C] mb-1.5">
                  密码
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="输入您的密码"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 bg-red-50 px-4 py-2 rounded-lg"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                className="w-full btn-primary py-3.5 text-sm font-semibold"
              >
                登录
              </button>
            </form>

            <p className="text-xs text-[#8A9AAE] text-center mt-6">
              本后台仅提供工具权限管理，不涉及任何金融交易功能
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
