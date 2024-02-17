import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";


const inter = Onest({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata: Metadata = {
  title: "Ghostore",
  description: "Bienvenido ala tienda mejor virtual de ropa en linea",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
      <html lang="en">
        <body >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>

  );
}
