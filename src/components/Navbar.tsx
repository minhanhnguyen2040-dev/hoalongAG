import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onRegister: () => void;
}

export default function Navbar({ onRegister }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-8 py-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-black text-sm">H</span>
          </div>
          HOA LONG<span className="text-emerald-400 italic ml-1">AG</span>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center text-xs font-semibold uppercase tracking-widest text-white/50">
          <a href="#" className="text-white hover:text-emerald-400 transition-colors">Dự Án</a>
          <a href="#services" className="hover:text-white transition-colors">Dịch Vụ</a>
          <a href="#courses" className="hover:text-white transition-colors">Khóa Học</a>
          <a href="#about" className="hover:text-white transition-colors">Về Chúng Tôi</a>
          <a href="#contact" className="hover:text-white transition-colors">Liên Hệ</a>
          <button 
            onClick={onRegister}
            className="bg-emerald-500 text-black px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20"
          >
            Nhận Tư Vấn
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
          <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-display">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl font-display">Showcase</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-display">About</a>
          <button className="bg-gold text-white px-6 py-4 rounded-xl text-lg font-bold">
            Start a Project
          </button>
        </motion.div>
      )}
    </nav>
  );
}
