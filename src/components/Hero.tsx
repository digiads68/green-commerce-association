import { motion } from 'framer-motion'
import { ArrowRight, Play, Leaf, Shield, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary-200/30 via-secondary-200/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-200/30 via-primary-200/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] w-16 h-16 bg-white rounded-2xl shadow-xl items-center justify-center hidden lg:flex"
      >
        <Leaf className="w-8 h-8 text-primary-500" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 right-[10%] w-20 h-20 bg-white rounded-2xl shadow-xl items-center justify-center hidden lg:flex"
      >
        <Shield className="w-10 h-10 text-secondary-500" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-[5%] w-14 h-14 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl shadow-lg items-center justify-center hidden xl:flex"
      >
        <Users className="w-7 h-7 text-white" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-primary-100 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-700">Nền tảng Thương mại Điện tử Xanh</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            Thương Mại Điện Tử{' '}
            <span className="text-gradient">Xanh</span>
            <br />
            <span className="text-slate-400">Vì Người Tiêu Dùng</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Hội Bảo Vệ Người Tiêu Dùng kiến tạo nền tảng thương mại điện tử bền vững, 
            kết nối doanh nghiệp ESG với người tiêu dùng thông thái.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              Tham Gia Cùng Chúng Tôi
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-white text-slate-700 font-semibold rounded-full shadow-md border border-slate-200 hover:border-primary-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5 text-primary-500" />
              Xem Video Giới Thiệu
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: 'Doanh nghiệp đối tác' },
              { number: '10K+', label: 'Sản phẩm xanh được chứng nhận' },
              { number: '1M+', label: 'Người tiêu dùng thông thái' },
              { number: '50+', label: 'Tiêu chuẩn ESG' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
