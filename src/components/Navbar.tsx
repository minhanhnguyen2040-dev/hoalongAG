import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onRegister: () => void;
}

export default function Navbar({ onRegister }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center glass rounded-2xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer"
        >
          <div className="relative flex items-center">
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
            <span className="relative z-10">HOA LONG<span className="text-emerald-400 italic ml-1">AG</span></span>
          </div>
        </motion.div>

        <div className="hidden md:flex gap-10 items-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          <a href="#" className="text-white hover:text-emerald-400 transition-colors">Dự Án</a>
          <a href="#services" className="hover:text-emerald-400 transition-colors">Dịch Vụ</a>
          <a href="#courses" className="hover:text-emerald-400 transition-colors">Khóa Học</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">Về Chúng Tôi</a>
          <div className="w-px h-4 bg-white/10" />
          <button 
            onClick={onRegister}
            className="group relative px-6 py-2.5 overflow-hidden rounded-xl bg-white/5 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500 transition-all duration-500"
          >
            <span className="relative z-10">Liên Hệ Ngay</span>
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center text-black font-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 underline decoration-2 decoration-black">ZALO: 0798.876.876</span>
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 glass rounded-3xl p-8 flex flex-col gap-6 md:hidden"
        >
          <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-display">Dịch Vụ</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl font-display">Dự Án Tiêu Biểu</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-display">Về Chúng Tôi</a>
          <button 
            onClick={() => {
              onRegister();
              setIsOpen(false);
            }}
            className="bg-emerald-500 text-black px-6 py-4 rounded-xl text-lg font-black uppercase tracking-widest"
          >
            Liên Hệ Ngay
          </button>
        </motion.div>
      )}
    </nav>
  );
}
