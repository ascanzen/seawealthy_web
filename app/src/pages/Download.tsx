import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Laptop, Smartphone, ChevronDown, Download as DownloadIcon } from 'lucide-react';

const platforms = [
  {
    icon: Monitor,
    name: 'Windows版',
    version: 'v3.2.1',
    system: 'Windows 10 / Windows 11',
    size: '68.5 MB',
    button: '下载Windows版',
    color: '#1E88E5',
  },
  {
    icon: Laptop,
    name: 'macOS版',
    version: 'v3.2.0',
    system: 'macOS 12 或更高版本',
    size: '72.3 MB',
    button: '下载Mac版',
    color: '#1E88E5',
  },
  {
    icon: Smartphone,
    name: '移动端',
    version: 'v2.8.5',
    system: 'iOS / Android',
    size: '45.1 MB',
    button: '扫码下载',
    color: '#D4A853',
  },
];

const changelog = [
  {
    version: 'v3.2.1',
    date: '2024-12-15',
    changes: [
      '优化数据清洗引擎处理速度，提升30%',
      '新增多维度数据对比视图',
      '修复部分图表渲染异常问题',
      'UI细节优化与交互体验提升',
    ],
  },
  {
    version: 'v3.2.0',
    date: '2024-11-20',
    changes: [
      'AI因子拆解功能全新上线',
      '支持自定义策略回测参数',
      '数据归档功能升级，支持批量导出',
      '系统稳定性大幅提升',
    ],
  },
  {
    version: 'v3.1.0',
    date: '2024-10-08',
    changes: [
      '量化分析终端Beta版发布',
      '新增50+数据维度覆盖',
      '桌面端性能优化',
      '界面全新改版升级',
    ],
  },
];

export default function DownloadPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
              下载终端
            </h1>
            <p className="text-lg text-[#5A6A7A] max-w-xl mx-auto">
              全平台覆盖，随时随地使用数据工具
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-16">
        <div className="max-container section-padding">
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
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
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${p.color}10` }}
                >
                  <p.icon className="w-8 h-8" style={{ color: p.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#1A2B3C] mb-2">{p.name}</h3>
                <p className="text-sm text-[#1E88E5] font-medium mb-1">{p.version}</p>
                <p className="text-sm text-[#5A6A7A] mb-1">{p.system}</p>
                <p className="text-xs text-[#8A9AAE] mb-6">{p.size}</p>
                <button
                  className={`w-full py-3 rounded-full text-white font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                    i === 2 ? 'btn-gold' : 'btn-primary'
                  }`}
                >
                  <DownloadIcon className="w-4 h-4 inline mr-2" />
                  {p.button}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FD] to-[#F0F7FF]">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
              版本历史
            </h2>
            <p className="text-[#5A6A7A] mt-2">持续迭代，不断优化产品体验</p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-3">
            {changelog.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#1E88E5]">{log.version}</span>
                    <span className="text-xs text-[#8A9AAE]">{log.date}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <ul className="space-y-2">
                          {log.changes.map((change, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#5A6A7A]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1E88E5] mt-1.5 shrink-0" />
                              {change}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
