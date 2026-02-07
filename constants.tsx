
import React from 'react';
import { Shield, BookOpen, GraduationCap, Heart, Calendar, Users, MapPin, Award } from 'lucide-react';
import { Benefit, School, AdmissionStep, ExamGroup } from './types';

export const BENEFITS: Benefit[] = [
  {
    title: "Chế độ đãi ngộ",
    description: "Ăn, ở, quân trang hoàn toàn miễn phí trong suốt quá trình học tập.",
    icon: "Shield"
  },
  {
    title: "Học phí & Phụ cấp",
    description: "Không phải đóng học phí, nhận phụ cấp sinh hoạt phí hàng tháng.",
    icon: "Heart"
  },
  {
    title: "Hỗ trợ Gia đình",
    description: "Gia đình được hỗ trợ BHYT và các khoản trợ cấp khó khăn theo quy định.",
    icon: "Users"
  },
  {
    title: "Đầu ra đảm bảo",
    description: "Tốt nghiệp được phong quân hàm sĩ quan và phân công công tác ngay.",
    icon: "Award"
  }
];

export const SCHOOLS: School[] = [
  { name: "Học viện Kỹ thuật Quân sự", category: 'Academy' },
  { name: "Học viện Quân y", category: 'Academy' },
  { name: "Học viện Hậu cần", category: 'Academy' },
  { name: "Học viện Phòng không - Không quân", category: 'Academy' },
  { name: "Học viện Hải quân", category: 'Academy' },
  { name: "Học viện Biên phòng", category: 'Academy' },
  { name: "Học viện Khoa học quân sự", category: 'Academy' },
  { name: "Trường Sĩ quan Lục quân 1", category: 'Academy', note: "Tuyển thí sinh từ Quảng Bình trở ra Bắc" },
  { name: "Trường Sĩ quan Lục quân 2", category: 'Academy', note: "Tuyển thí sinh từ Quảng Trị trở vào Nam (thường trú ≥ 3 năm)" },
  { name: "Trường Sĩ quan Thông tin", category: 'Academy' },
  { name: "Trường Sĩ quan Công binh", category: 'Academy' },
  { name: "Trường Sĩ quan Đặc công", category: 'Academy' },
  { name: "Trường Sĩ quan Pháo binh", category: 'Academy' },
  { name: "Trường Sĩ quan Tăng thiết giáp", category: 'Academy' },
  { name: "Trường Sĩ quan Phòng hóa", category: 'Academy' },
  { name: "Trường Sĩ quan Không quân", category: 'College', note: "Đào tạo Kỹ thuật hàng không" }
];

export const ADMISSION_PROCESS: AdmissionStep[] = [
  {
    step: 1,
    title: "Sơ tuyển",
    time: "25/3 – trước 20/5",
    location: "Ban TSQS xã/phường/đặc khu hoặc đơn vị cấp trung đoàn",
    content: ["Nộp hồ sơ lý lịch", "Khám sức khỏe quân sự", "Viết phiếu đăng ký sơ tuyển"]
  },
  {
    step: 2,
    title: "Thi tốt nghiệp THPT",
    content: ["Sử dụng kết quả thi THPT quốc gia để xét tuyển vào các trường quân đội"]
  },
  {
    step: 3,
    title: "Đăng ký xét tuyển",
    content: ["BẮT BUỘC: Trường Quân đội phải để Nguyện vọng 1", "Chỉ được chọn 1 khối: Quân đội hoặc Công an"]
  }
];

export const EXAM_GROUPS: ExamGroup[] = [
  { code: "A00", subjects: "Toán, Lý, Hóa" },
  { code: "A01", subjects: "Toán, Lý, Anh" },
  { code: "B00", subjects: "Toán, Hóa, Sinh", target: "Học viện Quân y" },
  { code: "C00", subjects: "Văn, Sử, Địa" },
  { code: "D01/02/04", subjects: "Toán, Văn, Ngoại ngữ", target: "Các ngành ngôn ngữ" }
];
