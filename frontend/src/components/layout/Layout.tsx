// components/layout/Layout.tsx
import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
