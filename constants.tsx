import {
  Shield,
  BookOpen,
  GraduationCap,
  Heart,
  Calendar,
  Users,
  MapPin,
  Award,
  Wallet,
  Star,
  Briefcase,
} from "lucide-react";
import {
  Benefit,
  School,
  AdmissionStep,
  ExamGroup,
  UniversityFullDetail,
} from "./types";

export const BENEFITS: Benefit[] = [
  {
    title: "Bảo đảm toàn bộ chi phí đào tạo",
    description:
      "Học viên được Quân đội chu cấp toàn bộ ăn, ở, quân trang; không phải đóng học phí; được cấp phát miễn phí trang thiết bị, đồ dùng học tập và sử dụng cơ sở vật chất phục vụ học tập, rèn luyện, nghiên cứu khoa học.",
    icon: Shield,
  },
  {
    title: "Phụ cấp sinh hoạt hàng tháng",
    description:
      "Trong suốt quá trình đào tạo, tất cả học viên đều được hưởng phụ cấp sinh hoạt phí theo quy định của Bộ Quốc phòng.",
    icon: Wallet,
  },
  {
    title: "Chính sách đối với thân nhân",
    description:
      "Thân nhân (bố mẹ đẻ, bố mẹ nuôi hợp pháp, vợ, con...) nếu chưa có bảo hiểm y tế sẽ được Quân đội mua bảo hiểm; gia đình có khó khăn đột xuất được xem xét trợ cấp; con đẻ, con nuôi được hưởng chính sách miễn giảm học phí theo quy định của Nhà nước.",
    icon: Users,
  },
  {
    title: "Đào tạo toàn diện & khen thưởng",
    description:
      "Học viên được học tập, nghiên cứu khoa học và rèn luyện toàn diện về chính trị, đạo đức, tác phong, điều lệnh Quân đội. Hằng năm, học viên đạt loại giỏi, xuất sắc và rèn luyện tốt được hưởng chế độ khen thưởng theo quy định.",
    icon: Star,
  },
  {
    title: "Chế độ nghỉ & văn bằng quốc gia",
    description:
      "Học viên được hưởng chế độ nghỉ hè, nghỉ Tết theo quy định; tốt nghiệp được cấp bằng thuộc hệ thống văn bằng quốc gia.",
    icon: GraduationCap,
  },
  {
    title: "Phong quân hàm sĩ quan",
    description:
      "Tốt nghiệp được Bộ Quốc phòng phong quân hàm sĩ quan: mặc định cấp Thiếu úy; các trường hợp đủ điều kiện được phong Trung úy hoặc Thượng úy theo thành tích, chuyên ngành đào tạo và tiêu chuẩn quy định.",
    icon: Award,
  },
  {
    title: "Phân công công tác sau tốt nghiệp",
    description:
      "Học viên phải chấp hành phân công công tác của Bộ Quốc phòng căn cứ mục tiêu đào tạo và nhu cầu đơn vị; học viên tốt nghiệp giỏi, xuất sắc được ưu tiên xem xét nguyện vọng.",
    icon: Briefcase,
  },
];

