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
  Award,
  Heart,
} from "lucide-react";

// --- TYPES ---
interface Benefit {
  title: string;
  description: string;
  icon: any;
}

interface School {
  name: string;
  category: "Academy" | "College";
  note?: string;
}

interface AdmissionStep {
  step: number;
  title: string;
  time?: string;
  content: string[];
  location?: string;
}

interface ExamGroup {
  code: string;
  subjects: string;
  target?: Array<string>;
}

// --- CONSTANTS ---
const BENEFITS: Benefit[] = [
  {
    title: "Chế độ đãi ngộ",
    description:
      "Ăn, ở, quân trang hoàn toàn miễn phí trong suốt quá trình học tập.",
    icon: Shield,
  },
  {
    title: "Học phí & Phụ cấp",
    description:
      "Không phải đóng học phí, nhận phụ cấp sinh hoạt phí hàng tháng.",
    icon: Heart,
  },
  {
    title: "Hỗ trợ Gia đình",
    description:
      "Gia đình được hỗ trợ BHYT và các khoản trợ cấp khó khăn theo quy định.",
    icon: Users,
  },
  {
    title: "Đầu ra đảm bảo",
    description:
      "Tốt nghiệp được phong quân hàm sĩ quan và phân công công tác ngay.",
    icon: Award,
  },
];

const SCHOOLS: School[] = [
  { name: "Học viện Kỹ thuật Quân sự", category: "Academy" },
  { name: "Học viện Quân y", category: "Academy" },
  { name: "Học viện Hậu cần", category: "Academy" },
  { name: "Học viện Phòng không - Không quân", category: "Academy" },
  { name: "Học viện Hải quân", category: "Academy" },
  { name: "Học viện Biên phòng", category: "Academy" },
  { name: "Học viện Khoa học quân sự", category: "Academy" },
  {
    name: "Trường Sĩ quan Lục quân 1",
    category: "Academy",
    note: "Quảng Bình trở ra Bắc",
  },
  {
    name: "Trường Sĩ quan Lục quân 2",
    category: "Academy",
    note: "Quảng Trị trở vào Nam",
  },
  { name: "Trường Sĩ quan Thông tin", category: "Academy" },
  { name: "Trường Sĩ quan Chính trị", category: "Academy" },
  { name: "Trường Sĩ quan Công binh", category: "Academy" },
  { name: "Trường Sĩ quan Đặc công", category: "Academy" },
  { name: "Trường Sĩ quan Pháo binh", category: "Academy" },
  { name: "Trường Sĩ quan Tăng thiết giáp", category: "Academy" },
  { name: "Trường Sĩ quan Phòng hóa", category: "Academy" },
  {
    name: "Trường Sĩ quan Không quân",
    category: "College",
    note: "Kỹ thuật hàng không",
  },
];

const ADMISSION_PROCESS: AdmissionStep[] = [
  {
    step: 1,
    title: "Sơ tuyển",
    time: "25/3 – trước 20/5",
    location: "Ban CHQS xã/phường/thị trấn",
    content: [
      "Nộp hồ sơ lý lịch",
      "Khám sức khỏe quân sự",
      "Viết phiếu đăng ký sơ tuyển",
    ],
  },
  {
    step: 2,
    title: "Thi tốt nghiệp THPT",
    content: [
      "Sử dụng kết quả thi THPT quốc gia để xét tuyển vào các trường quân đội",
    ],
  },
  {
    step: 3,
    title: "Đăng ký xét tuyển",
    content: [
      "BẮT BUỘC: Nguyện vọng 1 là trường Quân đội",
      "Chỉ chọn 1 khối: Quân đội hoặc Công an",
    ],
  },
];

