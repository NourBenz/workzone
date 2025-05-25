// pages/services/Private.tsx
import React from "react"

const Private: React.FC = () => {
  return (
    <section className="pt-24 px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Private Zone</h1>
      <p className="text-muted-foreground mb-4">
        Des bureaux fermés pour ceux qui recherchent calme, confidentialité et confort professionnel.
      </p>
      <img src="/images/private.jpg" alt="Private Zone" className="rounded-lg shadow-lg w-full" />
    </section>
  )
}

export default Private
