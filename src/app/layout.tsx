import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
  icons: {
    icon: "/star.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="py-10">
          {children}

        </main>
        <Footer />
      </body>
    </html>
  );
}
