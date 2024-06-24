import type {
  Seo,
  ImageWithDetails,
  Slug,
  Rating,
  Faq,
  BlockContent,
  AddSections,
  AssetReference,
} from "./typesLowLevel";



export interface Blog {
  title: string;
  breadcrumbTitle: string;
  slug: Slug;

  public: boolean;
  publishedAt: string;
  seo: Seo;
  rating: Rating;
  readingTime: string;

  introText: string;
  summary: BlockContent;
  mainImage: ImageWithDetails;

  content: AddSections[];
  sources: BlockContent;
  faqTitle: string;
  faqsList: Faq[];
}


export interface TopCategory {
  content: Blog;
}

export interface MainCategory {
  content: Blog;
  topCategory: AssetReference;
}

export interface SubCategory {
  content: Blog;
  topCategory: AssetReference;
  mainCategory: AssetReference;
}

export interface RatgeberBlog {
  category: string;
  content: Blog;
}