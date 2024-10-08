import {
  ClerkProvider
} from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Twitch",
  description: "Streaming videos game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark}} afterSignOutUrl="/">
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute='class'
            forcedTheme='dark'
            storageKey='gamehub-theme'
          >
            {children}
          </ThemeProvider>         
        </body>
      </html>
    </ClerkProvider>
  );
}
