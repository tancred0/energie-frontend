import denaImg from "@/images/main/partners/dena.png";
import eeExpertenImg from "@/images/main/partners/eeExperten.png";
import denImg from "@/images/main/partners/den.png";
import gihImg from "@/images/main/partners/gih.png";

const partnersImg = [
  {
    image: denaImg,
    alt: "Deutsche Energie-Agentur Logo",
  },
  {
    image: eeExpertenImg,
    alt: "Energieeffizienz-Experten Logo",
  },
  {
    image: denImg,
    alt: "Deutsches Energieberater-Netzwerk Logo",
  },
  {
    image: gihImg,
    alt: "Energieberatendenverband GIH Logo",
  },

];

export default function Partners() {
  return (
    <section className="max-w-[1200px] mx-auto my-20 px-10">
      <h4 className="text-center text-base">Wir vergleichen Produkte & Dienstleistung von über 150 regionalen Partnern</h4>
      <div className="mx-auto grid gap-4 max-w-lg md:max-w-2xl lg:gap-10 md:grid-flow-col grid-cols-2 md:grid-cols-4 justify-center items-center my-6">
        {partnersImg.map((partner) => (
          <div key={partner.alt} className="h-10 mx-auto">
            <img
              src={partner.image.src}
              alt={partner.alt}
              className="h-6 md:h-10"
            />
          </div>
        ))}
      </div>
    </section>
  );
}