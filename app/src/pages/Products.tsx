import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3, TrendingUp, FileText, Bell, Smartphone,
  Activity, Brain, Sliders, Monitor, Cloud, Check, Minus
} from 'lucide-react';

const liteFeatures = [
  { icon: BarChart3, text: '海量市场数据自动清洗与归类' },
  { icon: TrendingUp, text: '极简可视化图表，趋势一目了然' },
  { icon: FileText, text: '个人数据复盘笔记与存档' },
  { icon: Bell, text: '关键数据异动提醒' },
  { icon: Smartphone, text: '移动端适配，随时查看' },
];

const proFeatures = [
  { icon: Activity, text: '多维度历史数据回测演算' },
  { icon: Brain, text: 'AI因子拆解与数据模型模拟' },
  { icon: Sliders, text: '自定义参数策略测试' },
  { icon: Monitor, text: '高效桌面终端，深度解析' },
  { icon: Cloud, text: '云端数据同步与协作' },
];

const comparisonData = [
  { feature: '市场数据清洗', lite: true, pro: true },
  { feature: '可视化图表', lite: true, pro: true },
  { feature: '数据归类整理', lite: true, pro: true },
  { feature: '复盘笔记', lite: true, pro: true },
  { feature: '数据存档', lite: '基础', pro: '高级' },
  { feature: '回测演算', lite: false, pro: true },
  { feature: 'AI因子拆解', lite: false, pro: true },
  { feature: '策略模拟', lite: false, pro: true },
  { feature: '自定义参数', lite: false, pro: true },
  { feature: '桌面终端', lite: false, pro: true },
  { feature: '云端同步', lite: false, pro: true },
  { feature: 'API接口', lite: false, pro: true },
];

type TabType = 'lite' | 'pro';

export default function Products() {
  const [activeTab, setActiveTab] = useState<TabType>('lite');

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
              AI数据工具产品中心
            </h1>
            <p className="text-lg text-[#5A6A7A] max-w-2xl mx-auto">
              从数据整理到量化研究，覆盖不同层级用户需求
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mt-10">
            <div className="bg-white rounded-full p-1.5 shadow-md inline-flex">
              <button
                onClick={() => setActiveTab('lite')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'lite'
                    ? 'bg-[#1E88E5] text-white shadow-md'
                    : 'text-[#5A6A7A] hover:text-[#1E88E5]'
                }`}
              >
                数据整理工具
              </button>
              <button
                onClick={() => setActiveTab('pro')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'pro'
                    ? 'bg-gradient-to-r from-[#D4A853] to-[#B8943F] text-white shadow-md'
                    : 'text-[#5A6A7A] hover:text-[#D4A853]'
                }`}
              >
                量化分析终端
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-container section-padding">
          {/* Lite Version */}
          {activeTab === 'lite' && (
            <motion.div
              key="lite"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <img
                  src="./products-lite.jpg"
                  alt="轻量化金融数据整理工具"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-xs font-medium mb-4">
                  大众版
                </div>
                <h2 className="text-3xl font-bold text-[#1A2B3C] mb-3">
                  轻量化金融数据整理工具
                </h2>
                <p className="text-[#5A6A7A] mb-8">
                  降低普通人阅读市场数据的门槛，自动清洗整理海量数据，让趋势一目了然
                </p>
                <div className="space-y-4">
                  {liteFeatures.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#1E88E5]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#1E88E5]" />
                      </div>
                      <span className="text-[#1A2B3C] font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <button className="btn-primary mt-8">
                  免费下载体验
                </button>
              </div>
            </motion.div>
          )}

          {/* Pro Version */}
          {activeTab === 'pro' && (
            <motion.div
              key="pro"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/10 text-[#D4A853] text-xs font-medium mb-4">
                  专业版
                </div>
                <h2 className="text-3xl font-bold text-[#1A2B3C] mb-3">
                  AI量化分析终端
                </h2>
                <p className="text-[#5A6A7A] mb-8">
                  面向量化研究者与专业交易者的数据分析辅助工具，提供回测演算与策略模拟
                </p>
                <div className="space-y-4">
                  {proFeatures.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#D4A853]" />
                      </div>
                      <span className="text-[#1A2B3C] font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
                <button className="btn-gold mt-8">
                  申请专业版试用
                </button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="./products-pro.jpg"
                  alt="AI量化分析终端"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FD] to-[#F0F7FF]">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1A2B3C]">版本功能对比</h2>
            <p className="text-[#5A6A7A] mt-2">选择适合您的工具版本</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-3 border-b border-gray-100">
              <div className="px-6 py-4 font-semibold text-[#1A2B3C]">功能</div>
              <div className="px-6 py-4 font-semibold text-[#1E88E5] text-center bg-[#1E88E5]/5">
                数据整理工具
              </div>
              <div className="px-6 py-4 font-semibold text-[#D4A853] text-center bg-[#D4A853]/5">
                量化分析终端
              </div>
            </div>
            {comparisonData.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`}
              >
                <div className="px-6 py-4 text-sm text-[#5A6A7A]">{row.feature}</div>
                <div className="px-6 py-4 flex justify-center items-center bg-[#1E88E5]/[0.02]">
                  {row.lite === true ? (
                    <Check className="w-5 h-5 text-[#34C759]" />
                  ) : row.lite === false ? (
                    <Minus className="w-5 h-5 text-gray-300" />
                  ) : (
                    <span className="text-xs text-[#1E88E5] font-medium">{row.lite}</span>
                  )}
                </div>
                <div className="px-6 py-4 flex justify-center items-center bg-[#D4A853]/[0.02]">
                  {row.pro === true ? (
                    <Check className="w-5 h-5 text-[#34C759]" />
                  ) : row.pro === false ? (
                    <Minus className="w-5 h-5 text-gray-300" />
                  ) : (
                    <span className="text-xs text-[#D4A853] font-medium">{row.pro}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
