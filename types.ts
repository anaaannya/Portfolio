
export interface Project {
  id: string;
  title: string;
  category: 'Frontend' | 'UI/UX' | 'WordPress' | 'Graphic';
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  type: 'Frontend' | 'Security';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Development' | 'Design' | 'Security';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent: boolean;
}
