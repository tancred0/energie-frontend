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

import infoIcon from "@/images/sources/info.svg";

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
  <li className="ml-8 pb-2 list-outside list-disc text-xl text-gray-600">{children}</li>
);

// Custom component for numbered list items
const NumberedListItem = ({ children }: ChildrenProps) => (
  <li
    className="list-decimal list-outside ml-8 mb-2 text-xl text-gray-600"
    style={{ listStyleType: "decimal" }}
  >
    {children}
  </li>
);

const InsideQuote = ({ children }: ChildrenProps) => (
  <div className="border-l-4 pl-4 my-4 py-3 border-blue-90 text-gray-600  text-xl">
    {children}
  </div>
);

const BlockQuote = ({ children }: ChildrenProps) => (
  <div className="p-4 bg-blue-10 border-l-4 border-blue-90 text-gray-600 my-4 text-xl">
    {children}
  </div>
);
// // Custom component for numbered lists
// const NumberedList = ({ children }: ChildrenProps) => (
//   <ol className="ml-8 list-decimal list-inside pb-4  ">{children}</ol>
// );

// // Custom component for bullet lists
// const BulletList = ({ children }: ChildrenProps) => (
//   <ul className="ml-8 list-outside list-disc pb-4">{children}</ul>
// );

const InfoBox: React.FC<PortableTextTypeComponentProps<any>> = ({ value }: any) => {
  return (
    <div className="m-1 mb-6 rounded-2xl bg-blue-10 py-4 px-8">
      <div className="flex gap-x-2 mb-4 mt-2 w-full border-b pb-4 border-blue-90">
        <Image src={infoIcon as StaticImageData} alt="summary" width={24} height={24} />
        <h3 className="text-blue-90 m-0">{value.heading}</h3>
      </div>
      <PortableTextRenderer input={value.text} />
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
    <>
      <img
        src={imageUrl(value.image)}
        className="mt-4 mb-4 mx-auto rounded-2xl"
        // width={0}
        // height={0}
        //  produces error if inside infobox http://localhost:3000/immobilienwissen/grundstueck-verkaufen
        loading="lazy"
        alt={value.altText}
      />
      <div className="text-lg mb-4 truncate">
        Quelle:{" "}
        <Link className="text-lg truncate" target="_blank" href={value.link}>
          {value.link}
        </Link>
      </div>
    </>
  )
}




export const sanityPortableTextComponents: Partial<PortableTextReactComponents> =
{
  block: {
    normal: P,
    strong: Strong,
    blockquote: BlockQuote,
    insidequote: InsideQuote,
    // bullet: BulletList,
    // number: NumberedList,
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

const summaryBulletlist = ({ children }: ChildrenProps) => (
  <li className="">{children}</li>
);

const summaryBulletListItem = ({ children }: ChildrenProps) => (
  <li
    className=" mb-2 list-inside list-disc text-blue-90 "
    style={{ marginLeft: '12px' }}
  >{children}</li>
);

const summaryTextComponents: Partial<PortableTextReactComponents> =
{
  block: {
    normal: summary,
    bullet: summaryBulletlist,
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

