import { motion } from 'framer-motion';
import { Target, Eye, Waves } from 'lucide-react';

const milestones = [
  { year: '2021', event: '公司成立，启动AI数据算法研发' },
  { year: '2022', event: '首个数据整理工具上线，获得首批用户认可' },
  { year: '2023', event: 'AI量化分析终端发布，技术能力全面升级' },
  { year: '2024', event: '全终端适配完成，累计服务用户突破10万' },
];

const team = [
  {
    name: '张明远',
    role: '创始人 / CEO',
    desc: '前大型金融科技公司技术总监，10年金融数据行业经验',
  },
  {
    name: '李思琪',
    role: '技术负责人',
    desc: 'AI算法专家，曾主导多个大型量化系统架构设计',
  },
  {
    name: '王浩然',
    role: '产品负责人',
    desc: '深耕金融产品领域，专注用户体验与产品策略',
  },
  {
    name: '陈雨萱',
    role: '数据科学家',
    desc: '统计学博士，专注金融数据建模与因子研究',
  },
];

export default function About() {
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
              关于海盈平科技
            </h1>
            <p className="text-lg text-[#5A6A7A] max-w-xl mx-auto">
              专注金融场景AI数据处理与交易者辅助工具研发
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-container section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E88E5] to-[#0A4F7C] flex items-center justify-center">
                  <Waves className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
                  品牌释义
                </h2>
              </div>

              <div className="bg-gradient-to-r from-[#1E88E5]/5 to-[#D4A853]/5 rounded-2xl p-6 mb-6">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-[#1E88E5]">海</span>：海量市场数据
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="font-bold text-[#D4A853]">盈</span>：数据精准运算
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="font-bold text-[#0A4F7C]">平</span>：平稳稳定的技术算力输出
                </p>
              </div>

              <p className="text-[#5A6A7A] leading-relaxed mb-6">
                海盈平科技是一家专注于金融场景AI数据处理、智能量化分析、交易者辅助工具研发的科技企业。我们致力于通过AI技术降低市场数据的理解门槛，为个人交易者、量化爱好者、金融数据研究者提供轻量化的智能工具。
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1E88E5]/5 rounded-xl">
                  <Target className="w-4 h-4 text-[#1E88E5]" />
                  <span className="text-sm text-[#1A2B3C] font-medium">专注数据技术</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#D4A853]/5 rounded-xl">
                  <Eye className="w-4 h-4 text-[#D4A853]" />
                  <span className="text-sm text-[#1A2B3C] font-medium">用户价值导向</span>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./about-office.jpg"
                alt="海盈平科技办公环境"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FD] to-[#F0F7FF]">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#1E88E5]/10 text-[#1E88E5] text-sm font-medium mb-6">
              使命愿景
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C] leading-relaxed">
              "让复杂市场数据，变得简单可视、可分析、可复盘"
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
              发展历程
            </h2>
            <p className="text-[#5A6A7A] mt-2">见证我们的成长之路</p>
          </motion.div>

          <div className="max-w-2xl mx-auto relative">
            {/* Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1E88E5] to-[#D4A853] md:-translate-x-px" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-5 shadow-sm ml-16 md:ml-0">
                    <span className="text-lg font-bold text-gradient-ocean">{m.year}</span>
                    <p className="text-sm text-[#5A6A7A] mt-1">{m.event}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#1E88E5] to-[#D4A853] border-4 border-white shadow-md md:-translate-x-2" />
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-[#E8F4FD] to-[#F0F7FF]">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B3C]">
              核心团队
            </h2>
            <p className="text-[#5A6A7A] mt-2">专业、专注、专心做好数据工具</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-glass p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E88E5]/10 to-[#D4A853]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gradient-ocean">
                    {member.name[0]}
                  </span>
                </div>
                <h4 className="font-bold text-[#1A2B3C]">{member.name}</h4>
                <p className="text-sm text-[#1E88E5] font-medium mt-1">{member.role}</p>
                <p className="text-xs text-[#5A6A7A] mt-2 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
