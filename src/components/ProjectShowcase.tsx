import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Upload, Camera, Film } from 'lucide-react';

const initialProjects = [
  {
    title: "Toàn Cảnh Dự Án Diamond City",
    category: "Drone DJI 4K • Flycam Cinematic",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070",
    type: 'image'
  },
  {
    title: "Virtual Tour 360 Toàn Khu Resort",
    category: "Panorama 360 • Matterport Pro",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2070",
    type: 'image'
  },
  {
    title: "Quy Hoạch Đô Thị TP.HCM",
    category: "Drone Mapping • Flycam 360",
    image: "https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&q=80&w=2070",
    type: 'image'
  }
];

export default function ProjectShowcase() {
  const [projects, setProjects] = useState(initialProjects);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const isVideo = file.type.startsWith('video/');
      
      const newProjects = [...projects];
      newProjects[index] = {
        ...newProjects[index],
        image: url,
        type: isVideo ? 'video' : 'image'
      };
      setProjects(newProjects);
    }
  };

  const triggerUpload = (index: number) => {
    fileInputRefs.current[index]?.click();
  };

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">Dự Án Tiêu Biểu</h2>
              <p className="text-4xl md:text-6xl font-black uppercase tracking-tight">SIÊU PHẨM HÌNH ẢNH <span className="text-white/40 italic">DRONE & 360</span></p>
            </div>
            <p className="hidden md:block text-[8px] text-white/20 font-black uppercase tracking-widest text-right max-w-[200px]">
              Bạn có thể nhấn vào biểu tượng máy ảnh trên mỗi dự án để thay đổi hình ảnh đại diện bằng file từ máy tính.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-3xl aspect-[4/5] mb-8 relative border border-white/5 bg-white/5">
                {project.type === 'video' ? (
                  <video 
                    src={project.image} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {/* Upload Trigger Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm gap-4">
                  <button 
                    onClick={() => triggerUpload(idx)}
                    className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Upload size={24} />
                  </button>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Thay Ảnh / Video</p>
                </div>

                <input 
                  type="file" 
                  hidden 
                  accept="image/*,video/*"
                  ref={el => fileInputRefs.current[idx] = el}
                  onChange={(e) => handleFileChange(idx, e)}
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    {project.type === 'video' ? <Film size={10} /> : <Camera size={10} />}
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-black uppercase tracking-tight group-hover:text-emerald-400 transition-colors leading-none">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]">Mẹo: Nhấn vào ảnh để tải dữ liệu mới từ máy tính</p>
          <button className="px-12 py-5 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300 font-bold uppercase tracking-widest text-xs backdrop-blur-md">
            Xem Tất Cả Dự Án
          </button>
        </div>
      </div>
    </section>
  );
}
