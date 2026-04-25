import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-32 pb-16 px-6 bg-[#0a0a0c] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black mb-8 tracking-tighter flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-black text-xl">H</span>
              </div>
              HOA LONG<span className="text-emerald-400 italic ml-1">AG</span>
            </h2>
            <p className="max-w-md text-gray-400 font-medium text-lg mb-12 italic">
              Nâng tầm giá trị bất động sản qua công nghệ hình ảnh VR360 và Drone 4K. Tọa lạc tại Hoa Long, xã Kim Long, TP.HCM.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:bg-emerald-400/20 hover:text-emerald-400 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Dịch Vụ</h4>
            <ul className="space-y-6 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              <li><a href="#" className="hover:text-white transition-colors">Dự Án Đã Làm</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Công Nghệ VR360</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Đối Tác Chiến Lược</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quy Trình Thực Hiện</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-10">Bản Tin</h4>
            <p className="text-gray-500 mb-8 text-sm font-medium">Đăng ký nhận báo giá và xu hướng marketing BĐS mới nhất.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-6 pr-14 focus:outline-none focus:border-emerald-400/50 transition-colors text-sm"
              />
              <button className="absolute right-2 top-2 p-2 bg-emerald-500 text-black rounded-lg">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <p>© 2026 HOA LONG AG • BẢN QUYỀN THUỘC VỀ CHÚNG TÔI</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">CHÍNH SÁCH</a>
            <a href="#" className="hover:text-white transition-colors">BẢO MẬT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
