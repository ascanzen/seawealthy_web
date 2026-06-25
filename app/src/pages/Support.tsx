import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, Mail, Phone, ChevronDown, HelpCircle
} from 'lucide-react';

const faqs = [
  {
    q: '海盈平科技提供什么服务？',
    a: '我们提供金融数据分析、数据处理、策略模拟辅助工具软件，包括轻量化数据整理工具和专业AI量化分析终端。所有产品均为纯软件工具，不涉及任何金融交易、资管或理财服务。',
  },
  {
    q: '软件是否收费？',
    a: '大众版数据整理工具可免费使用，专业版量化分析终端提供免费试用。我们采用工具服务订阅模式，用户可根据自身需求选择合适的版本。',
  },
  {
    q: '如何确保数据安全？',
    a: '我们采用本地+云端双重存储方案，所有数据传输均经过加密处理。我们不收集用户隐私信息，用户数据归用户所有，可随时导出或删除。',
  },
  {
    q: '是否提供投资建议？',
    a: '不提供。本站所有产品均为技术工具，不构成任何投资建议、交易指导或理财推介。所有市场数据仅供学习研究参考，使用者需自主承担全部使用风险。',
  },
  {
    q: '如何联系客服？',
    a: '您可通过页面底部在线客服、发送邮件至 support@haiyingping.com，或在工作日 9:00-18:00 拨打客服热线 400-xxx-xxxx 联系我们。',
  },
  {
    q: '支持哪些操作系统？',
    a: '我们的工具全面支持 Windows 10/11、macOS 12+、iOS 和 Android 系统。您可以在"终端下载"页面获取各平台的安装包。',
  },
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: '在线客服',
    desc: '工作日 9:00-18:00',
    action: '立即咨询',
    color: '#1E88E5',
  },
  {
    icon: Mail,
    title: '邮件支持',
    desc: 'support@haiyingping.com',
    action: '发送邮件',
    color: '#D4A853',
  },
  {
    icon: Phone,
    title: '电话热线',
    desc: '400-xxx-xxxx',
    note: '工作日 9:00-18:00',
    action: '拨打热线',
    color: '#34C759',
  },
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FD] via-[#F5FAFF] to-[#EDF6FF]" />
        <div className="max-container section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[#0A4F7C] mb-4">
              客服中心
            </h1>
            <p className="text-lg text-[#5A6A7A] max-w-xl mx-auto">
              我们随时为您解答疑问
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              常见问题
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
              您可能想了解的
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors text-left"
                >
                  <span className="font-medium text-[#1A2B3C] pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-sm text-[#5A6A7A] leading-relaxed pt-3">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FD] to-[#F0F7FF]">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
              联系我们
            </h2>
            <p className="text-[#5A6A7A] mt-2">选择适合您的方式与我们沟通</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                className="card-glass p-8 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${method.color}10` }}
                >
                  <method.icon className="w-7 h-7" style={{ color: method.color }} />
                </div>
                <h3 className="font-bold text-[#1A2B3C] mb-1">{method.title}</h3>
                <p className="text-sm text-[#5A6A7A] mb-1">{method.desc}</p>
                {method.note && (
                  <p className="text-xs text-[#8A9AAE] mb-4">{method.note}</p>
                )}
                <button
                  className="mt-4 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: method.color }}
                >
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
