import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FormDataProvider } from "@/lib/context/FormDataContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sheep Calculator",
  description: "Find your worth... using sheep!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4471404826861616"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <FormDataProvider>
          <main>{children}</main>
        </FormDataProvider>
        <Footer />
      </body>
    </html>
  );
}