const EXAM_GROUPS: ExamGroup[] = [
  {
    code: "A00",
    subjects: "Toán, Lý, Hóa",
    target: [
      "HV Kỹ thuật QS",
      "HV Hậu cần",
      "HV PK-KQ",
      "HV Hải quân",
      "HV Biên phòng",
      "SQ Lục quân 1",
      "SQ Lục quân 2",
      "SQ Thông tin",
      "SQ Công binh",
      "SQ Đặc công",
      "SQ Pháo binh",
      "SQ Tăng thiết giáp",
      "SQ Phòng hóa",
      "SQ Không quân",
    ],
  },
  {
    code: "A01",
    subjects: "Toán, Lý, Tiếng Anh",
    target: [
      "HV Kỹ thuật QS",
      "HV Hậu cần",
      "HV PK-KQ",
      "HV Hải quân",
      "HV Biên phòng",
      "SQ Lục quân 1",
      "SQ Lục quân 2",
      "SQ Thông tin",
      "SQ Công binh",
      "SQ Đặc công",
      "SQ Pháo binh",
      "SQ Tăng thiết giáp",
      "SQ Phòng hóa",
      "SQ Không quân",
    ],
  },

  {
    code: "B00",
    subjects: "Toán, Hóa, Sinh",
    target: ["Học viện Quân y"],
  },
  {
    code: "C00",
    subjects: "Ngữ văn, Lịch sử, Địa lý",
    target: ["Học viện Biên phòng", "Trường Sĩ quan Chính trị"],
  },
  {
    code: "D01",
    subjects: "Toán, Ngữ văn, Tiếng Anh",
    target: ["Học viện Khoa học Quân sự", "Trường Sĩ quan Chính trị"],
  },
  {
    code: "D02",
    subjects: "Toán, Ngữ văn, Tiếng Nga",
    target: ["Học viện Khoa học Quân sự"],
  },
  {
    code: "D04",
    subjects: "Toán, Ngữ văn, Tiếng Trung",
    target: ["Học viện Khoa học Quân sự"],
  },
];

