import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ValueStockAI",
  description: "AI-powered stock analysis and valuation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${nunito.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 right-0 py-6 text-center text-sm text-muted-foreground border-t border-border/40 bg-background">
          <span className="font-medium">Developed by <a href="https://www.moonshot.partners/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><strong>Moonshot Partners</strong></a></span>
        </footer>
      </body>
    </html>
  );
}