export const SCHOOLS: School[] = [
  // ===== 07 HỌC VIỆN =====
  {
    id: "hv_ktqs",
    name: "Học viện Kỹ thuật Quân sự",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "hv_qy",
    name: "Học viện Quân y",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "hv_hc",
    name: "Học viện Hậu cần",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "hv_bp",
    name: "Học viện Biên phòng",
    category: "Academy",
    note: "Bắc: Hà Tĩnh trở ra. Nam: phân theo QK4 (Quảng Trị, Huế), QK5, QK7, QK9",
  },
  {
    id: "hv_hq",
    name: "Học viện Hải quân",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "hv_pkkq",
    name: "Học viện Phòng không - Không quân",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "hv_khqs",
    name: "Học viện Khoa học quân sự",
    category: "Academy",
    note: "Ngành ngoại ngữ điểm chuẩn chung toàn quốc theo từng đối tượng",
  },

  // ===== 11 TRƯỜNG SĨ QUAN (ĐẠI HỌC) =====
  {
    id: "sq_lq1",
    name: "Trường Sĩ quan Lục quân 1",
    category: "Academy",
    note: "Tuyển phía Bắc (Hà Tĩnh trở ra)",
  },
  {
    id: "sq_lq2",
    name: "Trường Sĩ quan Lục quân 2",
    category: "Academy",
    note: "Tuyển phía Nam: QK4 (Quảng Trị, Huế), QK5, QK7, QK9",
  },
  {
    id: "sq_ct",
    name: "Trường Sĩ quan Chính trị",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "sq_pb",
    name: "Trường Sĩ quan Pháo binh",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "sq_cb",
    name: "Trường Sĩ quan Công binh",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "sq_tt",
    name: "Trường Sĩ quan Thông tin",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "sq_kq",
    name: "Trường Sĩ quan Không quân",
    category: "Academy",
    note: "Phi công (7860203PC) điểm chuẩn chung toàn quốc; UAV (7860203AV) chia Bắc/Nam",
  },
  {
    id: "sq_ttg",
    name: "Trường Sĩ quan Tăng thiết giáp",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "sq_dc",
    name: "Trường Sĩ quan Đặc công",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "sq_ph",
    name: "Trường Sĩ quan Phòng hóa",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },
  {
    id: "sq_ktqs",
    name: "Trường Sĩ quan Kỹ thuật quân sự",
    category: "Academy",
    note: "Chỉ tiêu riêng Bắc (Hà Tĩnh trở ra) và Nam (Quảng Trị trở vào)",
  },

  // ===== 06 TRƯỜNG CAO ĐẲNG =====
  {
    id: "cd_kq",
    name: "Trường Sĩ quan Không quân (Cao đẳng)",
    category: "College",
    note: "Tuyển theo chỉ tiêu Bộ Quốc phòng",
  },
  {
    id: "cd_kt_pkkq",
    name: "Cao đẳng Kỹ thuật Phòng không - Không quân",
    category: "College",
  },
  {
    id: "cd_kt_hq",
    name: "Cao đẳng Kỹ thuật Hải quân",
    category: "College",
  },
  {
    id: "cd_kt_tt",
    name: "Cao đẳng Kỹ thuật Thông tin",
    category: "College",
  },
  {
    id: "cd_kt_mm",
    name: "Cao đẳng Kỹ thuật Mật mã",
    category: "College",
    note: "Phải đáp ứng tiêu chuẩn chính trị theo Nghị định 03/2024/NĐ-CP ngày 05/09/2024 của Chính phủ",
  },
  {
    id: "cd_cnqp",
    name: "Cao đẳng Công nghiệp Quốc phòng",
    category: "College",
  },
];

export const ADMISSION_PROCESS = [
  {
    step: 1,
    title: "Đăng ký & Nộp hồ sơ sơ tuyển",
    time: "25/02/2026 - 15/04/2026",
    location: "Ban TSQS cấp xã (thanh niên) hoặc cấp trung đoàn (quân nhân)",
    content: [
      "Mỗi thí sinh làm 02 bộ hồ sơ riêng biệt: Hồ sơ sơ tuyển & Hồ sơ xét tuyển.",
      "Chỉ được đăng ký Nguyện vọng 1 vào duy nhất 01 trường Quân đội.",
      "Nộp trực tiếp, tự kê khai bằng 01 loại mực (khuyến nghị bút xanh 0.5mm).",
      "Mang theo CCCD + mẫu CT07 xác nhận cư trú để đối chiếu.",
      "Không nộp học bạ bản sao khi sơ tuyển.",
      "Nộp 01 giấy chứng nhận ưu tiên (nếu có, sao y công chứng).",
      "Nộp 02 hồ sơ sơ tuyển trở lên sẽ bị loại khỏi toàn bộ hệ quân sự.",
    ],
  },
  {
    step: 2,
    title: "Khám sức khỏe sơ tuyển",
    time: "Hoàn thành trước 15/04/2026",
    location: "Hội đồng khám khu vực / Bệnh viện quân y",
    content: [
      "Tuyển thí sinh đạt Loại 1 hoặc Loại 2 theo Thông tư 105 & 106.",
      "Khám đủ các chuyên khoa: thể lực, mắt, tai mũi họng, nội, ngoại, da liễu...",
      "Phi công quân sự phải được Quân chủng PK-KQ kết luận đủ điều kiện riêng.",
      "Tuyệt đối không để thí sinh có nguyện vọng mà chưa được khám.",
      "Không đạt sơ tuyển sẽ có kết luận và thông báo bằng văn bản.",
    ],
  },
  {
    step: 3,
    title: "Hoàn thiện ảnh & Hồ sơ chính thức",
    time: "Khi nộp hồ sơ sơ tuyển",
    location: "Nộp trực tiếp tại nơi tiếp nhận hồ sơ",
    content: [
      "Ảnh 4x6 nền trắng, kiểu căn cước, chưa chỉnh sửa.",
      "Nam nữ đầu tóc gọn gàng, mặc áo có cổ.",
      "Số lượng: 10 ảnh (02 ảnh phiếu 1A,1B; 01 sơ tuyển sức khỏe; 01 lý lịch; còn lại ghi tên bỏ túi hồ sơ).",
      "Cán bộ đối chiếu ảnh với CCCD trước khi ký nhận.",
      "Sau khi dán ảnh và nhận hồ sơ: không được trả lại hồ sơ cho thí sinh.",
      "Nếu bắt buộc trả lại phải thực hiện quy trình từ đầu.",
    ],
  },
  {
    step: 4,
    title: "Tham dự Kỳ thi Tốt nghiệp THPT 2026",
    time: "Theo lịch Bộ GD&ĐT",
    content: [
      "Thí sinh sử dụng kết quả thi THPT 2026 để xét tuyển.",
      "Đăng ký dự thi theo quy định của Bộ GD&ĐT.",
      "Ban TSQS không thu lệ phí dự thi THPT.",
    ],
  },
  {
    step: 5,
    title: "Lệ phí & Bàn giao hồ sơ",
    time: "24/04/2026",
    location:
      "Cơ quan đại diện phía Nam – Cục Hậu cần (18 Bis Cộng Hòa, TP.HCM)",
    content: [
      "Lệ phí sơ tuyển: 50.000đ/thí sinh.",
      "Tiền hồ sơ: 10.000đ/bộ.",
      "Ban TSQS Thành phố tổng hợp và bàn giao hồ sơ về các trường.",
      "Chỉ xét tuyển thí sinh đăng ký Nguyện vọng 1.",
    ],
  },
  {
    step: 6,
    title: "Nhận Giấy báo đủ điều kiện sơ tuyển",
    time: "Sau khi trường xét duyệt",
    location: "Theo thông báo của trường đăng ký",
    content: [
      "Thí sinh nhận Giấy báo đủ điều kiện sơ tuyển.",
      "Hoàn thành quy trình sơ tuyển.",
      "Được phép đăng ký xét tuyển nguyện vọng 1 vào trường đã sơ tuyển.",
    ],
  },
];

