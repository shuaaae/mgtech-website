import type { Metadata } from "next"
import { Geist_Mono, Plus_Jakarta_Sans, Montserrat } from "next/font/google"
import "./globals.css"
import { ClientLoaderShell } from "@/components/ClientLoaderShell"
import { SearchProvider } from "@/contexts/SearchContext"
import { SearchWrapper } from "@/components/SearchWrapper"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "MGTech IT Solutions",
  description:
    "MGTech builds reliable, enterprise-grade technology solutions focused on performance and trust.",
  metadataBase: new URL("https://www.mgtech.com"),
  icons: {
    icon: "/mglogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
        <SearchProvider>
          <ClientLoaderShell>{children}</ClientLoaderShell>
          <SearchWrapper />
        </SearchProvider>
      </body>
    </html>
  );
}
