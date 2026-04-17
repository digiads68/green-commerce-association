import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

const cases = [
  {
    company: 'Vinamilk',
    logo: '🥛',
    category: 'Thực phẩm & Đồ uống',
    title: 'Chuyển đổi ESG toàn diện, tăng 35% doanh thu kênh xanh',
    description: 'Vinamilk áp dụng chứng nhận xanh cho 80% sản phẩm, triển khai packaging tái chế và đạt chứng nhận Kim Cương sau 6 tháng.',
    results: [
      { metric: '+35%', label: 'Doanh thu kênh xanh' },
      { metric: '80%', label: 'Sản phẩm có chứng nhận' },
      { metric: '2M+', label: 'Người tiêu dùng xanh tiếp cận' },
    ],
    tag: 'Kim Cương',
    color: 'from-amber-400 to-yellow-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700'
  },
  {
    company: 'Phúc Long',
    logo: '🍵',
    category: 'F&B - Chuỗi bán lẻ',
    title: 'Mạng lưới 500 KOC xanh lan tỏa thông điệp bền vững',
    description: 'Phúc Long xây dựng cộng đồng KOC xanh chuyên biệt, tạo 2,000+ nội dung ESG viral, đạt 10 triệu lượt tương tác organic.',
    results: [
      { metric: '500+', label: 'KOC xanh đối tác' },
      { metric: '10M+', label: 'Lượt tương tác organic' },
      { metric: '+45%', label: 'Brand awareness' },
    ],
    tag: 'Vàng',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700'
  },
  {
    company: 'The CoffeHouse',
    logo: '☕',
    category: 'Chuỗi F&B',
    title: 'Carbon neutral 2025 - Hành trình xanh hóa chuỗi 200 cửa hàng',
    description: 'The Coffee House cam kết carbon neutral, chuyển đổi 100% bao bì tái chế, và xây dựng chuỗi cung ứng bền vững từ farm đến tay người tiêu dùng.',
    results: [
      { metric: '-60%', label: 'Carbon footprint' },
      { metric: '100%', label: 'Bao bì tái chế' },
      { metric: '200', label: 'Cửa hàng xanh' },
    ],
    tag: 'Bạc',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700'
  }
]

export default function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cases" className="relative py-24 bg-white overflow-hidden" ref={ref}>
      <div className="absolute top-40 left-0 w-80 h-80 bg-accent-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-4">
            Câu Chuyện Thành Công
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Case Study <span className="text-gradient">Điển Hình</span>
          </h2>
          <p className="text-lg text-slate-600">
            Những doanh nghiệp đã thành công chuyển đổi xanh và đạt kết quả ấn tượng 
            cùng hệ sinh thái của chúng tôi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl">
                      {item.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.company}</h3>
                      <p className="text-sm text-slate-500">{item.category}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.bgColor} ${item.textColor}`}>
                    {item.tag}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Results */}
              <div className="px-8 pb-6">
                <div className="grid grid-cols-3 gap-3">
                  {item.results.map((result, idx) => (
                    <div key={idx} className={`${item.bgColor} rounded-xl p-3 text-center`}>
                      <div className={`text-lg font-bold ${item.textColor}`}>{result.metric}</div>
                      <div className="text-xs text-slate-600 leading-tight mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-5 border-t border-slate-100">
                <button className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/btn">
                  Đọc Case Study Đầy Đủ
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-primary-400 hover:text-primary-600 transition-all">
            Xem Tất Cả Case Study
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
