import React from "react";
import {
  History,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  Shield,
  Medal,
  GraduationCap,
  Star,
  X,
} from "lucide-react";
import { UniversityFullDetail } from "../types";
import { motion } from "framer-motion";

interface UniversityDetailViewProps {
  data: UniversityFullDetail;
  onClose: () => void;
}

const UniversityDetailView: React.FC<UniversityDetailViewProps> = ({
  data,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      layoutId={`school-card-${data.id}`}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm"
    >
      {/* ===== CONTAINER TRỐNG ĐỒNG ===== */}
      <div
        className="relative min-h-screen"
        style={{
          backgroundColor: "#FDF6E3",
          backgroundImage: "url('/images/trong-dong.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "900px",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#FDF6E3]/90 pointer-events-none"></div>

        {/* ================= BANNER ================= */}
        <div className="relative h-[380px] w-full overflow-hidden">
          <img
            src={data.bannerImage}
            alt={data.fullName}
            className="w-full h-full object-cover"
          />

          {/* Gradient đỏ đô */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/70 via-[#8B0000]/60 to-[#8B0000]/90"></div>

          <div className="absolute bottom-24 left-16 text-white max-w-5xl">
            {/* Eyebrow */}
            <p className="text-[#FFD700] text-lg tracking-[0.25em] font-semibold uppercase mb-3">
              {data.shortName}
            </p>

            {/* Title chính */}
            <h2 className="text-6xl font-black uppercase tracking-tight leading-tight">
              {data.fullName}
            </h2>

            {/* Gạch vàng trang trí */}
            <div className="mt-6 w-32 h-1 bg-[#FFD700]"></div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="relative -mt-24 px-10 z-20">
          <div className="bg-[#FFFDF6] border border-[#C6A75E] rounded-[40px] shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10">
            <img
              src={data.logo}
              alt="Logo"
              className="w-32 h-32 object-contain"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] font-semibold text-[#3A3A3A] w-full">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#8B0000]" size={18} />
                {data.contact.address}
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#8B0000]" size={18} />
                {data.contact.phone}
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#C6A75E]" size={18} />
                {data.contact.email}
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-[#8B0000]" size={18} />
                {data.contact.website}
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative px-6 md:px-16 py-20 space-y-20 z-10">
          {/* ===== HISTORY ===== */}
          <section>
            <h3 className="text-2xl font-black text-[#8B0000] mb-8 uppercase flex items-center gap-3">
              <History size={26} className="text-[#8B0000]" />
              Quá trình hình thành
            </h3>

            <div className="space-y-6">
              {data.history.map((text, idx) => (
                <div
                  key={idx}
                  className="bg-white border-l-4 border-[#C6A75E] p-6 rounded-xl shadow-md"
                >
                  <p className="text-[#3A3A3A] leading-relaxed font-medium">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== ACHIEVEMENTS ===== */}
          <section>
            <h3 className="text-2xl font-black text-[#8B0000] mb-8 uppercase flex items-center gap-3">
              <Medal size={26} className="text-[#FFC400]" />
              Thành tích tiêu biểu
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FFF8DC] p-8 rounded-3xl border border-[#C6A75E] shadow-md">
                <p className="font-black text-[#8B0000] mb-4 uppercase">
                  Điểm nổi bật
                </p>

                <ul className="space-y-3">
                  {data.achievements.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[#3A3A3A] font-semibold"
                    >
                      <Star size={16} className="text-[#FFC400] mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[#C6A75E] shadow-md">
                <p className="font-black text-[#8B0000] mb-4 uppercase">
                  Huân chương
                </p>

                <div className="flex flex-wrap gap-3">
                  {data.achievements.medals.map((medal, i) => (
                    <span
                      key={i}
                      className="bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-bold"
                    >
                      {medal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===== FACULTY ===== */}
          <section>
            <h3 className="text-2xl font-black text-[#8B0000] mb-8 uppercase flex items-center gap-3">
              <Shield size={26} className="text-[#8B0000]" />
              Đội ngũ giảng viên
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.faculty.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#C6A75E] p-6 rounded-2xl shadow-md font-semibold text-[#3A3A3A]"
                >
                  {stat}
                </div>
              ))}
            </div>
          </section>

          {/* ===== MAJORS ===== */}
          <section>
            <h3 className="text-2xl font-black text-[#8B0000] mb-8 uppercase flex items-center gap-3">
              <GraduationCap size={26} className="text-[#8B0000]" />
              Chuyên ngành đào tạo
            </h3>

            <div className="bg-gradient-to-br from-[#8B0000] to-[#5A0000] p-10 rounded-3xl text-white shadow-xl">
              <h4 className="text-xl font-black text-[#FFC400] uppercase mb-8">
                {data.majors.military.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.majors.military.list.map((m, i) => (
                  <div
                    key={i}
                    className="bg-white/10 p-4 rounded-xl border border-white/20 flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-[#FFC400]" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default UniversityDetailView;
