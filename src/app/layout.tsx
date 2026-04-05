import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibeflow | Tvorba webů",
  description: "Osobní portfolio a blog Václava Čapka, vibecodera z Jižních Čech tvořícího moderní weby.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-bg-dark text-gray-100">
        <header className="fixed top-0 w-full z-50 bg-bg-dark/80 backdrop-blur-md border-b border-gray-800/50 transition-all h-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-between items-center">
             <a href="/" className="hover:opacity-80 transition-opacity flex items-center">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/logo/vibeflow-logo.svg" alt="Vibeflow Logo" className="h-8" />
             </a>
             <nav className="flex gap-6 text-sm font-medium text-gray-400">
                <a href="#projekty" className="hover:text-white transition-colors">Projekty</a>
                <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
             </nav>
          </div>
        </header>
        <div className="pt-20 flex-1 flex flex-col">
          {children}
        </div>
        <footer className="bg-[#111827] py-10 px-6 text-center text-xs text-gray-500 border-t border-gray-800/60">
          <div className="max-w-7xl mx-auto flex flex-col gap-2">
            <p>© 2026 vibeflow – Václav Čapek. Všechna práva vyhrazena.</p>
            <p className="text-gray-600">Provozovatel: Václav Čapek, Lipenská, 370 01 České Budějovice. IČ: 87374366. Fyzická osoba zapsaná v živnostenském rejstříku.</p>
          </div>
        </footer>
        <Analytics />
        <GoogleAnalytics gaId="G-V6CZJ5E187" />
      </body>
    </html>
  );
}
