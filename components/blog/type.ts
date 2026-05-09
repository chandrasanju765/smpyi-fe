export interface Blog {
  id: number;
  slug: string;
  title: string;
  category: string;
  categoryColor?: string;
  image: string;
  author: string;
  authorAvatar?: string;
  date?: string;
  readTime: string;
  views: number;
  excerpt: string;
}