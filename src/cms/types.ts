import type {
  Seo,
  ImageWithDetails,
  Slug,
  Rating,
  Faq,
  BlockContent,
  AddSection,
  CategoryReference
} from "./typesLowLevel";



export interface BlogType {
  title: string;
  breadcrumbTitle: string;
  slug: Slug;

  public: boolean;
  publishedAt: string;
  seo: Seo;
  rating: Rating;
  readingTime: number;

  introText: string;
  summary: BlockContent;
  mainImage: ImageWithDetails;

  content: AddSection[];
  sources: BlockContent;
  faqTitle: string;
  faqsList: Faq[];
}

export interface TopCategory {
  blog: BlogType;
}

export interface MainCategory {
  topCategory: CategoryReference;
  blog: BlogType;
}

export interface SubCategory {
  topCategory: CategoryReference;
  mainCategory: CategoryReference;
  blog: BlogType;
}

export interface RatgeberBlog {
  category: string;
  blog: BlogType;
}