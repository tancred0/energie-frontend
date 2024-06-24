import type {
  Seo,
  ImageWithDetails,
  Slug,
  Rating,
  Faq,
  BlockContent,
  AddSection,
  AssetReference,
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
  content: BlogType;
}

export interface MainCategory {
  content: BlogType;
  topCategory: AssetReference;
}

export interface SubCategory {
  content: BlogType;
  topCategory: AssetReference;
  mainCategory: AssetReference;
}

export interface RatgeberBlog {
  category: string;
  content: BlogType;
}