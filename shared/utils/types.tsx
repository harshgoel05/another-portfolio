// Personal Details
export interface PersonalDetails {
  name: string;
  logo: string;
  about: string;
  socialMedia: SocialMedia[];
  work: Work;
  resume: string;
  profile_img: string;
  calendyUrl: string;
}

export interface Work {
  company: string;
  designation: string;
  logo: string;
}

export interface SocialMedia {
  link: string;
  image_file: string;
  alt_text: string;
}

// Project Details

export interface Project {
  slug: string;
  tagline: string;
  description: string;
  img: string;
  name: string;
  tags: string[];
  github: string;
  category: string[];
  featured: boolean;
  launch_video?: string;
  url?: string;
}

// company

export interface Company {
  name: string;
  logo_url?: string;
  featured?: boolean;
  position: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  src: string;
}
