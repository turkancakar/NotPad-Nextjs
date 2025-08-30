import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/lib/theme-context";
import { ThemeProvider as NextThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not Defteri",
  description: "Modern ve kullanışlı not defteri uygulaması",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="tr" suppressHydrationWarning>
        <body className={inter.className}>
          <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </NextThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
