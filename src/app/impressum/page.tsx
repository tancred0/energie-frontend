import impressumImg1 from "@/images/impressum/impressum1.png";
import impressumImg2 from "@/images/impressum/impressum2.png";
import Image from "next/image";

import Link from "next/link";

export default async function Page() {
  const url = process.env.URL
  let mailAdress = ""
  if (url) {
    mailAdress = `info@${url.slice(12)}`
  } else {
    mailAdress = "info@gmail.com"
  }

  return (
    <>
      <meta name="robots" content="noindex" />
      <main className="max-w-[1200px] mx-auto px-10 xl:px-0 mt-20 mb-32">
        <h1>Impressum</h1>
        <p className="mt-6">
          {process.env.URL} ist ein Service der HH ADVISORY UG.
        </p>
        <h2>Adresse</h2>
        <Image height={100}
          src={impressumImg1}
          alt="Impressum" />
        {/* 
        <p className="mb-0">HH ADVISORY UG</p>
        <p className="mb-0">Sredzkistr. 41</p>
        <p className="mb-0">10435 Berlin</p> 
        */}
        <h2>Kontakt</h2>
        <Link href={`mailto:${mailAdress}`}>{mailAdress}</Link>
        <p className="text-white">.</p>
        {/* 
        <p className="mb-0"><strong>Geschäftsführer:</strong> Hanno Heintzenberg</p>
        <p className="mb-0"><strong>Handelsregister:</strong> Amtsgericht Charlottenburg (Berlin)</p>
        <p><strong>Registernummer:</strong> HRB 213949 B</p>
        <p className="mb-0">Verantwortlicher für journalistisch-redaktionelle Inhalte</p>
        <p>gem. § 55 II RstV & § 5 TMG: Hanno Heintzenberg</p>
         */}
        <Image
          height={200}
          className=""
          src={impressumImg2}
          alt="Impressum"
        />
        <h2>Rechtshinweis</h2>
        <p>
          Alle Rechte vorbehalten, soweit nicht ausdrücklich etwas anderes angegeben wird.{" "}
          Alle Inhalte vermitteln lediglich einen unverbindlichen Überblick über die HH Advisory UG.{" "}
          Für die Richtigkeit, Vollständigkeit oder Aktualität der Daten wird keine Gewähr übernommen.{" "}
          Die betrifft auch die Hyperlinks. Änderungen oder Ergänzungen erfolgen ohne vorherige Ankündigung.
        </p>
      </main>
    </>
  );
}