// --- COMPONENTS ---
const SectionHeader = ({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <div
      className={`flex items-center gap-3 ${centered ? "justify-center" : ""} mb-4`}
    >
      <div className="h-1 w-12 bg-red-600 rounded-full"></div>
      <h2 className="text-3xl font-extrabold text-slate-800 uppercase tracking-tight">
        {title}
      </h2>
      <div className="h-1 w-12 bg-red-600 rounded-full"></div>
    </div>
    {subtitle && (
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

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

  // Smooth scroll logic is handled by standard HTML id anchors and CSS scroll-behavior: smooth in index.html

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-yellow-400 selection:text-red-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 military-gradient shadow-xl text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="bg-yellow-400 p-2 rounded-lg text-red-700 shadow-inner">
                <Star fill="currentColor" size={28} />
              </div>
              <div>
                <span className="text-xl font-bold block leading-none uppercase tracking-tighter">
                  Bộ tư lệnh Thành phố Hồ Chí Minh
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-80 font-semibold">
                  Ban chỉ huy Quân sự Phường Tân Sơn Nhì
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
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

      {/* Target Audience */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <Users className="text-red-600" /> Đối tượng dự tuyển
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">
                    Thanh niên ngoài Quân đội (Học sinh tốt nghiệp THPT)
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">
                    Hạ sĩ quan, binh sĩ, quân nhân chuyên nghiệp, CNVCQP
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-sm text-slate-500 mb-1 text-center font-medium">
                  Độ tuổi Dân sự
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-red-600">
                    17
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-red-500 mb-1">
                    –
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-red-600">
                    21
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-sm text-slate-500 mb-1 text-center font-medium">
                  Độ tuổi Quân nhân
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-green-700">
                    18
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-green-600 mb-1">
                    –
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-green-700">
                    23
                  </span>
                </div>
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
                    <Icon size={32} />
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
            subtitle="Quét mã QR hoặc nhấn nút bên dưới để kê khai thông tin lý lịch sơ tuyển nhanh chóng."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3 uppercase tracking-tight">
                  <MousePointer2 /> Bấm sơ tuyển ngay
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Hệ thống quản lý tuyển sinh quân sự cho phép thí sinh khai báo
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
                <p className="text-sm text-slate-200">
                  <span className="font-bold text-white uppercase">
                    Quan trọng:
                  </span>{" "}
                  Việc đăng ký trực tuyến là bước hỗ trợ kê khai. Thí sinh{" "}
                  <span className="text-yellow-400 underline underline-offset-4">
                    phải
                  </span>{" "}
                  đến Ban CHQS Phường Tân Sơn Nhì để nhận hồ sơ và kiểm tra sức
                  khỏe.
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
        className="py-24 bg-white overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Các trường & Học viện Tuyển sinh"
            subtitle="Danh sách các cơ sở đào tạo Sĩ quan chính quy thuộc Bộ Quốc Phòng năm 2026."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8 bg-green-50 p-4 rounded-2xl border border-green-100">
                <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center shadow-md">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-green-900 uppercase">
                  Hệ Đại học Quân sự
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SCHOOLS.filter((s) => s.category === "Academy").map(
                  (school, idx) => (
                    <div
                      key={idx}
                      className="group p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-green-600 hover:text-white transition-all cursor-default shadow-sm hover:shadow-md"
                    >
                      <p className="font-bold text-sm mb-1">{school.name}</p>
                      {school.note && (
                        <p className="text-[11px] opacity-70 italic group-hover:text-green-50">
                          {school.note}
                        </p>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md">
                    <Info size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 uppercase">
                    Hệ Cao đẳng
                  </h3>
                </div>
                <div className="p-5 rounded-2xl border border-blue-100 bg-white shadow-lg flex items-start gap-4">
                  <div className="bg-blue-600/10 p-3 rounded-xl text-blue-600">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-800 text-lg leading-none mb-1">
                      Trường Sĩ quan Không quân
                    </p>
                    <p className="text-sm text-slate-500 font-medium">
                      Chuyên ngành đào tạo Kỹ thuật hàng không bậc Cao đẳng.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-yellow-50 border-2 border-yellow-200 relative shadow-sm">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <MapPin size={100} />
                </div>
                <h4 className="text-xl font-bold text-yellow-900 mb-6 flex items-center gap-2 uppercase tracking-tight">
                  <MapPin className="text-yellow-600" /> Phân vùng Tuyển sinh
                </h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <p className="font-black text-yellow-800 text-sm uppercase">
                      Trường Lục quân 1
                    </p>
                    <p className="text-slate-600 text-sm font-medium">
                      Thí sinh hộ khẩu từ tỉnh Quảng Bình trở ra phía Bắc.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <p className="font-black text-yellow-800 text-sm uppercase">
                      Trường Lục quân 2
                    </p>
                    <p className="text-slate-600 text-sm font-medium">
                      Thí sinh hộ khẩu từ tỉnh Quảng Trị trở vào phía Nam.
                      (Thường trú ≥ 3 năm).
                    </p>
                  </div>
                </div>
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
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {ADMISSION_PROCESS.map((step, idx) => (
              <div key={idx} className="relative group h-full">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-md hover:bg-white/10 transition-all h-full flex flex-col shadow-2xl">
                  <div className="w-16 h-16 bg-yellow-400 text-red-900 rounded-2xl flex items-center justify-center font-black text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-[0_10px_20px_rgba(251,191,36,0.3)]">
                    {step.step}
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                    {step.title}
                  </h4>
                  {step.time && (
                    <div className="flex items-center gap-2 text-yellow-400 font-black mb-4 text-sm bg-yellow-400/10 px-3 py-1.5 rounded-full w-fit">
                      <Calendar size={16} /> {step.time}
                    </div>
                  )}
                  {step.location && (
                    <div className="flex items-start gap-2 text-slate-300 mb-6 text-sm italic">
                      <MapPin
                        size={16}
                        className="mt-1 shrink-0 text-red-400"
                      />
                      <span>{step.location}</span>
                    </div>
                  )}
                  <ul className="space-y-4 mt-auto">
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
                  {step.step === 3 && (
                    <div className="mt-8 p-4 bg-red-600/20 border border-red-500/30 rounded-2xl shadow-inner">
                      <p className="text-[10px] font-black text-red-400 flex items-center gap-2 uppercase tracking-widest mb-1">
                        <AlertTriangle size={14} /> Chú ý quan trọng
                      </p>
                      <p className="text-xs text-white leading-tight font-bold">
                        Nguyện vọng 1 (cao nhất) phải đăng ký vào trường Quân
                        đội đã qua sơ tuyển.
                      </p>
                    </div>
                  )}
                </div>
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="text-white/20" size={40} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Đầu mối liên hệ & Hỗ trợ"
            subtitle="Địa điểm đăng ký sơ tuyển và tư vấn trực tiếp cho thí sinh khu vực Tân Sơn Nhì, TPHCM."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Local Contact - Tan Son Nhi */}
            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Building2 size={150} />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-black mb-6 shadow-sm uppercase tracking-widest">
                  <MapPin size={14} /> Điểm tiếp nhận sơ tuyển
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-8 leading-none tracking-tighter">
                  Ban Chỉ Huy Quân Sự <br />
                  <span className="text-red-600">Phường Tân Sơn Nhì</span>
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white rounded-[1.25rem] shadow-md flex items-center justify-center shrink-0 text-slate-400 group-hover:text-red-600 transition-colors">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                        Địa chỉ chính thức
                      </p>
                      <p className="text-slate-800 font-bold text-lg leading-tight">
                        48 Tân Quý, Phường Tân Sơn Nhì, Khu phố 32, Phường Tân
                        Sơn Nhì, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white rounded-[1.25rem] shadow-md flex items-center justify-center shrink-0 text-red-600 group-hover:scale-110 transition-transform">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                        Đường dây nóng hỗ trợ
                      </p>
                      <a
                        href="tel:0775674101"
                        className="text-3xl font-black text-slate-900 hover:text-red-600 transition-colors tracking-tight"
                      >
                        077.567.4101
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-slate-200">
                  <a
                    href="https://www.google.com/maps/place/48+%C4%90.T%C3%A2n+Qu%C3%BD,+T%C3%A2n+Qu%C3%BD,+T%C3%A2n+Ph%C3%BA,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+700000,+Vietnam/@10.796862,106.614776,17z/data=!3m1!4b1!4m6!3m5!1s0x31752bf9b11b22fd:0x242eeee9bd121030!8m2!3d10.796862!4d106.6196469!16s%2Fg%2F11fsjw0g9x?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-red-600 transition-all uppercase text-sm tracking-widest"
                  >
                    Mở chỉ đường trên Google Maps <ExternalLink size={16} />
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
                      290 Cách Mạng Tháng Tám, Phường 10, Quận 3, TP. Hồ Chí
                      Minh
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
                    phát hồ sơ và hướng dẫn miễn phí.
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
                        bg-white rounded-2xl p-6 shadow
                        ${isLastOdd ? "md:col-span-2" : ""}
                      `}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-red-500 text-white font-bold px-3 py-1 rounded-full">
                          {group.code}
                        </span>
                        <h3 className="font-semibold text-slate-800">
                          {group.subjects}
                        </h3>
                      </div>

                      {/* Targets */}
                      <div className="flex flex-wrap gap-2">
                        {group.target.map((t) => (
                          <span
                            key={t}
                            className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium"
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
              <div className="flex items-center gap-3 sm:gap-5">
                {/* ICON */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 military-gradient rounded-xl flex items-center justify-center text-yellow-400 shadow-xl ring-4 ring-white shrink-0">
                  <Star fill="currentColor" size={26} />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  {/* Mobile */}
                  <p className="sm:hidden text-white font-extrabold text-sm leading-snug tracking-tight">
                    BỘ TƯ LỆNH TP. HCM
                  </p>

                  {/* Desktop */}
                  <p className="hidden sm:block text-white font-extrabold text-lg tracking-widest leading-none">
                    BỘ TƯ LỆNH THÀNH PHỐ HỒ CHÍ MINH
                  </p>

                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-tight text-white/70 truncate">
                    Ban chỉ huy Quân sự Phường Tân Sơn Nhì
                  </p>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm font-bold text-slate-600 leading-relaxed mb-2">
                  © 2026 Cổng Thông Tin Tuyển Sinh Quân Đội - Tân Sơn Nhì, Thành
                  phố Hồ Chí Minh. <br />
                  Vì sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam XHCN.
                </p>
                <div className="flex justify-center md:justify-end gap-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
