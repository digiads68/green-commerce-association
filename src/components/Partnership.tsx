import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Globe, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react'

const partnerTypes = [
  {
    icon: Building2,
    title: 'Doanh Nghiệp ESG',
    description: 'Tham gia cùng 500+ doanh nghiệp tiên phong trong hành trình chuyển đổi xanh.',
    benefits: ['Chứng nhận ESG quốc tế', 'Tiếp cận 1M+ người tiêu dùng xanh', 'Hỗ trợ marketing bền vững', 'Báo cáo ESG chuyên sâu'],
    cta: 'Đăng Ký Doanh Nghiệp',
    color: 'from-primary-500 to-emerald-600',
    popular: false
  },
  {
    icon: Globe,
    title: 'Đối Tác Chiến Lược',
    description: 'Hợp tác xây dựng hệ sinh thái TMĐT xanh quốc gia và khu vực Đông Nam Á.',
    benefits: ['Co-branding & PR chiến lược', 'Nghiên cứu thị trường ESG', 'Sự kiện & Hội nghị chung', 'Chia sẻ dữ liệu & insights'],
    cta: 'Trở Thành Đối Tác',
    color: 'from-secondary-500 to-blue-600',
    popular: true
  },
  {
    icon: Handshake,
    title: 'Tổ Chức & Hiệp Hội',
    description: 'Kết nối với mạng lưới hiệp hội doanh nghiệp, tổ chức phi lợi nhuận xanh.',
    benefits: ['Mạng lưới kết nối rộng', 'Chương trình đào tạo ESG', 'Vận động chính sách xanh', 'Công nhận và trao thưởng'],
    cta: 'Liên Hệ Ngay',
    color: 'from-violet-500 to-purple-600',
    popular: false
  }
]

const partners = [
  { name: 'VCCI', logo: '🏛️' },
  { name: 'GreenViet', logo: '🌱' },
  { name: 'UNDP Vietnam', logo: '🌐' },
  { name: 'WWF', logo: '🐼' },
  { name: 'Vingroup', logo: '🏢' },
  { name: 'Masan', logo: '🏭' },
  { name: 'TikTok Shop', logo: '📱' },
  { name: 'Shopee', logo: '🛒' },
]

export default function Partnership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="partnership" className="relative py-24 bg-white overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-60 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4 border border-primary-100">
            Cùng Nhau Xây Dựng
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Hợp Tác & <span className="text-gradient">Đối Tác</span>
          </h2>
          <p className="text-lg text-slate-600">
            Chúng tôi đang tìm kiếm các đối tác đồng hành trong hành trình 
            xây dựng nền thương mại điện tử xanh bền vững.
          </p>
        </motion.div>

        {/* Partner Type Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                type.popular 
                  ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-secondary-50 shadow-xl' 
                  : 'border-slate-100 bg-white shadow-lg hover:border-primary-200 hover:shadow-xl'
              }`}
            >
              {type.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold rounded-full shadow-lg">
                    Phổ Biến Nhất
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 shadow-lg`}>
                <type.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{type.description}</p>

              <div className="space-y-2.5 mb-8">
                {type.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                type.popular
                  ? `bg-gradient-to-r ${type.color} text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5`
                  : 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5'
              }`}>
                {type.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
            Đối tác tin cậy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all cursor-pointer"
              >
                <span className="text-2xl">{partner.logo}</span>
                <span className="font-semibold text-slate-700 text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
