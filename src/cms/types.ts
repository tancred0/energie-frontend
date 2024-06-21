import type {
  Seo,
  Slug,
  Rating,
  AddSection,
  Faq,
} from "./typesLowLevel";



export interface StateData {
  stateName: string;
  stateSlug: Slug;
  seo: Seo;
  rating: Rating;
}


export interface BlogPost {
  public: boolean;
  publishedAt: string;
  rating: Rating;
  title: string;
  introText: string;
  summary: string;
  slug: Slug;
  category: string;
  breadcrumbTitle: string;
  seo: Seo;
  mainImage: any;
  readingTime: string;
  sections: AddSection[];
  sources: string;
  faqTitle: string;
  faqsList: Faq[];
}