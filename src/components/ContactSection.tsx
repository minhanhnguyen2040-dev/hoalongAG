import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactSectionProps {
  onSubscribe: () => void;
}

export default function ContactSection({ onSubscribe }: ContactSectionProps) {
  return (
    <section id="contact" className="py-32 px-6 bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Subtle Indigo Glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400 mb-6">Liên Hệ</h2>
            <p className="text-4xl md:text-6xl font-black leading-tight uppercase tracking-tight mb-12">
              SẴN SÀNG CHO <span className="text-white/40">TẦM NHÌN SỐ CỦA BẠN?</span>
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/20 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Gửi Email</p>
                  <p className="text-xl font-bold tracking-tight">dinvoo1982@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/20 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Hotline / Zalo</p>
                  <p className="text-xl font-bold tracking-tight">0978.876.876</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/20 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Địa Chỉ</p>
                  <p className="text-xl font-bold tracking-tight">Hoa Long, xã Kim Long, TP. hcm</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center space-y-8 border border-white/5"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tight">Gửi Yêu Cầu Tư Vấn</h3>
              <p className="text-gray-400 font-medium">Bấm vào nút bên dưới để điền thông tin. Hệ thống sẽ tự động lưu và chúng tôi sẽ gọi lại ngay!</p>
            </div>
            
            <button 
              onClick={onSubscribe}
              className="w-full bg-emerald-500 text-black font-black uppercase tracking-[0.2em] py-6 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-emerald-500/20"
            >
              Mở Form Đăng Ký
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="text-left">
                <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2">Mạng Xã Hội</p>
                <div className="flex gap-4">
                  <a href="#" className="text-white/40 hover:text-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest">FB</a>
                  <a href="#" className="text-white/40 hover:text-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest">YT</a>
                  <a href="#" className="text-white/40 hover:text-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest">TT</a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-black uppercase tracking-widest text-white/20 mb-2">Hỗ Trợ 24/7</p>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">0978.876.876</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
