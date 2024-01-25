import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streaming App",
  description:
    "This is one of the greatest streaming platform i have ever created.",
  icons: [
    {
      url: "/logo.svg",
      href : "/logo.svg"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme : dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            forcedTheme="dark"
            attribute="class"
            storageKey="stream-wave"
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
