export interface Slug {
  _type: string;
  current: string;
}

export interface Rating {
  avgRating: number;
  count: number;
}

export interface Seo {
  title: string;
  metaDescription: string;
  priority?: number
}

export interface Faq {
  question: string;
  answer: BlockContent;
}
export interface ImageAsset {
  _ref: string;
  _type: string;
}

export interface ImageWithDetails {
  altText: string;
  image: {
    _ref: string;
    _type: string;
    asset: ImageAsset;
  };
  link: string;
}

export interface AssetReference {
  _ref: string;
  _type: 'reference';
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

export interface AddSection {
  heading: string;
  text: BlockContent;
}
