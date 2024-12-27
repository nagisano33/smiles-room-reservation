import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@repo/ui/styles.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-200 flex flex-col min-h-screen text-gray-900`}
      >
        <header>
          <Header />
        </header>

        <main
          className="
            grid grid-cols-[1fr] place-content-center 
            w-screen
            md:grid-cols-[max(768px)]
          "
        >
          <div className="grid w-full p-8 bg-gray-50 rounded-md">
            {children}
          </div>
        </main>

        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
