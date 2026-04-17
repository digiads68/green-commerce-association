import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const news = [
  {
    category: 'Sự kiện',
    categoryColor: 'bg-primary-100 text-primary-700',
    date: '15 Tháng 12, 2024',
    readTime: '5 phút đọc',
    title: 'Hội nghị Thương mại Điện tử Xanh 2024: Kết nối 500 doanh nghiệp ESG',
    excerpt: 'Sự kiện thường niên quy tụ hơn 500 doanh nghiệp, chuyên gia ESG và người tiêu dùng xanh, cùng định hình tương lai TMĐT bền vững Việt Nam.',
    image: '🌿',
    featured: true
  },
  {
    category: 'Chính sách',
    categoryColor: 'bg-secondary-100 text-secondary-700',
    date: '10 Tháng 12, 2024',
    readTime: '3 phút đọc',
    title: 'Bộ Công Thương ban hành khung pháp lý mới cho sản phẩm xanh trên TMĐT',
    excerpt: 'Quy định mới tạo hành lang pháp lý rõ ràng, thúc đẩy minh bạch hóa thông tin ESG trên các nền tảng TMĐT.',
    image: '📋',
    featured: false
  },
  {
    category: 'Nghiên cứu',
    categoryColor: 'bg-accent-100 text-accent-700',
    date: '5 Tháng 12, 2024',
    readTime: '8 phút đọc',
    title: 'Báo cáo: 70% người tiêu dùng Gen Z sẵn sàng trả thêm cho sản phẩm xanh',
    excerpt: 'Khảo sát 10,000 người tiêu dùng Việt Nam cho thấy xu hướng tiêu dùng xanh tăng mạnh, đặc biệt ở nhóm 18-35 tuổi.',
    image: '📊',
    featured: false
  },
  {
    category: 'Đối tác',
    categoryColor: 'bg-violet-100 text-violet-700',
    date: '1 Tháng 12, 2024',
    readTime: '4 phút đọc',
    title: 'Ký kết MOU với 50 tập đoàn đa quốc gia: Mở rộng mạng lưới ESG toàn cầu',
    excerpt: 'Thỏa thuận hợp tác chiến lược với các tập đoàn hàng đầu châu Á, đặt nền móng cho hệ sinh thái TMĐT xanh khu vực.',
    image: '🤝',
    featured: false
  }
]

export default function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="news" className="relative py-24 bg-slate-50 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="relative section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary-700 text-sm font-semibold mb-4 shadow-sm border border-slate-100">
              Cập Nhật Mới Nhất
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Tin Tức & <span className="text-gradient">Sự Kiện</span>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-primary-400 hover:text-primary-600 transition-all whitespace-nowrap">
            Tất Cả Tin Tức
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group lg:row-span-2 bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-slate-100"
          >
            <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-8xl">
              {news[0].image}
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${news[0].categoryColor}`}>
                  {news[0].category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3 h-3" />
                  {news[0].date}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3 h-3" />
                  {news[0].readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-primary-700 transition-colors">
                {news[0].title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">{news[0].excerpt}</p>
              <button className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Đọc Thêm <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Other Articles */}
          {news.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group flex gap-4 bg-white rounded-2xl p-6 shadow-md shadow-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-slate-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl flex-shrink-0">
                {item.image}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">{item.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
