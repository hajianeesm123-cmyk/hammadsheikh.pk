
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Leadership' | 'Cloud';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
