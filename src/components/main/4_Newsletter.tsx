import Link from "next/link"
import NewsletterForm from "./newsletterForm"

export default function Newsletter() {
  return (
    <section
      className="w-full bg-yellow-500 py-20"
    >
      <div className="max-w-[1200px] mx-auto px-10 pb-10 mt-10 ">
        <h2 className="text-center">Bleiben Sie auf dem neuesten Stand</h2>
        <p className="text-center text-lg">Über unseren Newsletter erhalten Sie regelmäßig Tipps für ein energieeffizientes Zuhause</p>
        <NewsletterForm />
        <div className="text-sm text-gray-800/60 bg-transparent mx-auto max-w-2xl text-center mt-6">
          Mit Ihrer Anmeldung stimmen Sie zu, dass energieberatungsportal.de Ihre E-Mail-Adresse für die Zusendung des Newsletters verarbeitet.{" "}
          Weitere Hinweise zum Datenschutz, insbesondere zu Ihren Rechten, finden Sie{" "}
          <Link href="/datenschutz" className="text-sm text-gray-800/60">hier</Link>.
        </div>
      </div>
    </section>

  )
}