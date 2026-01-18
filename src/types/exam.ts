export interface Exam {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  applicationDeadline: string;
  description: string;
  eligibility: string;
  syllabus: {
    subject: string;
    topics: string[];
  }[];
  prepMaterials: {
    title: string;
    type: 'PDF' | 'Video' | 'Link';
    url: string;
  }[];
  notifications: {
    date: string;
    message: string;
  }[];
}
