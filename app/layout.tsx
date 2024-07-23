import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { FormDataProvider } from "@/context/FormDataContext";
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
        <ThemeProvider>
          <Header />
          <FormDataProvider>
            <main>{children}</main>
          </FormDataProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
