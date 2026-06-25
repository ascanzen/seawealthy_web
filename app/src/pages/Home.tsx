import { motion } from 'framer-motion';
import { Link } from 'react-router';
import {
  BarChart3, CheckCircle2, ChevronRight, Cpu,
  Database, Shield, Zap
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' as const },
  }),
};

const products = [
  {
    icon: BarChart3,
    iconColor: '#1E88E5',
    accentColor: 'linear-gradient(90deg, #1E88E5, #64B5F6)',
    title: '轻量化金融数据工具',
    subtitle: '让市场数据变得简单可读',
    features: [
      '海量市场数据自动清洗、归类整理',
      '极简可视化图表，快速读懂趋势',
      '个人数据记录、复盘笔记',
      '数据存档与历史回溯',
    ],
    link: '/products',
  },
  {
    icon: Cpu,
    iconColor: '#D4A853',
    accentColor: 'linear-gradient(90deg, #D4A853, #F0D78C)',
    title: 'AI量化分析终端',
    subtitle: '专业级数据研究与策略模拟',
    features: [
      '多维度历史数据回测演算',
      'AI因子拆解、数据模型模拟',
      '自定义参数策略测试',
      '高效桌面终端，适配日常研究',
    ],
    link: '/products',
  },
];

const advantages = [
  {
    icon: Cpu,
    title: '自研AI数据算法引擎',
    desc: '自主研发智能算法，持续迭代优化',
  },
  {
    icon: Database,
    title: '金融场景大数据处理',
    desc: '海量数据毫秒级处理，高效稳定',
  },
  {
    icon: Zap,
    title: '轻量化软件架构',
    desc: '低延迟、易上手、全终端适配',
  },
  {
    icon: Shield,
    title: '数据安全存储',
    desc: '本地+云端双重保障，隐私优先',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] max-h-[900px] flex items-center overflow-hidden pt-[72px]">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A4F7C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-container section-padding w-full py-12 md:py-20">
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 max-w-xl lg:max-w-2xl">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[56px] font-bold mb-5"
              >
                <span className="text-[#0A4F7C]">AI智能数据处理 ·</span>
                <br />
                <span className="text-gradient-ocean">新一代交易者辅助终端</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className="text-base sm:text-lg text-[#5A6A7A] leading-relaxed mb-8 max-w-[560px]"
              >
                深耕金融场景数据算力，为市场研究者、量化爱好者提供轻量化智能工具
              </motion.p>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
                className="flex flex-wrap gap-4"
              >
                <Link to="/products" className="btn-primary">
                  探索产品
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <Link to="/tech" className="btn-secondary">
                  了解更多
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="hidden lg:block flex-shrink-0 w-[45%] max-w-[600px]"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#1E88E5]/10 to-[#64B5F6]/5 rounded-3xl blur-2xl" />
                <img
                  src="./home-hero.jpg"
                  alt="数据可视化仪表盘"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">
              智能数据工具产品
            </h2>
            <p className="text-[#5A6A7A] mt-3">
              覆盖不同层级用户需求，从数据整理到量化研究
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                className="card-glass overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-1" style={{ background: product.accentColor }} />

                <div className="p-8">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${product.iconColor}10` }}
                  >
                    <product.icon className="w-7 h-7" style={{ color: product.iconColor }} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-[#1A2B3C] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-[#5A6A7A] text-sm mb-6">{product.subtitle}</p>

                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#5A6A7A] leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium hover:gap-2.5 transition-all"
                    style={{ color: product.iconColor }}
                  >
                    了解更多
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FD] to-[#F0F7FF]">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">
              技术驱动，专注数据
            </h2>
            <p className="text-[#5A6A7A] mt-3">
              自主研发核心技术，持续优化数据处理体验
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
                className="card-glass p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1E88E5]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#1E88E5]" />
                </div>
                <h3 className="font-semibold text-[#1A2B3C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5A6A7A]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