export const EXAM_GROUPS: ExamGroup[] = [
  {
    code: "A00",
    subjects: "Toán, Vật lý, Hóa học",
    target: [
      "HV Kỹ thuật QS",
      "HV Hậu cần",
      "HV PK-KQ",
      "HV Hải quân",
      "HV KHQS (Trinh sát kỹ thuật)",
      "HV Quân y",
      "SQ Lục quân 1",
      "SQ Lục quân 2",
      "SQ Thông tin",
      "SQ Công binh",
      "SQ Đặc công",
      "SQ Pháo binh",
      "SQ Tăng thiết giáp",
      "SQ Phòng hóa",
      "SQ Không quân",
      "SQ KTQS",
    ],
  },

  {
    code: "A01",
    subjects: "Toán, Vật lý, Tiếng Anh",
    target: [
      "HV Kỹ thuật QS",
      "HV Hậu cần",
      "HV PK-KQ",
      "HV Hải quân",
      "HV KHQS (Trinh sát kỹ thuật)",
      "SQ Lục quân 1",
      "SQ Lục quân 2",
      "SQ Thông tin",
      "SQ Công binh",
      "SQ Đặc công",
      "SQ Pháo binh",
      "SQ Tăng thiết giáp",
      "SQ Phòng hóa",
      "SQ Không quân",
      "SQ KTQS",
    ],
  },

  {
    code: "A0T",
    subjects: "Toán, Vật lý, Tin học",
    target: ["HV Kỹ thuật QS", "HV Hậu cần"],
  },

  {
    code: "X06",
    subjects: "Toán, Vật lý, Tin học",
    target: ["HV Hậu cần"],
  },

  {
    code: "B00",
    subjects: "Toán, Hóa học, Sinh học",
    target: ["HV Quân y"],
  },

  {
    code: "C01",
    subjects: "Ngữ văn, Toán, Vật lý",
    target: ["HV Hậu cần", "HV Hải quân", "HV PK-KQ", "SQ Chính trị"],
  },

  {
    code: "C03",
    subjects: "Ngữ văn, Toán, Lịch sử",
    target: ["HV Biên phòng", "SQ Chính trị"],
  },

  {
    code: "C04",
    subjects: "Ngữ văn, Toán, Địa lý",
    target: ["HV Biên phòng", "SQ Chính trị"],
  },

  {
    code: "D01",
    subjects: "Toán, Ngữ văn, Tiếng Anh",
    target: ["HV KHQS", "HV Biên phòng", "SQ Chính trị"],
  },

  {
    code: "D02",
    subjects: "Toán, Ngữ văn, Tiếng Nga",
    target: ["HV KHQS"],
  },

  {
    code: "D04",
    subjects: "Toán, Ngữ văn, Tiếng Trung",
    target: ["HV KHQS"],
  },

  {
    code: "D07",
    subjects: "Toán, Hóa học, Tiếng Anh",
    target: ["HV Quân y"],
  },

  {
    code: "Q00",
    subjects: "Theo ngành đặc thù",
    target: ["HV PK-KQ"],
  },
];

