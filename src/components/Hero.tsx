import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 bg-[#0a0a0c]">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[140px] z-0"></div>

      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541818224388-7505a7698504?auto=format&fit=crop&q=80&w=2070"
          alt="Aerial Real Estate"
          className="w-full h-full object-cover opacity-20 scale-105 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            HOA LONG AG • DIGITAL MARKETING
          </span>
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.9] tracking-tighter mb-8 italic">
            MARKETING BĐS <br />
            <span className="text-emerald-gradient">THỰC CHIẾN.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-12">
            Giải pháp marketing bất động sản toàn diện dành cho môi giới, sàn giao dịch và chủ đầu tư bứt phá doanh số.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              onClick={onExplore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 bg-emerald-500 text-black px-10 py-5 rounded-xl font-bold text-lg transition-all hover:bg-emerald-400 shadow-lg shadow-emerald-500/20"
            >
              Nhận Tư Vấn Ngay
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            <a href="#courses" className="bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-xl text-white font-bold transition-all backdrop-blur-md">
              Xem Khóa Học
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <p className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
          Based in Vietnam — Serving Globally
        </p>
      </div>
    </section>
  );
}
