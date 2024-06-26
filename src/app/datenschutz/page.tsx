import { Sanity } from "@/cms/Sanity";
import BlogContent from "@/components/blogs/BlogContent";

export default async function Page() {
  const sanity = new Sanity();
  const data = await sanity.getLegalNotice("datenschutz");
  return (
    <>
      <meta name="robots" content="noindex" />
      <div className="content-blog mt-10">
        <h1>Datenschutz</h1>
        <BlogContent sections={data.blog.content} />
      </div>
    </>
  );
}