export const UNIVERSITY_DETAILS: Record<string, UniversityFullDetail> = {
  sq_cb: {
    id: "sq_cb",
    fullName: "TRƯỜNG SĨ QUAN CÔNG BINH",
    shortName: "Đại học Ngô Quyền",
    bannerImage: "/images/universities/sq_cb/banner.jpg",
    logo: "/images/universities/sq_cb/logo.png",
    gallery: [
      "/images/universities/sq_cb/gallery1.jpg",
      "/images/universities/sq_cb/gallery2.jpg",
      "/images/universities/sq_cb/gallery3.jpg",
    ],
    history: [
      "Tiền thân là Khoa Công binh của Trường Lục quân Trần Quốc Tuấn, Trường Sĩ quan Công binh ra đời ngày 26/12/1955 tại Bắc Giang.",
      "Từ 1956-1977: Xây dựng cơ sở tại Đáp Cầu, Bắc Ninh, đào tạo hàng vạn cán bộ đáp ứng yêu cầu chiến đấu cho các chiến trường và quốc tế (Lào, Campuchia).",
      "Từ 1977: Chuyển trụ sở về Thủ Dầu Một, Bình Dương. Phát triển hệ thống cơ sở vật chất, giảng đường, thao trường hiện đại.",
      "Năm 1998: Được giao nhiệm vụ đào tạo sĩ quan Công binh cấp phân đội bậc đại học.",
      "Năm 2013: Thủ tướng Chính phủ ra quyết định thành lập Trường Đại học Ngô Quyền trên cơ sở Trường Sĩ quan Công binh.",
    ],
    achievements: {
      highlights: [
        "Đã đào tạo gần 30.000 sĩ quan Công binh cho toàn quân.",
        "Nhiều học viên trở thành tướng lĩnh, cán bộ cao cấp của Đảng, Nhà nước và Quân đội.",
      ],
      medals: [
        "Đơn vị Anh hùng lực lượng vũ trang nhân dân.",
        "Huân chương Quân công hạng Nhất.",
        "4 Huân chương Chiến công hạng Nhất, Nhì.",
        "Huân chương Lao động hạng Nhì.",
        "Huân chương Itxala hạng Ba (CHDCND Lào tặng).",
        "Huân chương bảo vệ Tổ quốc hạng hai (Nhà nước Campuchia tặng).",
      ],
    },
    contact: {
      address:
        "Đường Bạch Đằng, phường Phú Cường, TP. Thủ Dầu Một, tỉnh Bình Dương",
      phone: "0274 3859632",
      email: "manhtran.army@gmail.com",
      website: "http://www.tsqcb.edu.vn",
    },
    faculty: {
      stats: [
        "100% giảng viên có trình độ đại học, 70% có trình độ sau đại học.",
        "2 Phó Giáo sư; 6 Nhà giáo Ưu tú.",
        "80% giảng viên có thâm niên nghề nghiệp từ 10 năm trở lên.",
        "Đội ngũ có nhiều kinh nghiệm thực tiễn chiến đấu và công tác.",
      ],
    },
    majors: {
      military: {
        title: "Đào tạo Sĩ quan Công binh cấp phân đội (Đại học)",
        list: ["Công trình", "Cầu đường", "Vượt sông", "Xe máy"],
      },
      civilian: {
        title: "Đào tạo Kỹ sư Dân sự",
        categories: [
          {
            name: "Kỹ thuật xây dựng",
            items: [
              "Xây dựng cầu đường bộ",
              "Xây dựng dân dụng và công nghiệp",
            ],
          },
          {
            name: "Kỹ thuật cơ khí",
            items: ["Cơ khí ô tô", "Máy xây dựng và xếp dỡ"],
          },
        ],
      },
    },
  },
};
