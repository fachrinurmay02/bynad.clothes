import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _bodoniModa = Bodoni_Moda({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "bynad.clothes | Fashion Collection",
  description:
    "Elegant, aesthetic, and casual fashion collection. Simple yet sophisticated clothing that complements your everyday style.",
  generator: "pokoknyajadi",
  icons: {
    icon: [
      // {
      //   url: "/icon-light-32x32.png",
      //   media: "(prefers-color-scheme: light)",
      // },
      // {
      //   url: "/icon-dark-32x32.png",
      //   media: "(prefers-color-scheme: dark)",
      // },
      {
        url: "/images/bynad-logo.jpg",
        type: "images/x-icon",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
