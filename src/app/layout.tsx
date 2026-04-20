import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Primary font - Outfit: Modern, clean geometric sans-serif
 * Used throughout the portfolio for headings and body text
 */
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Monospace font - JetBrains Mono: For code-like elements and accents
 */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * SEO Metadata - Optimized for search engines and social sharing
 */
export const metadata: Metadata = {
  title: "Nazeer Mohammed Izzath Noory | Full Stack Developer",
  description:
    "Passionate Full Stack Developer from Sri Lanka, specializing in building scalable, efficient, and user-friendly web applications. Skilled in React, Next.js, .NET, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    ".NET",
    "Sri Lanka",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Nazeer Mohammed Izzath Noory" }],
  openGraph: {
    title: "Nazeer Mohammed Izzath Noory | Full Stack Developer",
    description:
      "Passionate Full Stack Developer focused on building scalable, efficient, and user-friendly web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Izzath Noory Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazeer Mohammed Izzath Noory | Full Stack Developer",
    description:
      "Passionate Full Stack Developer focused on building scalable, efficient, and user-friendly web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
