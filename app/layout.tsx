import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import "./globals.css";
import Loading from "@/components/ui/Loading";



export const metadata: Metadata = {
  title: "Alireza Portfolio",
  description: "alireza talebizadeh  | create a portfolio with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
