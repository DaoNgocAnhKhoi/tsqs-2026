import { IconNode, LucideIcon } from "lucide-react";

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface School {
  id: string;
  name: string;
  category: 'Academy' | 'College';
  note?: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  time?: string;
  content: string[];
  location?: string;
}

export interface ExamGroup {
  code: string;
  subjects: string;
  target: Array<string>;
}

export interface UniversityFullDetail {
  id: string;
  fullName: string;
  shortName: string;
  bannerImage: string;   // thêm
  logo: string;          // thêm
  gallery?: string[];    // thêm (optional)
  history: string[];
  achievements: {
    highlights: string[];
    medals: string[];
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    website: string;
  };
  faculty: {
    stats: string[];
  };
  majors: {
    military: {
      title: string;
      list: string[];
    };
    civilian?: {
      title: string;
      categories: {
        name: string;
        items: string[];
      }[];
    };
  };
}