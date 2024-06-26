import { Inter } from "next/font/google";
// import { GoogleTagManager } from "@next/third-parties/google";


import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        <main >{children}</main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId="GTM-WMTC6K4G" /> */}
    </html>
  );
}
