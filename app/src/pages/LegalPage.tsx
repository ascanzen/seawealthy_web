import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck } from 'lucide-react';

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalContent = {
  title: string;
  subtitle: string;
  updatedAt: string;
  icon: typeof FileText;
  sections: LegalSection[];
};

const supportAgreement: LegalContent = {
  title: '会员协议',
  subtitle: '请您在开通、续费或使用会员服务前仔细阅读本协议。',
  updatedAt: '2026年9月22日',
  icon: FileText,
  sections: [
    {
      title: '一、服务说明',
      paragraphs: [
        '北京海盈平科技有限公司通过海盈平科技官网及相关客户端向用户提供金融数据分析、数据处理、策略模拟等软件工具服务。会员服务仅为软件功能、数据展示、效率工具及技术支持服务，不构成任何投资建议、交易指导或理财推介。',
        '您开通会员服务后，可在相应会员周期内使用已购买权益。具体权益内容、服务期限、价格及开通方式以购买页面展示为准。',
      ],
    },
    {
      title: '二、账号与使用规范',
      paragraphs: [
        '用户应保证注册、登录及使用过程中提供的信息真实、准确、完整，并妥善保管账号、验证码及登录设备。因用户保管不善导致的损失，由用户自行承担。',
        '用户不得将会员权益转让、出租、出借、售卖或用于任何违法违规场景，不得通过爬虫、逆向工程、批量注册、恶意请求等方式破坏服务稳定性。',
      ],
    },
    {
      title: '三、付费、续费与退款',
      paragraphs: [
        '会员服务为虚拟软件服务，用户在确认购买前应仔细核对服务类型、期限、价格及适用平台。支付完成后，会员权益按照页面说明生效。',
        '如页面或支付渠道展示自动续费、连续包月、连续包年等服务，用户应在开通前确认续费周期、扣费方式、取消路径及相关规则。用户可按支付平台或客户端提示关闭自动续费。',
        '除法律法规另有规定、页面另有承诺或服务存在重大不可用情形外，已生效的会员服务不支持无理由退款。',
      ],
    },
    {
      title: '四、风险提示',
      paragraphs: [
        '本服务提供的数据、模型、图表、策略回测和模拟结果仅供学习研究和辅助分析使用。市场存在不确定性，历史表现不代表未来结果，用户应独立判断并自行承担使用风险。',
        '海盈平科技不参与任何证券、期货、基金、外汇、数字资产等金融产品交易，不代客理财，不承诺收益，不承担用户基于工具输出作出决策产生的投资损失。',
      ],
    },
    {
      title: '五、服务变更与终止',
      paragraphs: [
        '为提升服务体验、保障系统安全或满足合规要求，公司可能对产品功能、服务内容、会员权益、页面展示及技术方案进行调整，并在合理范围内通过页面公告、站内通知或其他方式提示。',
        '如用户违反本协议或法律法规，公司有权限制、暂停或终止相关账号的部分或全部服务，并保留依法追究责任的权利。',
      ],
    },
    {
      title: '六、联系我们',
      paragraphs: [
        '如您对会员服务、订单、续费或本协议有任何疑问，可通过客服中心或 support@haiyingping.com 联系我们。',
      ],
    },
  ],
};

