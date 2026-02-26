import React, { useState, useEffect } from "react";
import {
  Shield,
  MapPin,
  Search,
  CheckCircle2,
  Star,
  Info,
  AlertTriangle,
  Menu,
  X,
  ArrowRight,
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  Phone,
  Building2,
  ExternalLink,
  QrCode,
  MousePointer2,
  Cpu,
  Heart,
  Stethoscope,
  Landmark,
  ShieldCheck,
  Medal,
  UserCheck,
  Award,
  User,
  Plane,
} from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { UniversityFullDetail } from "./types";
import { UNIVERSITY_DETAILS } from "./constants";
import UniversityDetailView from "./components/UniversityDetailView";
SwiperCore.use([Autoplay, Pagination, EffectFade]);

import { BENEFITS, SCHOOLS, ADMISSION_PROCESS, EXAM_GROUPS } from "./constants";
// --- COMPONENTS ---
const SectionHeader = ({
  title,
  subtitle,
  centered = false,
  variant = "dark", // "dark" | "light"
  backgroundImage, // chỉ 1 ảnh: Trống Đồng hoặc Quốc kỳ
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  variant?: "dark" | "light";
  backgroundImage?: string; // đường dẫn ảnh mờ phía sau
}) => {
  const titleColor = variant === "light" ? "text-white" : "text-slate-800";
  const subtitleColor =
    variant === "light" ? "text-slate-200" : "text-slate-600";

  return (
    <div className="relative mb-12">
      {/* Background image mờ */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 m-auto w-48 h-48 opacity-10 pointer-events-none"
        />
      )}

      {/* Nội dung */}
      <div className={`${centered ? "text-center" : ""} relative`}>
        <div
          className={`flex items-center gap-3 ${
            centered ? "justify-center" : ""
          } mb-4`}
        >
          <div className="h-1 w-12 bg-red-600 rounded-full"></div>

          <h2
            className={`text-3xl font-extrabold uppercase tracking-tight ${titleColor}`}
          >
            {title}
          </h2>

          <div className="h-1 w-12 bg-red-600 rounded-full"></div>
        </div>

        {subtitle && (
          <p className={`text-lg max-w-2xl mx-auto ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

const NavItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    className="text-slate-100 hover:text-yellow-400 font-medium transition-colors py-2 px-1 border-b-2 border-transparent hover:border-yellow-400"
    onClick={(e) => {
      if (onClick) onClick();
    }}
  >
    {children}
  </a>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedUniversity, setSelectedUniversity] =
    useState<UniversityFullDetail | null>(null);
  // Smooth scroll logic is handled by standard HTML id anchors and CSS scroll-behavior: smooth in index.html

  const handleSchoolClick = (id: string | undefined) => {
    if (id && UNIVERSITY_DETAILS[id]) {
      setSelectedUniversity(UNIVERSITY_DETAILS[id]);
    } else {
      // For demo, if no data exists, just alert or do nothing
      console.log("Dữ liệu chi tiết trường này đang được cập nhật...");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-yellow-400 selection:text-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 military-gradient shadow-xl text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div
              className="flex items-center gap-3 cursor-pointer min-w-0"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {/* ICON */}
              <div className="bg-yellow-400 p-2 rounded-lg text-red-700 shadow-inner shrink-0">
                <Star fill="currentColor" size={26} />
              </div>

              {/* TEXT */}
              <div className="min-w-0 leading-tight">
                {/* MOBILE */}
                <span className="block sm:hidden text-sm font-extrabold uppercase tracking-tight truncate">
                  BỘ TƯ LỆNH TP. HCM
                </span>

                {/* DESKTOP */}
                <span className="hidden sm:block text-xl font-bold uppercase tracking-tighter leading-none">
                  Bộ tư lệnh Thành phố Hồ Chí Minh
                </span>

                {/* SUBTITLE */}
                <span className="mt-2 block text-[10px] sm:text-[11px] uppercase tracking-widest opacity-80 font-semibold truncate">
                  <span className="sm:hidden">BCHQS P. TÂN SƠN NHÌ</span>
                  <span className="hidden sm:inline">
                    Ban chỉ huy Quân sự Phường Tân Sơn Nhì
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <NavItem href="#benefits">Quyền Lợi</NavItem>
              <NavItem href="#schools">Trường Tuyển</NavItem>
              <NavItem href="#criteria">Khối Thi</NavItem>
              <NavItem href="#process">Quy Trình</NavItem>
              <NavItem href="#contact">Liên Hệ</NavItem>
              <a
                href="#registration"
                className="bg-yellow-400 text-red-800 px-5 lg:px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-lg active:scale-95 whitespace-nowrap"
              >
                SƠ TUYỂN NGAY
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`md:hidden military-gradient border-t border-green-800 absolute w-full left-0 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 flex flex-col gap-4 text-center">
            <NavItem href="#benefits" onClick={() => setIsMenuOpen(false)}>
              Quyền Lợi
            </NavItem>
            <NavItem href="#schools" onClick={() => setIsMenuOpen(false)}>
              Trường Tuyển Sinh
            </NavItem>
            <NavItem href="#criteria" onClick={() => setIsMenuOpen(false)}>
              Tổ Hợp Xét Tuyển
            </NavItem>
            <NavItem href="#process" onClick={() => setIsMenuOpen(false)}>
              Quy Trình
            </NavItem>
            <NavItem href="#contact" onClick={() => setIsMenuOpen(false)}>
              Liên Hệ
            </NavItem>
            <a
              href="#registration"
              onClick={() => setIsMenuOpen(false)}
              className="bg-yellow-400 text-red-800 px-6 py-3 rounded-xl font-bold w-full text-center shadow-lg uppercase tracking-tight"
            >
              Đăng ký ngay
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 military-gradient relative overflow-hidden">
        <div className="absolute inset-0 star-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-red-600/30 text-yellow-400 px-4 py-1.5 rounded-full border border-red-500/50 mb-6 animate-pulse">
              <Shield size={16} />
              <span className="text-sm font-bold tracking-wider uppercase">
                Vinh quang người chiến sĩ
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight md:leading-[1.25] lg:leading-[1.35]">
              Cổng Thông Tin <br />
              <span className="text-yellow-400">Tuyển Sinh Quân Đội</span>
            </h1>

            <p className="text-lg text-slate-200 mb-10 max-w-xl leading-relaxed">
              Trở thành Sĩ quan Quân đội Nhân dân Việt Nam - Ước mơ của thế hệ
              trẻ. Miễn 100% học phí, chế độ đãi ngộ vượt trội và tương lai nghề
              nghiệp vững chắc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#registration"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                Bắt đầu Sơ tuyển
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/docs/tsqs-doc.pdf"
                target="_blank"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all text-center"
              >
                Xem Tài liệu Tuyển sinh
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400/20">
              <img
                src="/images/tsn-banner.jpg"
                alt="Military Training"
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* ================= ĐỐI TƯỢNG DỰ TUYỂN ================= */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-12 border border-slate-300 shadow-sm">
            {/* ================= HEADER ================= */}
            <div className="mb-16 border-l-4 border-red-800 pl-6">
              <h3 className="text-2xl font-extrabold text-red-900 flex items-center gap-3 uppercase tracking-wide">
                <Landmark className="text-red-800" size={28} />
                Đối tượng dự tuyển
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed max-w-3xl">
                Thực hiện theo Điều 10 Thông tư 41 của Bộ Quốc phòng. Áp dụng
                tuyển sinh đào tạo sĩ quan năm 2026.
              </p>
            </div>

            {/* ================= GRID CHÍNH ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {/* ================= TRONG QUÂN ĐỘI ================= */}
              <div className="border border-slate-300 rounded-xl p-10 bg-slate-50">
                <h4 className="text-base font-bold text-green-900 mb-8 uppercase tracking-wide flex items-center gap-3">
                  <Shield size={22} className="text-green-800" />
                  Đối tượng trong Quân đội
                </h4>

                <ul className="space-y-5 text-sm text-slate-700 leading-relaxed">
                  <li className="flex gap-4">
                    <Award className="text-green-800 shrink-0 mt-1" size={18} />
                    Hạ sĩ quan, binh sĩ đang phục vụ tại ngũ đủ 12 tháng trở lên
                    (tính đến tháng 4/2026; nhập ngũ từ năm 2025 trở về trước).
                  </li>

                  <li className="flex gap-4">
                    <Award className="text-green-800 shrink-0 mt-1" size={18} />
                    Quân nhân chuyên nghiệp; công nhân và viên chức quốc phòng
                    phục vụ đủ 12 tháng trở lên (tính đến tháng 9/2026).
                  </li>

                  <li className="flex gap-4">
                    <Award className="text-green-800 shrink-0 mt-1" size={18} />
                    Được đơn vị quản lý trực tiếp tổ chức sơ tuyển, lập hồ sơ
                    theo đúng quy định và bảo đảm điều kiện chính trị, phẩm chất
                    đạo đức, kỷ luật.
                  </li>

                  <li className="flex gap-4">
                    <Award className="text-green-800 shrink-0 mt-1" size={18} />
                    Có nguyện vọng tự nguyện đăng ký dự tuyển và được cấp có
                    thẩm quyền cho phép.
                  </li>
                </ul>
              </div>

              {/* ================= NGOÀI QUÂN ĐỘI ================= */}
              <div className="border border-slate-300 rounded-xl p-10 bg-slate-50">
                <h4 className="text-base font-bold text-amber-800 mb-8 uppercase tracking-wide flex items-center gap-3">
                  <User size={22} className="text-amber-700" />
                  Thanh niên ngoài Quân đội
                </h4>

                <ul className="space-y-5 text-sm text-slate-700 leading-relaxed">
                  <li className="flex gap-4">
                    <Star className="text-amber-700 shrink-0 mt-1" size={18} />
                    Nam thanh niên tốt nghiệp THPT (hoặc tương đương), kể cả đã
                    xuất ngũ hoặc hoàn thành nghĩa vụ Công an nhân dân.
                  </li>

                  <li className="flex gap-4">
                    <Star className="text-amber-700 shrink-0 mt-1" size={18} />
                    Số lượng đăng ký dự tuyển không hạn chế; xét tuyển theo chỉ
                    tiêu được Bộ Quốc phòng giao.
                  </li>

                  <li className="flex gap-4">
                    <Star className="text-amber-700 shrink-0 mt-1" size={18} />
                    Tuyển nữ thanh niên ngoài Quân đội và nữ quân nhân vào các
                    ngành được giao chỉ tiêu tuyển nữ năm 2026.
                  </li>

                  <li className="flex gap-4">
                    <Star className="text-amber-700 shrink-0 mt-1" size={18} />
                    Đáp ứng đầy đủ tiêu chuẩn chính trị, đạo đức, sức khỏe, văn
                    hóa theo quy định hiện hành.
                  </li>
                </ul>
              </div>
            </div>

            {/* ================= ĐỘ TUỔI ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
              <div className="border border-slate-300 rounded-xl p-8 text-center bg-white shadow-sm">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
                  Độ tuổi đối với Quân nhân tại ngũ
                </p>
                <p className="text-4xl font-extrabold text-green-900">
                  18 – 23 tuổi
                </p>
                <p className="text-sm text-slate-500 mt-3">
                  Tính đến năm dự tuyển
                </p>
              </div>

              <div className="border border-slate-300 rounded-xl p-8 text-center bg-white shadow-sm">
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
                  Độ tuổi đối với Thanh niên ngoài Quân đội
                </p>
                <p className="text-4xl font-extrabold text-amber-800">
                  17 – 21 tuổi
                </p>
                <p className="text-sm text-slate-500 mt-3">
                  Tính đến năm dự tuyển
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Quyền Lợi & Chế Độ Đãi Ngộ"
            subtitle="Học viên khi trúng tuyển vào các trường Quân đội được hưởng những chính sách đặc biệt từ Đảng và Nhà nước."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration & QR Area */}
      <section
        id="registration"
        className="py-24 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Đăng ký Sơ tuyển trực tuyến"
            subtitle="Quét mã QR hoặc nhấn nút bên dưới để nhập thông tin lý lịch sơ tuyển nhanh chóng."
            centered
            variant="light"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3 uppercase tracking-tight">
                  <MousePointer2 /> Bấm sơ tuyển ngay
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Hệ thống quản lý tuyển sinh quân sự cho phép thí sinh cung cấp
                  thông tin trực tuyến trước khi đến nộp hồ sơ giấy tại Ban Chỉ
                  Huy Quân Sự địa phương.
                </p>
                <a
                  href="https://forms.gle/2dV2EXrEpwgkXGYj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 text-red-900 py-5 rounded-xl font-black text-center text-xl hover:bg-yellow-300 transition-all shadow-[0_10px_30px_rgba(251,191,36,0.2)] active:scale-95 uppercase tracking-tighter"
                >
                  MỞ TRANG ĐĂNG KÝ CHÍNH THỨC
                </a>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-red-600/20 border border-red-500/30">
                <AlertTriangle className="text-red-400 shrink-0" size={24} />
                <p className="text-sm text-slate-200 leading-loose">
                  <span className="font-bold text-white uppercase">
                    Quan trọng:
                  </span>{" "}
                  Việc đăng ký trực tuyến là bước hỗ trợ đăng ký sơ tuyển. Thí
                  sinh phải đến{" "}
                  <span className="text-yellow-400 underline underline-offset-4">
                    Ban CHQS Phường Tân Sơn Nhì
                  </span>{" "}
                  để nhận hồ sơ và kiểm tra sức khỏe.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_0_60px_rgba(251,191,36,0.4)] group relative">
                <div className="w-64 h-64 bg-slate-100 rounded-2xl flex items-center justify-center border-4 border-slate-50 overflow-hidden relative">
                  <img
                    src="/images/qrcode-tsqs.png" // đường dẫn ảnh QR
                    alt="QR đăng ký tuyển sinh quân sự"
                    className="mx-auto w-48 h-48 rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl uppercase tracking-wider">
                      QUÉT ĐỂ ĐĂNG KÝ
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-yellow-400 font-black text-2xl uppercase tracking-widest flex items-center justify-center gap-3">
                  <QrCode size={28} /> MÃ QR ĐĂNG KÝ NHANH
                </p>
                <p className="text-slate-400 text-base mt-2 font-medium">
                  Dùng Camera điện thoại hoặc Zalo quét mã phía trên
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools List Section */}
      <section
        id="schools"
        className="py-24 bg-gradient-to-b from-white to-slate-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Các trường & Học viện Tuyển sinh"
            subtitle="Danh sách các cơ sở đào tạo Sĩ quan chính quy thuộc Bộ Quốc Phòng năm 2026."
            centered
          />

          {/* ================= HỆ ĐẠI HỌC ================= */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 bg-green-50 p-4 rounded-2xl border border-green-100 w-fit">
              <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-md">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-lg font-bold text-green-900 uppercase tracking-wide">
                Hệ Đại học Quân sự
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCHOOLS.filter((s) => s.category === "Academy").map((school) => (
                <motion.div
                  key={school.id}
                  onClick={() => handleSchoolClick(school.id)}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200
            hover:border-green-600 hover:shadow-lg
            transition-all cursor-pointer h-full"
                >
                  <p className="font-semibold text-slate-800 text-sm leading-snug">
                    {school.name}
                  </p>

                  {school.note && (
                    <p className="text-xs text-slate-500 mt-2 italic">
                      {school.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= HỆ CAO ĐẲNG ================= */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 bg-blue-50 p-4 rounded-2xl border border-blue-100 w-fit">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md">
                <Info size={22} />
              </div>
              <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wide">
                Hệ Cao đẳng
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCHOOLS.filter((s) => s.category === "College").map((school) => (
                <motion.div
                  key={school.id}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-white border border-blue-100
            hover:border-blue-600 hover:shadow-lg
            transition-all cursor-pointer flex items-start gap-3"
                >
                  <div className="bg-blue-600/10 p-2 rounded-lg text-blue-600">
                    <Star size={20} fill="currentColor" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800 text-sm leading-snug">
                      {school.name}
                    </p>

                    {school.note && (
                      <p className="text-xs text-slate-500 mt-2 italic">
                        {school.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= TIÊU CHUẨN SỨC KHỎE ================= */}
      <section
        id="health"
        className="py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-20 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tiêu chuẩn Sức khỏe Tuyển sinh"
            subtitle="Áp dụng theo Thông tư 105/2023/TT-BQP và 106/2025/TT-BQP"
            centered
          />

          {/* ================= CHỈ HUY - CHÍNH TRỊ - HẬU CẦN ================= */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-l-4 border-red-700 pl-4">
              <Shield size={26} className="text-red-700" />
              <h3 className="text-lg font-bold text-red-900 uppercase tracking-wide">
                Khối Chỉ huy – Chính trị – Hậu cần
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* NAM */}
              <div className="p-8 rounded-xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-base border-b pb-2">
                  Nam
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li>• BMI ≤ 30</li>
                  <li>• Chiều cao ≥ 1m65</li>
                  <li>• Cân nặng ≥ 50kg</li>
                  <li>• Không tuyển thí sinh cận thị</li>
                </ul>
              </div>

              {/* NỮ */}
              <div className="p-8 rounded-xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-base border-b pb-2">
                  Nữ
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li>• Đạt Điểm 1 theo Thông tư 105</li>
                  <li>• Chiều cao ≥ 1m54</li>
                  <li>• Cân nặng ≥ 48kg</li>
                  <li>• Không tuyển thí sinh cận thị</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= CHUYÊN MÔN KỸ THUẬT ================= */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-l-4 border-amber-600 pl-4">
              <Cpu size={26} className="text-amber-600" />
              <h3 className="text-lg font-bold text-amber-800 uppercase tracking-wide">
                Khối Chuyên môn kỹ thuật
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* NAM */}
              <div className="p-8 rounded-xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-base border-b pb-2">
                  Nam
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li>• BMI ≤ 30</li>
                  <li>• Chiều cao ≥ 1m63</li>
                  <li>• Cân nặng ≥ 50kg</li>
                  <li>• Được tuyển cận ≤ 3 độ</li>
                  <li>• Cận 3–6 độ đã phẫu thuật ổn định</li>
                  <li>
                    • Thị lực sau chỉnh kính: 10/10 (mắt phải), tổng ≥ 19/10
                  </li>
                </ul>
              </div>

              {/* NỮ */}
              <div className="p-8 rounded-xl bg-white border border-slate-300 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-5 uppercase text-base border-b pb-2">
                  Nữ
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li>• Đạt Điểm 1 theo Thông tư 105</li>
                  <li>• Chiều cao ≥ 1m54</li>
                  <li>• Cân nặng ≥ 48kg</li>
                  <li>• Được tuyển cận ≤ 3 độ</li>
                  <li>• Cận 3–6 độ đã phẫu thuật ổn định</li>
                  <li>
                    • Thị lực sau chỉnh kính: 10/10 (mắt phải), tổng ≥ 19/10
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= KHÁM SƠ TUYỂN ================= */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-l-4 border-green-800 pl-4">
              <Stethoscope size={26} className="text-green-800" />
              <h3 className="text-lg font-bold text-green-900 uppercase tracking-wide">
                Khám sơ tuyển sức khỏe
              </h3>
            </div>

            <div className="p-8 rounded-xl bg-white border border-slate-300 shadow-sm">
              <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <li>
                  • Thực hiện bởi Ban TSQS cấp xã và Hội đồng khám khu vực
                </li>
                <li>• Tổ chức theo Văn bản hợp nhất 88/VBHN-BQP</li>
                <li>• Hoàn thành trước 15/4/2026</li>
                <li>• Không để thí sinh có nguyện vọng nhưng chưa được khám</li>
              </ul>
            </div>
          </div>

          {/* ================= ƯU TIÊN 16 DÂN TỘC ================= */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8 border-l-4 border-red-800 pl-4">
              <Star size={26} className="text-yellow-500" />
              <h3 className="text-lg font-bold text-red-900 uppercase tracking-wide">
                Chính sách ưu tiên – 16 dân tộc rất ít người
              </h3>
            </div>

            <div className="p-10 rounded-xl bg-white border border-slate-300 shadow-sm">
              <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                Áp dụng theo Nghị định 57/2017/NĐ-CP của Chính phủ.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm font-medium text-slate-800 mb-10">
                {[
                  "Cống",
                  "Mảng",
                  "Pu Péo",
                  "Si La",
                  "Cờ Lao",
                  "Bố Y",
                  "La Ha",
                  "Ngái",
                  "Chứt",
                  "Ơ Đu",
                  "Brâu",
                  "Ro Măm",
                  "Lô Lô",
                  "Lự",
                  "Pà Thẻn",
                  "La Hủ",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-300 px-3 py-2 text-center rounded-md"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-6 border border-slate-300 rounded-lg bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-4 uppercase">
                    Nam
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Chiều cao ≥ 1m58</li>
                    <li>• Cân nặng ≥ 46kg</li>
                    <li>• Các tiêu chuẩn khác thực hiện theo quy định chung</li>
                  </ul>
                </div>

                <div className="p-6 border border-slate-300 rounded-lg bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-4 uppercase">
                    Nữ
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Chiều cao ≥ 1m52</li>
                    <li>• Cân nặng ≥ 44kg</li>
                    <li>• Các tiêu chuẩn khác thực hiện theo quy định chung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* ================= PHI CÔNG QUÂN SỰ ================= */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6 border-l-4 border-sky-800 pl-4">
              <Plane size={24} className="text-sky-800" />
              <h3 className="text-lg font-semibold text-sky-900 uppercase tracking-wide">
                Tuyển sinh đào tạo Phi công quân sự
              </h3>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white shadow-sm p-10">
              {/* INTRO */}
              <div className="max-w-4xl text-sm text-slate-700 leading-relaxed mb-10">
                <p>
                  Chuyên ngành Phi công quân sự tại Trường Sĩ quan Không quân tuyển chọn thí sinh đã được Quân chủng Phòng không – Không quân tổ chức khám tuyển và kết luận đủ điều kiện dự tuyển.
                </p>
              </div>

              {/* 2 COLUMNS */}
              <div className="grid md:grid-cols-2 gap-10 mb-12">
                {/* LEFT */}
                <div className="rounded-2xl border border-sky-200 bg-white p-6">
                  <h4 className="text-sm font-bold text-sky-900 mb-6 tracking-wide uppercase">
                    Điều kiện bắt buộc
                  </h4>

                  <ul className="space-y-4 text-sm text-slate-700">
                    <li className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-sky-700 mt-1 shrink-0"
                      />
                      Trải qua hai vòng khám sức khỏe chuyên sâu theo quy định.
                    </li>

                    <li className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-sky-700 mt-1 shrink-0"
                      />
                      Được kết luận đủ điều kiện đào tạo phi công quân sự.
                    </li>
                  </ul>
                </div>

                {/* RIGHT */}
                <div className="rounded-2xl border border-sky-200 bg-white p-6">
                  <h4 className="text-sm font-bold text-sky-900 mb-6 tracking-wide uppercase">
                    Quy định sơ tuyển
                  </h4>

                  <ul className="space-y-4 text-sm text-slate-700">
                    <li className="flex gap-3">
                      <ShieldCheck
                        size={18}
                        className="text-sky-700 mt-1 shrink-0"
                      />
                      Không khám lại tại Ban TSQS cấp xã nếu đã được kết luận đủ
                      điều kiện.
                    </li>

                    <li className="flex gap-3">
                      <ShieldCheck
                        size={18}
                        className="text-sky-700 mt-1 shrink-0"
                      />
                      Chỉ xét tuyển thí sinh đáp ứng tiêu chuẩn sức khỏe theo
                      quy trình riêng.
                    </li>
                  </ul>
                </div>
              </div>

              {/* NOTICE */}
              <div className="rounded-2xl border border-sky-300 bg-sky-100/60 p-6 text-sm text-sky-900 leading-relaxed">
                Công tác tuyển chọn Phi công quân sự thực hiện theo quy trình
                đặc thù, bảo đảm tiêu chuẩn sức khỏe và yêu cầu đào tạo của Quân
                chủng Phòng không – Không quân.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Admission Process Timeline */}
      <section
        id="process"
        className="py-24 bg-slate-900 text-white relative scroll-mt-20"
      >
        <div className="absolute inset-0 star-pattern"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Lộ trình Tuyển sinh chi tiết"
            subtitle="Cần tuân thủ tuyệt đối các mốc thời gian và quy trình để không mất cơ hội."
            centered
            variant="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-stretch">
            {ADMISSION_PROCESS.map((step, idx) => (
              <div key={idx} className="h-full">
                <div
                  className="
            bg-white/5 border border-white/10
            rounded-[2.5rem] p-8
            backdrop-blur-md
            hover:bg-white/10
            transition-all duration-300
            shadow-2xl
            flex flex-col h-full
          "
                >
                  {/* Step Number */}
                  <div
                    className="
              w-16 h-16
              bg-yellow-400 text-red-900
              rounded-2xl
              flex items-center justify-center
              font-black text-3xl
              mb-8
              shadow-[0_10px_20px_rgba(251,191,36,0.3)]
            "
                  >
                    {step.step}
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight leading-snug">
                    {step.title}
                  </h4>

                  {/* Time */}
                  {step.time && (
                    <div className="flex items-center gap-2 text-yellow-400 font-bold mb-4 text-sm bg-yellow-400/10 px-3 py-1.5 rounded-full w-fit">
                      <Calendar size={16} />
                      {step.time}
                    </div>
                  )}

                  {/* Location */}
                  {step.location && (
                    <div className="flex items-start gap-2 text-slate-300 mb-6 text-sm italic">
                      <MapPin
                        size={16}
                        className="mt-1 shrink-0 text-red-400"
                      />
                      <span>{step.location}</span>
                    </div>
                  )}

                  {/* Content */}
                  <ul className="space-y-4 mt-4 flex-1">
                    {step.content.map((c, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-slate-300 text-sm font-medium leading-relaxed"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></div>
                        {c}
                      </li>
                    ))}
                  </ul>

                  {/* Important Note (Step 3) */}
                  {step.step === 3 && (
                    <div className="mt-8 p-4 bg-red-600/20 border border-red-500/30 rounded-2xl">
                      <p className="text-[10px] font-black text-red-400 flex items-center gap-2 uppercase tracking-widest mb-1">
                        <AlertTriangle size={14} />
                        Chú ý quan trọng
                      </p>
                      <p className="text-xs text-white leading-tight font-bold">
                        Nguyện vọng 1 (cao nhất) phải đăng ký vào trường Quân
                        đội đã qua sơ tuyển.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Thông tin liên hệ & Hỗ trợ"
            subtitle="Địa điểm đăng ký sơ tuyển và tư vấn trực tiếp cho thí sinh khu vực Tân Sơn Nhì, TP. Hồ Chí Minh."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Local Contact - Tan Son Nhi */}
            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Building2 size={150} />
              </div>
              <div className="relative z-10">
                {/* BADGE */}
                <div
                  className="
      inline-flex items-center gap-2
      bg-red-100 text-red-700
      px-3 py-1
      rounded-full
      text-[11px]
      font-black
      mb-5
      shadow-sm
      uppercase tracking-widest
    "
                >
                  <MapPin size={13} /> Điểm tiếp nhận sơ tuyển
                </div>

                {/* TITLE */}
                <h3
                  className="
      font-black text-slate-800 tracking-tight leading-tight mb-5
      text-lg
      sm:text-xl
      md:text-3xl
    "
                >
                  Ban Chỉ Huy Quân Sự
                  <br />
                  <span className="text-red-600 block sm:inline">
                    Phường Tân Sơn Nhì
                  </span>
                </h3>

                {/* CONTENT */}
                <div className="space-y-7">
                  {/* ADDRESS */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0 text-slate-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                        Địa chỉ chính thức
                      </p>
                      <p className="text-slate-800 font-semibold text-base md:text-lg leading-snug">
                        48 Tân Quý, Phường Tân Sơn Nhì, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>

                  {/* HOTLINE */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0 text-red-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                        Đường dây nóng hỗ trợ
                      </p>
                      <a
                        href="tel:0775674101"
                        className="
            text-2xl
            sm:text-3xl
            font-black
            text-slate-900
            hover:text-red-600
            transition-colors
            tracking-tight
          "
                      >
                        028.3810.9565
                      </a>
                    </div>
                  </div>
                </div>

                {/* MAP LINK */}
                <div className="mt-10 pt-8 border-t border-slate-200">
                  <a
                    href="https://www.google.com/maps/place/48+%C4%90.T%C3%A2n+Qu%C3%BD,+T%C3%A2n+Qu%C3%BD,+T%C3%A2n+Ph%C3%BA,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vietnam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-slate-500
                      font-bold
                      hover:text-red-600
                      transition-colors
                      uppercase
                      text-xs
                      tracking-widest
                    "
                  >
                    Mở chỉ đường trên Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Command Headquarter - HCMC */}
            <div className="flex flex-col gap-6">
              <div className="bg-military-gradient military-gradient rounded-[2.5rem] p-10 text-white flex-1 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <Shield size={120} fill="currentColor" />
                </div>
                <div className="bg-yellow-400 text-red-900 px-3 py-1 rounded-md text-[10px] font-black uppercase w-fit mb-4 shadow-sm tracking-widest">
                  Cấp Thành Phố
                </div>
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <Building2 className="text-yellow-400" /> Bộ Tư lệnh TP. Hồ
                  Chí Minh
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-yellow-400 mt-1 shrink-0"
                    />
                    <p className="text-slate-200 font-medium">
                      290 Cách Mạng Tháng Tám, Phường Vườn Lài, TP. Hồ Chí Minh
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm italic border-l-2 border-yellow-400/30 pl-4 mt-4 leading-relaxed">
                    Cơ quan thường trực Ban Chỉ đạo tuyển sinh quân sự TP.HCM.
                    Chịu trách nhiệm chung về công tác xét tuyển toàn địa bàn.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-400 rounded-[2.5rem] p-8 text-red-900 shadow-xl flex items-center gap-6 group hover:scale-[1.02] transition-transform">
                <div className="bg-red-800 text-white w-20 h-20 rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  <Info size={40} />
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase tracking-tighter mb-1">
                    Cần tư vấn thêm?
                  </h4>
                  <p className="text-sm font-bold text-red-800/80 leading-snug">
                    Đừng ngần ngại, hãy đến trực tiếp Ban CHQS Phường để được
                    đăng ký hồ sơ và hướng dẫn miễn phí.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Combinations */}
      <section id="criteria" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tổ hợp Xét tuyển 2026"
            subtitle="Thí sinh lựa chọn một trong các tổ hợp môn thi phù hợp nhất với thế mạnh cá nhân."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-8 uppercase tracking-tight">
                <BookOpen className="text-red-600" /> Khối thi & Tổ hợp môn
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EXAM_GROUPS.map((group, index) => {
                  const isLastOdd =
                    EXAM_GROUPS.length % 2 !== 0 &&
                    index === EXAM_GROUPS.length - 1;

                  return (
                    <div
                      key={group.code}
                      className={`
    bg-white
    rounded-2xl
    p-6
    shadow-sm
    border border-slate-200
    ${isLastOdd ? "md:col-span-2" : ""}
  `}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-red-700 text-white font-bold px-3 py-1 rounded-full text-sm">
                          {group.code}
                        </span>
                        <h3 className="font-semibold text-slate-900 tracking-tight">
                          {group.subjects}
                        </h3>
                      </div>

                      {/* Targets */}
                      <div className="flex flex-wrap gap-2">
                        {group.target.map((t) => (
                          <span
                            key={t}
                            className="
    bg-stone-200
    text-stone-900
    text-sm
    px-3
    py-1
    rounded-full
    font-medium
    border border-stone-300
    hover:bg-stone-300
    transition-colors
  "
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="
  bg-slate-900 text-white rounded-[3rem]
  p-10 shadow-2xl relative overflow-hidden
  flex flex-col
  md:col-span-2
"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
              <h4 className="text-2xl font-black mb-10 flex items-center gap-3 uppercase tracking-tighter border-b border-white/10 pb-6">
                <Shield className="text-yellow-400" /> Nguyên tắc vàng khi xét
                tuyển
              </h4>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-yellow-400/20 text-yellow-400 rounded-2xl flex items-center justify-center shrink-0 font-black text-xl border border-yellow-400/30">
                    1
                  </div>
                  <div>
                    <p className="font-black text-lg text-white leading-tight uppercase mb-1">
                      Công khai - Minh bạch
                    </p>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                      Xét điểm từ cao xuống thấp cho đến khi đủ chỉ tiêu. Không
                      phân biệt tôn giáo, vùng miền.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-yellow-400/20 text-yellow-400 rounded-2xl flex items-center justify-center shrink-0 font-black text-xl border border-yellow-400/30">
                    2
                  </div>
                  <div>
                    <p className="font-black text-lg text-white leading-tight uppercase mb-1">
                      Xét Tiêu chí phụ
                    </p>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                      Khi có nhiều thí sinh cùng mức điểm, hội đồng tuyển sinh
                      sẽ xét đến điểm môn chính và các tiêu chí ưu tiên.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-yellow-400/20 text-yellow-400 rounded-2xl flex items-center justify-center shrink-0 font-black text-xl border border-yellow-400/30">
                    3
                  </div>
                  <div>
                    <p className="font-black text-lg text-white leading-tight uppercase mb-1">
                      Thang điểm bình đẳng
                    </p>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                      Thí sinh là Quân nhân và Dân sự được xét tuyển bình đẳng
                      trên cùng một thang điểm chuẩn quy định.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 pt-20 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h3 className="text-2xl font-black text-slate-800 mb-8 uppercase tracking-widest">
              Theo dõi kết quả & Thông báo
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://forms.gle/3cK2Ti7nrERRFMYXA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-red-600 hover:text-white font-black bg-white hover:bg-red-600 px-8 py-4 rounded-2xl shadow-md border border-slate-200 transition-all hover:-translate-y-1 uppercase text-sm tracking-tighter"
              >
                <Search size={22} /> Cổng đăng ký Sơ tuyển
              </a>
              <a
                href="https://mod.gov.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-red-600 hover:text-white font-black bg-white hover:bg-red-600 px-8 py-4 rounded-2xl shadow-md border border-slate-200 transition-all hover:-translate-y-1 uppercase text-sm tracking-tighter"
              >
                <Star size={22} /> Bộ Quốc Phòng Việt Nam
              </a>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-300/50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                {/* LEFT: Logo + Title */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  {/* ICON */}
                  <div className="w-12 h-12 military-gradient rounded-xl flex items-center justify-center text-yellow-400 shadow-lg ring-4 ring-white shrink-0">
                    <Star fill="currentColor" size={24} />
                  </div>

                  {/* TEXT */}
                  <div className="leading-tight">
                    {/* Mobile */}
                    <p className="block sm:hidden font-extrabold text-sm tracking-tight text-slate-900">
                      BỘ TƯ LỆNH TP. HCM
                    </p>

                    {/* Desktop */}
                    <p className="hidden sm:block font-extrabold text-lg tracking-widest text-slate-900">
                      BỘ TƯ LỆNH THÀNH PHỐ HỒ CHÍ MINH
                    </p>

                    {/* Subtitle */}
                    <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-tight text-slate-600">
                      <span className="sm:hidden">BCHQS P. TÂN SƠN NHÌ</span>
                      <span className="hidden sm:inline">
                        Ban Chỉ Huy Quân Sự Phường Tân Sơn Nhì
                      </span>
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
                  {/* Copyright */}
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    © 2026 Cổng Thông Tin Tuyển Sinh Quân Đội – Tân Sơn Nhì, TP.
                    Hồ Chí Minh
                  </p>

                  {/* Slogan */}
                  <p className="text-[11px] sm:text-xs text-slate-600">
                    Vì sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam XHCN
                  </p>

                  {/* Dots */}
                  <div className="mt-2 flex gap-3">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Contact Strip */}
      {/* Selected University Detail View Modal */}
      {selectedUniversity && (
        <UniversityDetailView
          data={selectedUniversity}
          onClose={() => setSelectedUniversity(null)}
        />
      )}
      <div className="border-t border-slate-700 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-3 text-center">
          <p className="text-xs sm:text-sm text-slate-300 tracking-wide">
            Mọi đóng góp ý kiến xin gửi về email{" "}
            <a
              href="mailto:daongocanhkhoi@gmail.com"
              className="text-blue-400 font-semibold underline hover:text-blue-300"
            >
              daongocanhkhoi@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
