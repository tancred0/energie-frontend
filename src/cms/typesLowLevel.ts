
export interface Reference {
  _ref: string;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface Rating {
  avgRating: number;
  count: number;
}

export interface BlockContent {
  _key: string;
  _type: string;
  children?: Children[];
  markDefs?: any[];
  style?: string;
  asset?: AssetReference; // Add this line if you want to support images directly in BlockContent
}

export interface Children {
  _key: string;
  marks: any[];
  text: string;
}

export interface AssetReference {
  _ref: string;
  _type: 'reference';
}

export interface Seo {
  title: string;
  metaDescription: string;
}

export interface SeowithPrio {
  title: string;
  metaDescription: string;
  priority?: number
}

export interface AddSection {
  heading: string;
  text: BlockContent;
}

export interface Faq {
  question: string;
  answer: BlockContent;
}

export interface MainImage {
  _type: string
  asset: ImageAsset
}

export interface ImageAsset {
  _ref: string
  _type: string
}