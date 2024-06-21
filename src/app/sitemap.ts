// import { Sanity } from "@/cms/Sanity";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const URL = process.env.URL;
    // const sanity = new Sanity();
    const date = new Date().toISOString();
    


    const mainPages: MetadataRoute.Sitemap = [
        {
            url: `${URL}`,
            lastModified: date,
            // priority: 1,            
        },
    ];


    return [
        ...mainPages,
    ];
}
