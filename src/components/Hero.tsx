import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 bg-[#0a0a0c]">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-orange-500/5 rounded-full blur-[140px] z-0"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] z-0"></div>

      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541818224388-7505a7698504?auto=format&fit=crop&q=80&w=2070"
          alt="Aerial Real Estate"
          className="w-full h-full object-cover opacity-10 scale-105 select-none pointer-events-none grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-8">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[14rem] font-black tracking-[-0.06em] leading-[0.8] mb-4 select-none drop-shadow-2xl"
            >
              HOA LONG <span className="text-emerald-gradient italic">AG</span>
            </motion.h1>
            <div className="absolute inset-x-0 -bottom-10 h-32 bg-emerald-500/10 blur-[80px] rounded-full z-[-1] opacity-50" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-px w-24 bg-emerald-500/30" />
            <p className="text-xs md:text-xl font-light text-white/40 uppercase tracking-[0.5em] md:tracking-[0.8em] text-center ml-[0.8em]">
              ĐỐI TÁC TRUYỀN THÔNG <span className="text-emerald-500 font-bold">CAO CẤP</span>
            </p>
            <div className="h-px w-24 bg-emerald-500/30" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute right-10 bottom-20 hidden lg:block">
        <p className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
          Hệ Thống Phủ Toàn Quốc — Hoa Long AG
        </p>
      </div>
    </section>
  );
}
