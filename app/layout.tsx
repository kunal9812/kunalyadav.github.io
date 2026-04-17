import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Kunal Yadav ✌️",
  description: "CS student and developer — building systems, solving problems, contributing to open source.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: "Kunal Yadav, CS Student, Systems Developer, C++, Android, Kotlin, Open Source, Portfolio, Three.js, React",
  authors: [{ name: "Kunal Yadav" }],
  creator: "Kunal Yadav",
  publisher: "Kunal Yadav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Kunal Yadav - Developer",
    description: "CS student and developer — building systems, solving problems, contributing to open source.",
    url: "https://kunal9812.github.io/kunalyadav.github.io",
    siteName: "Kunal Yadav's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Yadav - Developer",
    description: "CS student and developer — building systems, solving problems, contributing to open source.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      {/* Add your Google Analytics ID here once you have one */}
      {/* <GoogleAnalytics gaId={'YOUR_GA_ID'}/> */}
    </html>
  );
}
