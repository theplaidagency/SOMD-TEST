import type { Metadata } from "next";
import { Ubuntu, Inter } from "next/font/google";
import { draftMode } from "next/headers";
import "./globals.css";
import StoryblokProvider from "@/components/storyblok/StoryblokProvider";
import StoryblokBridge from "@/components/storyblok/StoryblokBridge";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Special Olympics Maryland",
  description: "Experience Inclusion — Special Olympics Maryland",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraft } = await draftMode();

  return (
    <StoryblokProvider>
      <html lang="en" className={`${ubuntu.variable} ${inter.variable}`}>
        <body>
          {children}
          {isDraft && <StoryblokBridge />}
        </body>
      </html>
    </StoryblokProvider>
  );
}
