import { motion } from 'motion/react';
import { Check, Zap, Globe, Shield, Phone } from 'lucide-react';

const packages = [
  {
    title: "VR360 CƠ BẢN",
    subtitle: "KHỞI ĐẦU NHANH CHÓNG",
    price: "680.000",
    features: [
      "Chụp 1 ảnh VR360 tiêu chuẩn",
      "Gắn vị trí cơ bản",
      "Cân chỉnh ánh sáng",
      "Tạo link xem online",
      "Hỗ trợ xem trên mobile"
    ],
    highlight: false,
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "GÓI VR360 CHUYÊN NGHIỆP",
    subtitle: "PHÙ HỢP MÔI GIỚI BÁN HÀNG",
    price: "1.500.000 – 3.000.000",
    features: [
      "Chụp 1 ảnh VR360 chất lượng cao",
      "Highlight đường vào lô đất",
      "Khoanh vị trí & Ghi diện tích",
      "Chèn logo thương hiệu cá nhân",
      "Cân chỉnh màu sắc rõ nét",
      "Upload hệ thống & Tạo link online"
    ],
    highlight: false,
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "DỊCH VỤ VR360 + FLYCAM",
    subtitle: "TĂNG ĐỘ TIN TƯỞNG TUYỆT ĐỐI",
    price: "3.500.000 – 5.000.000",
    features: [
      "1 ảnh VR360 (chỉnh sửa đầy đủ)",
      "Quay flycam khu vực xung quanh",
      "Edit video ngắn 1–2 phút",
      "Nhạc nền chuyên nghiệp",
      "Xuất file chất lượng HD"
    ],
    highlight: true,
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "VR360 + WEBSITE RIÊNG",
    subtitle: "XÂY DỰNG THƯƠNG HIỆU LÂU DÀI",
    price: "4.500.000 – 6.000.000",
    features: [
      "Ảnh VR360 chuyên nghiệp",
      "Video flycam toàn cảnh",
      "Tạo Landing Page riêng cho lô đất",
      "Gắn logo thương hiệu riêng",
      "Tạo link định danh gửi khách"
    ],
    highlight: false,
    icon: <Globe className="w-6 h-6" />
  }
];

export default function Pricing({ onSelection }: { onSelection: (pkg: string) => void }) {
  return (
    <section id="pricing" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-[0.3em]">Bảng Giá Dịch Vụ</h2>
          <p className="text-4xl md:text-6xl font-black uppercase tracking-tight">ĐẦU TƯ <span className="text-white/40 italic">ĐÚNG TẦM</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${pkg.highlight ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/5 bg-white/[0.02]'} flex flex-col`}
            >
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pkg.highlight ? 'bg-emerald-500 text-black' : 'bg-white/5 text-emerald-400'}`}>
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{pkg.title}</h3>
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{pkg.subtitle}</p>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Giá Dự Kiến</p>
                <p className="text-3xl font-black text-white">{pkg.price} <span className="text-sm font-medium text-white/40">VNĐ</span></p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400 font-medium">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onSelection(pkg.title)}
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${pkg.highlight ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                Đăng Ký Tư Vấn
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="flex items-center gap-4 bg-emerald-500/10 px-6 py-4 rounded-2xl border border-emerald-500/20">
            <Phone className="text-emerald-400 w-5 h-5" />
            <p className="text-lg font-black text-white tracking-widest">HOTLINE / ZALO: 0798.876.876</p>
          </div>
        </div>
      </div>
    </section>
  );
}
