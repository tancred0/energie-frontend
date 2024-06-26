/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { Sanity } from "@/cms/Sanity";
import type { PortableTextReactComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import infoIcon from "@/images/general/info.svg";

const sanity = new Sanity();
const imageBuilder = imageUrlBuilder(sanity.client);
export function imageUrl(source: string) {
  return `${imageBuilder.image(source).url()}?auto=format`;
}

type ChildrenProps = {
  children?: React.ReactNode;
  className?: string;
  asset?: {
    _ref?: string;
  }
};

const P = ({ children }: ChildrenProps) => {
  return (
    <p className="text-xl mb-3 leading-[28px] text-gray-600 ">{children}</p>
  );
};

const Strong = ({ children }: ChildrenProps) => {
  return (
    <span className="text-xs font-semibold text-gray-600 ">{children}</span>
  );
};

const BulletListItem = ({ children }: ChildrenProps) => (
  <li>{children}</li>
);

// Custom component for numbered list items
const NumberedListItem = ({ children }: ChildrenProps) => (
  <li style={{ listStyleType: "decimal" }}>{children}</li>
);

const InsideQuote = ({ children }: ChildrenProps) => (
  <div className="border-l-4 pl-4 my-4 py-3 border-blue-90  text-xl">
    {children}
  </div>
);

const BlockQuote = ({ children }: ChildrenProps) => (
  <div className="p-4 bg-blue-10 border-l-4 border-blue-90 my-4 text-xl">
    {children}
  </div>
);

const InfoBox: React.FC<PortableTextTypeComponentProps<any>> = ({ value }: any) => {
  return (
    <div className="md:m-1 mb-6 rounded-2xl bg-blue-10 py-4 px-8">
      <div className="flex gap-x-2 my-2 w-full border-b border-blue-40/50 items-center">
        <Image src={infoIcon as StaticImageData} alt="summary" width={24} height={24} />
        <div className="h4">{value.heading}</div>
      </div>
      <div className="pt-4">
        <PortableTextRenderer input={value.text} />
      </div>
    </div>
  )
}


const ImageComponent: React.FC<PortableTextTypeComponentProps<any>> = ({ value }: any) => {
  return (
    <img
      src={imageUrl(value)}
      className="mt-4 mb-8 mx-auto rounded-2xl"
      loading="lazy"
      // width={0}
      // height={0}
      alt="Alt Text"
    />
  )
}

const ImageComponentWithDetails: React.FC<PortableTextTypeComponentProps<any>> = ({ value }: any) => {
  return (
    <div className="w-full">
      <img
        src={imageUrl(value.image)}
        className="my-4 rounded-2xl"
        // width={0}
        // height={0}
        //  produces error if inside infobox http://localhost:3000/immobilienwissen/grundstueck-verkaufen
        loading="lazy"
        alt={value.altText}
      />
      <PortableBlogRenderer input={value.description} />
    </div>
  )
}




export const sanityPortableTextComponents: Partial<PortableTextReactComponents> =
{
  block: {
    normal: P,
    strong: Strong,
    blockquote: BlockQuote,
    insidequote: InsideQuote,
  },
  listItem: {
    bullet: BulletListItem,
    number: NumberedListItem,
  },
  types: {
    image: ImageComponent,
    imageWithDetails: ImageComponentWithDetails,
    infoBox: InfoBox,
  },
};

export const PortableTextRenderer = ({ input }: { input: any }) => {
  return (
    <PortableText value={input} components={sanityPortableTextComponents} />
  );
};
























const summary = ({ children }: ChildrenProps) => {
  return (
    <p className="md:text-xl mb-4 leading-[28px] text-gray-600 ">{children}</p>
  );
};

const summaryBulletListItem = ({ children }: ChildrenProps) => (
  <li>{children}</li>
);

const summaryTextComponents: Partial<PortableTextReactComponents> =
{
  block: {
    normal: summary,
  },
  listItem: {
    bullet: summaryBulletListItem,
  },
};

export const SummaryTextRender = ({ input }: { input: any }) => {
  return (
    <PortableText value={input} components={summaryTextComponents} />
  );
};













export const PortableBlogRenderer = ({ input }: { input: any }) => {
  let h2Counter = 1;

  const customComponents = {
    ...sanityPortableTextComponents,
    block: {
      ...sanityPortableTextComponents.block, // Spread existing block types
      h2: (props: any) => {
        const id = `sec${h2Counter}`;
        h2Counter += 1;
        return <h2 id={id}>{props.children}</h2>;
      },
    },
  };
  // @ts-expect-error: problems with passing customComponents as props
  return <PortableText value={input} components={customComponents} />;
};

