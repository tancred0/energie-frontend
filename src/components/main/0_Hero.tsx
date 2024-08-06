import heroImage from "@/images/main/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-cover w-full h-1/2 pt-0 bg-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="max-w-[1200px] mx-auto px-10 xl:px-0">
        <div className="xl:mr-auto max-w-3xl pt-14 pb-96">
          <h1 className="mb-6 mt-0 hyphens-none">Energieberatungsportal - Deutschlands Energie-Ratgeber</h1>
          <p>
            Ihr Portal für Tipps zu Heizung & Klima, Sanierung, Förderung und mehr - <br />
            alles für eine energieeffiziente Zukunft.
          </p>
        </div>
      </div>
    </section>

  )
}