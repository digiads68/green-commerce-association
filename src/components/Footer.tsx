import { Leaf, Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Twitter, ArrowRight } from 'lucide-react'

const footerLinks = {
  'Về Chúng Tôi': [
    { name: 'Sứ Mệnh & Tầm Nhìn', href: '#mission' },
    { name: 'Đội Ngũ Lãnh Đạo', href: '#' },
    { name: 'Lịch Sử Hình Thành', href: '#' },
    { name: 'Báo Cáo Thường Niên', href: '#' },
    { name: 'Tuyển Dụng', href: '#' },
  ],
  'Giải Pháp': [
    { name: 'Chứng Nhận Xanh', href: '#activities' },
    { name: 'TMĐT Bền Vững', href: '#activities' },
    { name: 'Mạng Lưới KOC', href: '#activities' },
    { name: 'Tư Vấn ESG', href: '#' },
    { name: 'Đào Tạo', href: '#' },
  ],
  'Tài Nguyên': [
    { name: 'Blog & Tin Tức', href: '#news' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Báo Cáo ESG', href: '#' },
    { name: 'Tiêu Chuẩn Xanh', href: '#' },
    { name: 'Hỏi Đáp', href: '#' },
  ],
}

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl" />

      <div className="relative section-padding">
        {/* Newsletter Banner */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">Nhận Bản Tin ESG Hàng Tuần</h3>
              <p className="text-slate-400">Cập nhật xu hướng xanh, chính sách ESG và case study mới nhất.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
              />
              <button className="px-5 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl font-semibold hover:from-primary-400 hover:to-secondary-400 transition-all flex items-center gap-2 whitespace-nowrap">
                Đăng Ký
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="block text-lg font-bold leading-tight">HỘI BẢO VỆ</span>
                <span className="block text-sm text-primary-400 font-medium">NGƯỜI TIÊU DÙNG</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Kiến tạo nền tảng thương mại điện tử xanh bền vững, kết nối doanh nghiệp ESG 
              với người tiêu dùng thông thái vì tương lai tốt đẹp hơn.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm">1800 6868 (Miễn phí)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm">contact@greencommerce.vn</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">72 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary-500/80 transition-all hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-0.5 bg-primary-400 transition-all group-hover:w-3 rounded-full" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2024 Hội Bảo Vệ Người Tiêu Dùng - Thương Mại Điện Tử Xanh. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-6">
            {['Chính Sách Bảo Mật', 'Điều Khoản Sử Dụng', 'Cookie'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
