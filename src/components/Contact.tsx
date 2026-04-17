import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Hotline',
    value: '1800 6868',
    sub: 'Miễn phí, 8:00 - 18:00 thứ 2-6'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@greencommerce.vn',
    sub: 'Phản hồi trong vòng 24 giờ'
  },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: '72 Lê Thánh Tôn, Q.1, TP.HCM',
    sub: 'Văn phòng chính'
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.')
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-primary-700 text-sm font-semibold mb-4 shadow-sm border border-slate-100">
            Liên Hệ Với Chúng Tôi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Bắt Đầu Hành Trình <span className="text-gradient">Xanh</span> Cùng Chúng Tôi
          </h2>
          <p className="text-lg text-slate-600">
            Đội ngũ chuyên gia ESG của chúng tôi sẵn sàng tư vấn và đồng hành cùng doanh nghiệp của bạn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex gap-4 bg-white rounded-2xl p-6 shadow-md shadow-slate-200/50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">{info.label}</p>
                  <p className="font-bold text-slate-900">{info.value}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{info.sub}</p>
                </div>
              </div>
            ))}

            {/* Quick Chat CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-6 text-white">
              <MessageSquare className="w-8 h-8 mb-3 text-white/80" />
              <h4 className="font-bold text-lg mb-2">Chat Trực Tiếp</h4>
              <p className="text-white/80 text-sm mb-4">
                Đặt câu hỏi ngay, chuyên gia của chúng tôi sẽ phản hồi trong vài phút.
              </p>
              <button className="px-4 py-2 bg-white text-primary-700 font-semibold rounded-xl text-sm hover:bg-white/90 transition-colors">
                Bắt Đầu Chat →
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Gửi Tin Nhắn</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Họ và Tên *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tên Doanh Nghiệp</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="Công ty TNHH..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nội Dung *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                  placeholder="Mô tả nhu cầu của bạn..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi Tin Nhắn
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
