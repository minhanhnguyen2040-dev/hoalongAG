import { motion } from 'motion/react';
import { Camera, Smartphone, Globe, PenTool, TrendingUp, Monitor } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Marketing BĐS Thực Chiến",
    desc: "Giải pháp toàn diện cho môi giới & chủ đầu tư: Xây dựng thương hiệu cá nhân, nội dung thu hút và hệ thống marketing tự động.",
    details: ["Thương hiệu cá nhân", "Chiến lược nội dung", "SEO Google BĐS", "Marketing tự động"],
    color: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Dịch Vụ VR360 Chuyên Nghiệp",
    desc: "Số hóa không gian thực tế giúp khách hàng trải nghiệm từ xa, tăng 80% khả năng chốt sale thông qua tour ảo 360.",
    details: ["Dự án & Nhà đất", "Resort & Homestay", "Showroom & Nhà hàng", "Nhà máy & Profile DN"],
    color: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Video Marketing & Ads",
    desc: "Sản xuất video chuẩn thuật toán TikTok, YouTube, Facebook. Flycam và review dự án chuyên nghiệp.",
    details: ["Review dự án", "Flycam giới thiệu", "Quảng cáo doanh nghiệp", "Tối ưu mạng xã hội"],
    color: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Thiết Kế Website BĐS SEO",
    desc: "Website tích hợp tour ảo VR360, tối ưu tốc độ và chuyển đổi giúp tăng thứ hạng Google bền vững.",
    details: ["Tích hợp VR360", "Chuẩn chuyển đổi", "Tối ưu tốc độ", "Quản trị dễ dàng"],
    color: "bg-indigo-500/10",
    border: "border-indigo-500/20"
  }
];

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400 mb-4">Giải Pháp Toàn Diện</h2>
            <p className="text-4xl md:text-7xl font-black leading-tight tracking-tight uppercase">
              MARKETING BẤT ĐỘNG SẢN <span className="text-white/40 italic">THỰC CHIẾN</span>
            </p>
          </div>
          <p className="max-w-sm text-gray-400 font-medium pb-4">
            Hoa Long AG cung cấp hệ sinh thái giải pháp số giúp bứt phá doanh số cho cá nhân môi giới và doanh nghiệp BĐS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl glass-card hover:bg-white/10 transition-all duration-500 group cursor-default relative overflow-hidden flex flex-col h-full`}
            >
              <div className="mb-8 text-emerald-400 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight leading-tight">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-xs mb-8 flex-grow">
                {service.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/60 flex items-center gap-2">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelectService(service.title)}
                className="mt-4 w-full py-4 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
              >
                Nhận Tư Vấn
              </button>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
