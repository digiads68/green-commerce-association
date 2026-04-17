import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Award, 
  ShoppingBag, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Zap,
  BarChart3
} from 'lucide-react'

const solutions = [
  {
    id: 1,
    icon: Award,
    title: 'Chứng Nhận Hàng Hóa Xanh',
    subtitle: 'Green Certification',
    description: 'Hệ thống đánh giá và cấp chứng nhận sản phẩm xanh theo tiêu chuẩn quốc tế ESG, giúp doanh nghiệp nâng cao uy tín và tiếp cận người tiêu dùng xanh.',
    features: [
      'Đánh giá 150+ tiêu chí ESG',
      'Chứng nhận 3 cấp độ: Bạc - Vàng - Kim Cương',
      'QR Code truy xuất nguồn gốc',
      'Báo cáo tác động môi trường'
    ],
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    stats: [
      { label: 'Tiêu chí đánh giá', value: '150+' },
      { label: 'Doanh nghiệp chứng nhận', value: '500+' },
      { label: 'Tỷ lệ hài lòng', value: '98%' },
    ]
  },
  {
    id: 2,
    icon: ShoppingBag,
    title: 'Giải Pháp Bán Hàng Bền Vững',
    subtitle: 'Green E-commerce',
    description: 'Nền tảng thương mại điện tử chuyên biệt cho sản phẩm xanh, tích hợp công cụ marketing bền vững, phân tích dữ liệu người tiêu dùng xanh.',
    features: [
      'Gian hàng xanh chuyên biệt',
      'Công cụ Marketing ESG tích hợp',
      'Phân tích hành vi người tiêu dùng xanh',
      'Hệ thống tích điểm carbon credits'
    ],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    stats: [
      { label: 'Sản phẩm xanh', value: '10K+' },
      { label: 'Đơn hàng/tháng', value: '50K+' },
      { label: 'Tăng trưởng YoY', value: '200%' },
    ]
  },
  {
    id: 3,
    icon: Users,
    title: 'Kết Nối KOC & Cộng Đồng Xanh',
    subtitle: 'Green Influencer Network',
    description: 'Mạng lưới Key Opinion Consumers (KOC) chuyên về lối sống xanh, tạo nội dung bền vững, đánh giá sản phẩm xanh chân thực, lan tỏa giá trị ESG.',
    features: [
      'Mạng lưới 10,000+ KOC xanh',
      'Nền tảng tạo nội dung bền vững',
      'Hệ thống đánh giá & review xanh',
      'Chiến dịch viral ESG cộng đồng'
    ],
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50',
    stats: [
      { label: 'KOC xanh', value: '10K+' },
      { label: 'Lượt tiếp cận', value: '5M+' },
      { label: 'Chiến dịch', value: '300+' },
    ]
  }
]

export default function Activities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(1)

  const activeSolution = solutions.find(s => s.id === activeTab)!

  return (
    <section id="activities" className="relative py-24 bg-slate-50 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-primary-100/50 to-transparent rounded-full blur-3xl" />

      <div className="relative section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary-700 text-sm font-semibold mb-4 shadow-sm border border-slate-100">
            Giải Pháp Toàn Diện
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Các Hoạt Động <span className="text-gradient">Chủ Lực</span>
          </h2>
          <p className="text-lg text-slate-600">
            Chúng tôi cung cấp hệ sinh thái giải pháp toàn diện giúp doanh nghiệp 
            chuyển đổi xanh và kết nối với người tiêu dùng bền vững.
          </p>
        </motion.div>

        {/* Solution Tabs */}
        <div className="max-w-7xl mx-auto">
          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center gap-4 mb-12"
          >
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`relative px-6 py-4 rounded-2xl transition-all duration-300 flex items-center gap-3 ${
                  activeTab === solution.id 
                    ? 'bg-white shadow-xl scale-105 ring-2 ring-primary-500/20' 
                    : 'bg-white/60 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900 text-sm">{solution.title}</div>
                  <div className="text-xs text-slate-500">{solution.subtitle}</div>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Active Solution Detail */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50"
          >
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeSolution.bgColor} mb-6`}>
                <activeSolution.icon className="w-4 h-4 text-slate-700" />
                <span className="text-sm font-semibold text-slate-700">{activeSolution.subtitle}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {activeSolution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {activeSolution.description}
              </p>

              <div className="space-y-3 mb-8">
                {activeSolution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`px-6 py-3 bg-gradient-to-r ${activeSolution.color} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center gap-2`}>
                Tìm Hiểu Thêm
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats Panel */}
            <div className="grid grid-cols-1 gap-4">
              {activeSolution.stats.map((stat, idx) => (
                <div key={idx} className={`${activeSolution.bgColor} rounded-2xl p-6 flex items-center justify-between`}>
                  <span className="text-slate-600 font-medium">{stat.label}</span>
                  <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                </div>
              ))}
              
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-accent-400" />
                  <span className="font-semibold">Tích hợp AI & Data</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Hệ thống phân tích dữ liệu thời gian thực, tối ưu hóa chiến lược ESG.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