const privacyPolicy: LegalContent = {
  title: '隐私政策',
  subtitle: '我们重视您的个人信息和数据安全，并尽力以清晰、必要、最小化的方式处理信息。',
  updatedAt: '2026年9月22日',
  icon: ShieldCheck,
  sections: [
    {
      title: '一、适用范围',
      paragraphs: [
        '本政策适用于北京海盈平科技有限公司通过官网、客户端及相关服务向用户提供的软件工具服务。不同产品或功能如另有单独隐私说明，以对应说明为准。',
      ],
    },
    {
      title: '二、我们可能收集的信息',
      paragraphs: [
        '为完成账号注册、登录、会员订阅、客户支持、产品安全和服务改进，我们可能收集您主动提交的账号信息、联系方式、订单信息、客服沟通信息及必要的设备、日志和网络状态信息。',
        '当您使用数据整理、量化分析、策略模拟等功能时，您导入或生成的数据主要用于完成您请求的处理、展示、保存、同步或导出操作。我们不会将您的个人数据用于与服务无关的金融交易、资管或理财活动。',
      ],
    },
    {
      title: '三、信息使用目的',
      paragraphs: [
        '我们使用相关信息用于提供和维护产品功能、验证账号安全、处理订单与售后请求、排查故障、优化产品体验、履行法律法规要求以及保护用户、公司和公众的合法权益。',
        '未经您的授权，我们不会将您的个人信息用于超出本政策说明范围的用途；如确需变更使用目的，我们会依法取得您的同意或提供相应告知。',
      ],
    },
    {
      title: '四、共享、转让与公开披露',
      paragraphs: [
        '我们不会出售您的个人信息。为完成支付、云存储、消息通知、数据托管、安全风控或客户服务等必要功能，我们可能与具备相应安全能力的服务提供方共享实现功能所必需的最少信息。',
        '除取得您的单独同意、履行法定义务、响应司法或行政机关依法提出的要求、保护合法权益等情形外，我们不会公开披露您的个人信息。',
      ],
    },
    {
      title: '五、信息安全与保存',
      paragraphs: [
        '我们采用加密传输、权限控制、访问审计、备份恢复等技术和管理措施保护信息安全，并限制员工和合作方访问个人信息的范围。',
        '我们仅在实现服务目的所必需的期限内保存相关信息。超过保存期限后，我们会按照法律法规要求删除或匿名化处理，法律法规另有规定的除外。',
      ],
    },
    {
      title: '六、您的权利',
      paragraphs: [
        '您可以依法查询、更正、复制、删除个人信息，撤回授权同意，注销账号，或对个人信息处理规则进行咨询、投诉。部分请求可能需要您完成身份验证，以保障账号和数据安全。',
      ],
    },
    {
      title: '七、未成年人保护',
      paragraphs: [
        '我们的产品和服务主要面向具备完全民事行为能力的成年人。未成年人使用服务前，应取得监护人同意并在监护人指导下使用。',
      ],
    },
    {
      title: '八、联系我们',
      paragraphs: [
        '如您对本隐私政策或个人信息保护事项有任何疑问，可通过客服中心或 support@haiyingping.com 联系我们。',
      ],
    },
  ],
};

const legalContentMap = {
  support: supportAgreement,
  privacy: privacyPolicy,
};

export default function LegalPage({ type }: { type: keyof typeof legalContentMap }) {
  const content = legalContentMap[type];
  const Icon = content.icon;

  return (
    <main className="pt-[72px]">
      <section className="bg-ocean-gradient py-16 md:py-20">
        <div className="max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Icon className="h-6 w-6 text-[#1E88E5]" />
            </div>
            <h1 className="text-3xl font-bold text-[#0A4F7C] md:text-5xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5A6A7A] md:text-lg">
              {content.subtitle}
            </p>
            <p className="mt-4 text-sm text-[#8A9AAE]">更新日期：{content.updatedAt}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-container section-padding">
          <article className="mx-auto max-w-4xl rounded-2xl bg-white px-5 py-8 shadow-sm sm:px-8 md:px-10 md:py-12">
            <div className="space-y-10">
              {content.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-[#1A2B3C]">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-7 text-[#5A6A7A] md:text-base md:leading-8">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-gray-100 pt-8 text-sm text-[#5A6A7A] sm:flex-row sm:items-center sm:justify-between">
              <span>北京海盈平科技有限公司</span>
              <div className="flex gap-4">
                <Link to="/atom/protocal/v1/support_url" className="text-[#1E88E5] hover:text-[#0A4F7C]">
                  会员协议
                </Link>
                <Link to="/atom/protocal/v1/privacy_url" className="text-[#1E88E5] hover:text-[#0A4F7C]">
                  隐私政策
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
