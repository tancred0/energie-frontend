"use client"

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    console.log(email);

    // const response = await fetch("/api/newsletter", {
    //   method: "POST",
    //   body: JSON.stringify({ email }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (response.ok) {
    //   alert("Erfolgreich angemeldet");
    // } else {
    //   alert("Fehler beim Anmelden");
    // }
  }

  return (
    <form className="flex justify-center flex-col sm:flex-row mt-6 mx-auto max-w-xl gap-4">
      <input
        className="py-2 px-5 rounded-lg w-full sm:w-2/3 mx-auto"
        type="email"
        placeholder="E-Mail-Adresse"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="button w-full sm:w-1/3  mx-auto" type="submit" onClick={ handleSubmit}>Jetzt anmelden</button>
    </form>
  )
}