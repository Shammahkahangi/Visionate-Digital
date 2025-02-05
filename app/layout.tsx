import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Visionate Digital | Elevate Your Brand Online",
  description: "Visionate Digital is a results-driven digital agency specializing in web design, branding, SEO, and social media marketing. We create tailored solutions to help businesses grow and stand out in the digital space.",
  icons: {
    // Replace with your favicon file name if different
    icon: "/favicon.ico",
    // Optionally, you can add additional icon formats:
    // apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png", // 
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={font.className}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
