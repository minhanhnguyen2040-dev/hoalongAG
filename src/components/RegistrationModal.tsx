import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export default function RegistrationModal({ isOpen, onClose, serviceTitle }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: serviceTitle || 'Marketing BĐS Thực Chiến',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Sync course if props change
  useEffect(() => {
    if (serviceTitle) {
      setFormData(prev => ({ ...prev, course: serviceTitle }));
    }
  }, [serviceTitle]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Note: Replace this with your Google Apps Script URL
      const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
      
      const payload = {
        ...formData,
        targetEmail: 'dinvoo1982@gmail.com',
        targetZalo: '0798876876',
        timestamp: new Date().toLocaleString()
      };

      console.log('Submitting to Automation:', payload);
      
      if (SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        // Simulation mode for preview
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
      } else {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Common for Google Apps Script
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-[#0a0a0c] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight">Đăng Ký Tư Vấn</h3>
                <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mt-1">Hệ Thống Tự Động Kết Nối • Hoa Long AG</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="text-emerald-500 w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-3xl font-black uppercase tracking-tight">Đã Gửi Thành Công!</h4>
                    <p className="text-gray-400 font-medium px-6">
                      Thông tin đã được gửi đến <span className="text-white">dinvoo1982@gmail.com</span> và Zalo <span className="text-white">0798.876.876</span>.
                    </p>
                    <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest">
                      Chúng tôi sẽ phản hồi bạn trong ít phút.
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="px-12 py-4 bg-emerald-500 text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-emerald-400 transition-all font-sans"
                  >
                    Quay lại trang chủ
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Họ và tên</label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-white/10 font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Số điện thoại / Zalo</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="09xx.xxx.xxx"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-white/10 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Email</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@gmail.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-white/10 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Dịch vụ / Khóa học quan tâm</label>
                    <select
                      value={formData.course}
                      onChange={e => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none font-medium cursor-pointer"
                    >
                      <optgroup label="Khóa Học Media" className="bg-[#0a0a0c]">
                        <option value="Khóa Video BĐS Điện Thoại">Khóa Video BĐS Điện Thoại (399k)</option>
                        <option value="Khóa Video BĐS PC">Khóa Video BĐS Chuyên Nghiệp PC (599k)</option>
                        <option value="Khóa Video After Effects">Khóa Video After Effects Cao Cấp (799k)</option>
                        <option value="Khóa VR360 & Website">Khóa VR360 & Thiết kế Website</option>
                      </optgroup>
                      <optgroup label="Dịch Vụ" className="bg-[#0a0a0c]">
                        <option value="Dịch Vụ Marketing Thực Chiến">Marketing BĐS Thực Chiến</option>
                        <option value="Hệ Thống VR360 Tour">Hệ Thống VR360 Tour</option>
                        <option value="Sản Xuất Video Flycam">Sản Xuất Video & Flycam</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Lời nhắn (không bắt buộc)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Câu hỏi của bạn..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none placeholder:text-white/10 font-medium"
                    />
                  </div>

                  <button
                    disabled={status === 'submitting'}
                    type="submit"
                    className="w-full bg-emerald-500 text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {status === 'submitting' ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Gửi Đăng Ký
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Instruction if URL is missing */}
            <div className="px-8 pb-4">
              <p className="text-[8px] text-white/10 text-center uppercase tracking-widest">
                Data will be sent to Google Sheets via secure endpoint.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
