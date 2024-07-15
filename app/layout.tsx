import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yared Bet.",
  description:
    "I'm a software engineer, who has +3 years experience working on full-stack websites",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-x-hidden", font.className)}>
        <div className="pattern fixed inset-0 opacity-[0.015]" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
