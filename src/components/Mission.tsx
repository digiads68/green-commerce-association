import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Heart, Shield, Globe, TrendingUp, Users, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Bảo Vệ Người Tiêu Dùng',
    description: 'Đảm bảo quyền lợi người tiêu dùng thông qua chứng nhận sản phẩm xanh chất lượng.'
  },
  {
    icon: Globe,
    title: 'Phát Triển Bền Vững',
    description: 'Thúc đẩy mô hình kinh tế tuần hoàn, giảm thiểu tác động môi trường.'
  },
  {
    icon: TrendingUp,
    title: 'ESG & Minh Bạch',
    description: 'Xây dựng tiêu chuẩn ESG, đánh giá và công bố chỉ số bền vững doanh nghiệp.'
  }
]

const features = [
  { icon: Target, title: 'Sứ Mệnh', desc: 'Kiến tạo nền tảng TMĐT xanh bền vững' },
  { icon: Heart, title: 'Giá Trị Cốt Lõi', desc: 'Tin cậy - Minh bạch - Bền vững' },
  { icon: Users, title: 'Cộng Đồng', desc: 'Kết nối 1M+ người tiêu dùng xanh' },
]

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mission" className="relative py-24 bg-white overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-secondary-100/50 rounded-full blur-3xl" />

      <div className="relative section-padding">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4 border border-primary-100">
            Giá Trị Cốt Lõi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Sứ Mệnh <span className="text-gradient">Phát Triển Bền Vững</span> Vì Người Tiêu Dùng
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Chúng tôi cam kết xây dựng hệ sinh thái thương mại điện tử xanh, 
            nơi doanh nghiệp ESG kết nối với người tiêu dùng thông thái.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ESG Commitment Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Cam Kết <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">ESG 2030</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Hướng tới mục tiêu giảm 50% carbon footprint, 100% sản phẩm có chứng nhận xanh, 
                và xây dựng cộng đồng 5 triệu người tiêu dùng bền vững.
              </p>
              <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
                Tìm Hiểu Thêm
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
