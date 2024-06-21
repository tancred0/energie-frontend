
import InfoCard from "../general/InfoCard";

import electricityImg from "@/images/main/productRange/electricity.png"
import houseImg from "@/images/main/productRange/house.png";
import roofImg from "@/images/main/productRange/roof.png";

const headings = {
  suptitle: "Nützliche und wertvolle Informationen",
  title: "Entdecken Sie unseren Ratgeber",
  subtitle: "Lesen Sie hier unsere Beiträge für eine energieeffiziente Zukunft in Ihrem Eigenheim.",
};

const articles = [
  {
    title: "Energie sparen",
    description: "Erfahren Sie, wie Sie Ihren Stromverbrauch reduzieren können. Wir zeigen Ihnen, wie Sie Energie sparen können.",
    image: electricityImg,
    href: "/energie-sparen",
  },
  {
    title: "Sanieren & Bauen",
    description: "Erfahren Sie, wie Sie Ihr Haus sanieren und bauen können. Wir zeigen Ihnen, wie Sie Ihr Haus energieeffizient gestalten können.",
    image: houseImg,
    href: "/sanieren-bauen",
  },
  {
    title: "Individuelle Beratung",
    description: "Erfahren Sie, wie Sie eine individuelle Beratung erhalten können. Wir zeigen Ihnen, wie Sie eine individuelle Beratung erhalten können.",
    image: roofImg,
    href: "/individuelle-beratung",
  },
];


export default function RatgeberInfo() {
  return (
    <section className="max-w-[1200px] mx-auto mt-16 mb-10 px-10">
      <div className="text-center">
        <h3 className="text-lg">{headings.suptitle}</h3>
        <h2>{headings.title}</h2>
        <p className="text-base">{headings.subtitle}</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center my-6">
        {articles.map((article) => (
          <InfoCard
            key={article.href}
            title={article.title}
            description={article.description}
            image={article.image}
            href={article.href}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="button mx-auto mt-2 mb-6 ">Zum Ratgeber{"  "}&gt;</button>
      </div>
    </section >
  );
}