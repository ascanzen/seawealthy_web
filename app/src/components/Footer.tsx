import { Link } from 'react-router';
import { Waves, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  products: [
    { label: '数据整理工具', href: '/products' },
    { label: '量化分析终端', href: '/products' },
    { label: '终端下载', href: '/download' },
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '技术能力', href: '/tech' },
    { label: '客服中心', href: '/support' },
  ],
  support: [
    { label: '常见问题', href: '/support' },
    { label: '使用指南', href: '/support' },
    { label: '问题反馈', href: '/support' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A4F7C] text-white rounded-t-3xl mt-20">
      <div className="max-container section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">海盈平科技</span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              专注金融场景AI数据处理、智能量化分析、交易者辅助工具研发的科技企业
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail className="w-4 h-4 shrink-0" />
                <span>support@haiyingping.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone className="w-4 h-4 shrink-0" />
                <span>400-xxx-xxxx</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>深圳市南山区科技园</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-5 text-white/90">产品服务</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-white/90">关于公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-5 text-white/90">帮助支持</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-6 mb-8">
            <h5 className="font-semibold text-sm text-white/80 mb-3">合规公示</h5>
            <p className="text-xs text-white/50 leading-relaxed">
              本站所有软件产品均为金融数据分析、数据处理、策略模拟辅助工具，仅提供技术与数据可视化服务，不构成任何投资建议、交易指导、理财推介。所有市场数据仅供学习研究参考，使用者自主承担全部使用风险，本公司不参与任何金融交易、资管、理财经营活动。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2024 海盈平科技 版权所有 | 粤ICP备xxxxxxxx号
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <Link to="/support" className="hover:text-white/60 transition-colors">
                隐私政策
              </Link>
              <span>|</span>
              <Link to="/support" className="hover:text-white/60 transition-colors">
                用户协议
              </Link>
              <span>|</span>
              <Link to="/support" className="hover:text-white/60 transition-colors">
                合规声明
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
