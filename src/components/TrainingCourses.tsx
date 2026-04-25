import { motion } from 'motion/react';
import { Smartphone, Monitor, Award, Globe, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    id: 1,
    icon: <Smartphone className="w-8 h-8" />,
    title: "KHÓA VIDEO BĐS TRÊN ĐIỆN THOẠI",
    subtitle: "(CapCut Mobile + Bản đồ + AI Voice)",
    description: "Phù hợp cho môi giới mới vào nghề, cần đăng video mỗi ngày lên TikTok, Facebook mà không cần máy tính mạnh.",
    features: [
      "Đánh dấu chính xác vị trí lô đất",
      "Vẽ tuyến đường & hiển thị tiện ích",
      "Tạo hiệu ứng di chuyển bản đồ mượt",
      "Ghép flycam đúng vị trí thực tế",
      "Tạo giọng đọc AI chuyên nghiệp",
      "Xuất video chuẩn Reels/TikTok"
    ],
    price: "399.000 VNĐ",
    tag: "Phổ thông",
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: 2,
    icon: <Monitor className="w-8 h-8" />,
    title: "KHÓA VIDEO BĐS CHUYÊN NGHIỆP PC",
    subtitle: "(CapCut PC + Google Earth Pro)",
    description: "Dành cho những ai làm sản phẩm giá trị cao, muốn thể hiện vị trí chính xác 100% và chuẩn hóa quy trình.",
    features: [
      "Tạo video bản đồ tọa độ thực tế",
      "Zoom – bay – tracking vị trí chính xác",
      "Đồng bộ flycam với bản đồ",
      "Tạo lời thoại AI tự nhiên",
      "Xuất video Full HD / 2K sắc nét"
    ],
    price: "599.000 VNĐ",
    tag: "Chuyên nghiệp",
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8" />,
    title: "KHÓA VIDEO DỰ ÁN CAO CẤP",
    subtitle: "(After Effects + GeoLayers 3)",
    description: "Dành cho các dự án quy mô lớn, chủ đầu tư hoặc môi giới muốn xây dựng thương hiệu cá nhân đẳng cấp.",
    features: [
      "Zoom map cinematic chuyên nghiệp",
      "Tạo hiệu ứng bản đồ động theo layer",
      "Vẽ bán kính tiện ích & highlight",
      "Đồng bộ map – flycam – motion đồ họa",
      "Thiết kế intro/outro thương hiệu riêng"
    ],
    price: "799.000 VNĐ",
    tag: "Đẳng cấp",
    color: "from-purple-500/20 to-pink-500/10"
  },
  {
    id: 4,
    icon: <Globe className="w-8 h-8" />,
    title: "KHÓA VR360 & THIẾT KẾ WEBSITE BĐS",
    subtitle: "(Hệ thống bán hàng lâu dài)",
    description: "Xây dựng hệ thống bán hàng tự động, giúp khách xem đất từ xa 24/7 và tăng tỷ lệ chốt sale vượt trội.",
    features: [
      "Xử lý ảnh 360 chuẩn kỹ thuật (PTGui)",
      "Highlight & khoanh vùng lô đất 360",
      "Thiết kế Tour 360 (Pano2VR 7)",
      "Tối ưu trải nghiệm mobile & mobile",
      "Thiết kế Web BĐS tích hợp VR360",
      "Tracking quảng cáo & thu lead"
    ],
    price: "Thỏa thuận",
    tag: "Hệ thống",
    color: "from-gold/20 to-orange-500/10"
  }
];

interface TrainingCoursesProps {
  onRegister: (courseTitle: string) => void;
}

export default function TrainingCourses({ onRegister }: TrainingCoursesProps) {
  return (
    <section id="courses" className="py-32 px-6 bg-zinc-950/30 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[140px] z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">Chương Trình Đào Tạo</h2>
          <p className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight max-w-4xl">
            TỰ LÀM VIDEO – BẢN ĐỒ <br /> 
            <span className="text-white/40 italic">FLYCAM – VR360 – WEBSITE</span>
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center py-8 border-y border-white/5">
            <div className="flex gap-4 items-center">
              <CheckCircle2 className="text-emerald-400" />
              <p className="text-gray-400 text-sm font-medium">Tư vấn và chốt sale từ xa</p>
            </div>
            <div className="flex gap-4 items-center">
              <CheckCircle2 className="text-emerald-400" />
              <p className="text-gray-400 text-sm font-medium">Xây dựng thương hiệu chuyên nghiệp</p>
            </div>
            <div className="flex gap-4 items-center">
              <CheckCircle2 className="text-emerald-400" />
              <p className="text-gray-400 text-sm font-medium">Giảm chi phí thuê ngoài</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl glass-card relative overflow-hidden group hover:border-emerald-400/30 transition-all duration-500`}
            >
              {/* Background gradient hint */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="flex justify-between items-start mb-8">
                <div className="text-emerald-400 p-4 glass rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {course.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 glass rounded-full text-white/40 group-hover:text-emerald-400 transition-colors">
                  {course.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black mb-1 uppercase tracking-tight">{course.title}</h3>
              <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest mb-6">{course.subtitle}</p>
              
              <p className="text-gray-400 leading-relaxed font-light mb-8 text-sm italic border-l-2 border-emerald-400/20 pl-4">
                {course.description}
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Nội dung đào tạo:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                  {course.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs font-bold text-gray-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Học phí ưu đãi</p>
                  <p className="text-2xl font-black text-white">{course.price}</p>
                </div>
                <motion.button 
                  onClick={() => onRegister(course.title)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10"
                >
                  Đăng ký ngay
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 glass rounded-[3rem] border border-emerald-400/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5 z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h4 className="text-2xl font-black uppercase tracking-tight mb-4">Bạn chưa biết chọn khóa nào?</h4>
              <p className="text-gray-400 font-medium leading-relaxed">
                Liên hệ ngay hotline <span className="text-emerald-400">0978.876.876</span> để được tư vấn lộ trình học phù hợp nhất với nhu cầu kinh doanh của bạn.
              </p>
            </div>
            <a 
              href="https://zalo.me/0978876876" 
              className="flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all group"
            >
              Liên hệ qua Zalo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
