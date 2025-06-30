// components/layout/Footer.tsx
import React from "react"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">WorkZone</h3>
          <p className="text-sm text-muted-foreground">
            Des espaces pensés pour votre productivité.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Liens rapides</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/services">Services</a></li>
            <li><a href="/virtual-tour">Visite virtuelle</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">contact@workzone.tn</p>
          <p className="text-sm">+216 99 123 456</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Copyright © 2024 WorkZone .All Rights Reserved.
      </div>
    </footer>
  )
}
