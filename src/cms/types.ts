import type {
  Seo,
  ImageWithDetails,
  Slug,
  Rating,
  Faq,
  BlockContent,
  AddSection,
  BlogReference,
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
  _updatedAt: string;
}

export interface MainCategory {
  topCategory: CategoryReference;
  blog: BlogType;
  _updatedAt: string;
}

export interface mainCategoryReference {
  topCategory: CategoryReference;
  blog: BlogReference;
}

export interface SubCategory {
  mainCategory: mainCategoryReference;
  blog: BlogType;
  _updatedAt: string;
}

export interface RatgeberBlog {
  category: string;
  blog: BlogType;
  _updatedAt: string;
}