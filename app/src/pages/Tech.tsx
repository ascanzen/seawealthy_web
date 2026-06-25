import { motion } from 'framer-motion';
import { Database, Sparkles, Brain, BarChart3, Zap, Monitor } from 'lucide-react';

const architectureSteps = [
  {
    icon: Database,
    title: '数据采集层',
    desc: '多源异构数据实时接入',
  },
  {
    icon: Sparkles,
    title: 'AI清洗引擎',
    desc: '智能去噪与质量校验',
  },
  {
    icon: Brain,
    title: '量化分析模型',
    desc: '多维度因子拆解演算',
  },
  {
    icon: BarChart3,
    title: '可视化输出',
    desc: '直观图表与数据看板',
  },
];

const metrics = [
  { value: '10万+', unit: '条/秒', desc: '数据处理能力' },
  { value: '99.9%', unit: '', desc: '系统稳定性' },
  { value: '50+', unit: '个', desc: '数据维度覆盖' },
  { value: '<100ms', unit: '', desc: '响应延迟' },
];

const techCards = [
  {
    icon: Brain,
    title: '自研AI算法',
    desc: '自主研发智能数据处理算法，结合深度学习与统计模型，实现金融场景下的精准数据清洗与分析。',
  },
  {
    icon: Zap,
    title: '轻量化架构',
    desc: '采用微服务架构设计，模块间松耦合，支持快速迭代与灵活扩展，保障系统高效稳定运行。',
  },
  {
    icon: Monitor,
    title: '全终端适配',
    desc: '一套代码多端运行，支持Windows、macOS、iOS、Android全平台，随时随地使用数据工具。',
  },
];

export default function Tech() {
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
              核心技术能力
            </h1>
            <p className="text-lg text-[#5A6A7A] max-w-2xl mx-auto">
              自研AI算法引擎，深耕金融场景数据算力
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-16">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
              技术架构
            </h2>
            <p className="text-[#5A6A7A] mt-2">四层数据处理流水线</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="./tech-architecture.jpg"
              alt="技术架构图"
              className="w-full rounded-3xl"
            />
            {/* Overlay steps */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 items-end pb-8 px-4 md:px-8 gap-4">
              {architectureSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto mb-2">
                    <step.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-sm md:text-base">{step.title}</h4>
                  <p className="text-white/70 text-xs mt-0.5 hidden md:block">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FD] to-[#F0F7FF]">
        <div className="max-container section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', damping: 15 }}
                className="card-glass p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-ocean mb-1">
                  {m.value}
                </div>
                {m.unit && (
                  <div className="text-sm text-[#1E88E5] font-medium mb-2">{m.unit}</div>
                )}
                <div className="text-sm text-[#5A6A7A]">{m.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Cards */}
      <section className="py-20">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
              技术优势
            </h2>
            <p className="text-[#5A6A7A] mt-2">持续创新，打造核心竞争力</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {techCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                className="card-glass p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E88E5]/10 flex items-center justify-center mb-5">
                  <card.icon className="w-7 h-7 text-[#1E88E5]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A2B3C] mb-3">{card.title}</h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
