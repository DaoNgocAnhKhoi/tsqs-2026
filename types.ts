
export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface School {
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
  target?: string;
}
