// pages/Contact.tsx
import React from "react"
import { Field } from "../components/ui/Field"
import { Button } from "../components/ui/button"

const Contact: React.FC = () => {
  return (
    <section className="pt-24 px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 text-sm font-medium">Nom</label>
          <Field placeholder="Votre nom" required />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <Field type="email" placeholder="exemple@email.com" required />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <Field as="textarea" placeholder="Votre message..." required />
        </div>
        <Button type="submit" className="w-full">Envoyer</Button>
      </form>
    </section>
  )
}

export default Contact
