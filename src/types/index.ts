export type PageType = 'home' | 'students' | 'colleges' | 'corporates' | 'training' | 'ambassador' | 'success' | 'about' | 'contact' | 'auth' | 'dashboard';

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  branch: string;
  year: number;
  skills: string[];
  careerInterest: string;
  readinessScore: number;
}

export interface College {
  id: string;
  name: string;
  location: string;
  contactPerson: string;
  email: string;
  phone: string;
  studentCount: number;
  courses: string[];
  subscription: 'basic' | 'premium' | 'enterprise';
}

export interface Corporate {
  id: string;
  name: string;
  industry: string;
  hiringRoles: string[];
  hiringVolume: 'low' | 'medium' | 'high';
  contactPerson: string;
  email: string;
}

export interface TrainingPartner {
  id: string;
  instituteName: string;
  coursesOffered: string[];
  trainers: number;
  experience: number;
  location: string;
}

export interface SuccessStory {
  id: string;
  studentName: string;
  college: string;
  company: string;
  role: string;
  package: string;
  testimonial: string;
}