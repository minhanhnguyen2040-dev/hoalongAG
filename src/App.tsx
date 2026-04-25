/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrainingCourses from './components/TrainingCourses';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import Pricing from './components/Pricing';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openModal = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-[#0a0a0c]">
      {/* Global Background Glows */}
      <div className="fixed top-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>
      <div className="fixed bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[140px] z-0 pointer-events-none"></div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[60] origin-left shadow-lg shadow-emerald-500/50" 
        style={{ scaleX }}
      />

      <Navbar onRegister={() => openModal()} />
      <Hero onExplore={() => openModal('Tư Vấn Tổng Thể')} />
      <Services onSelectService={openModal} />
      <TrainingCourses onRegister={openModal} />
      
      <ProjectShowcase />
      <Pricing onSelection={openModal} />

      {/* Philosophy Section */}
      <section id="about" className="py-32 px-6 bg-zinc-950/20 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">Học Viện Thực Chiến</h2>
              <p className="text-4xl md:text-5xl font-black leading-[1.1] uppercase tracking-tight">
                ĐÀO TẠO <br />
                <span className="text-white/40 italic">MARKETING CHUYÊN SÂU.</span>
              </p>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                Bên cạnh dịch vụ, Hoa Long AG cung cấp các khóa học thực chiến từ xây kênh TikTok, YouTube đến kỹ thuật VR360 cho môi giới và doanh nghiệp.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => openModal('Liên Hệ Khai Giảng')}
                  className="px-10 py-4 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-3 uppercase tracking-widest text-xs"
                >
                  Xem Lịch Khai Giảng
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square rounded-[3rem] overflow-hidden p-3 bg-white/5 backdrop-blur-md border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=2070" 
                  alt="Văn phòng hiện đại" 
                  className="w-full h-full object-cover rounded-[2.5rem] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass rounded-3xl p-10 hidden md:block max-w-[280px] shadow-2xl">
                <p className="font-black text-2xl mb-2 tracking-tight">TẦM NHÌN SỐ.</p>
                <p className="text-xs font-bold leading-relaxed opacity-60 italic tracking-widest uppercase">
                  "Định nghĩa lại truyền thông qua lăng kính công nghệ tương lai."
                </p>
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 blur-[80px] -z-10 rounded-full group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection onSubscribe={() => openModal('Đăng Ký Nhận Tin')} />
      <Footer />

      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceTitle={selectedService}
      />
    </main>
  );
}

