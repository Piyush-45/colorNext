
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorContext, ColorProvider } from "@/provider/colorContext";
import { ThemeModeScript } from "flowbite-react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ColorProvider>
          <ThemeModeScript />

          <Header />
          {children}
          {/* </div> */}

        </ColorProvider>
      </body>
    </html>
  );
}
