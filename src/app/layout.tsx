import type { Metadata } from "next";
import { Ubuntu, Inter } from "next/font/google";
import { draftMode } from "next/headers";
import "./globals.css";
import StoryblokProvider from "@/components/storyblok/StoryblokProvider";
import StoryblokBridge from "@/components/storyblok/StoryblokBridge";
import { getStoryblokApi } from "@/lib/storyblok";
import Nav from "@/components/storyblok/Nav";
import Footer from "@/components/storyblok/Footer";

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

async function getGlobalContent() {
  const storyblokApi = getStoryblokApi();

  const [headerRes, footerRes] = await Promise.all([
    storyblokApi.get("cdn/stories/global/header", {
      version: "draft" as const,
    }),
    storyblokApi.get("cdn/stories/global/footer", {
      version: "draft" as const,
    }),
  ]);

  return {
    header: headerRes.data?.story?.content,
    footer: footerRes.data?.story?.content,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraft } = await draftMode();
  const { header, footer } = await getGlobalContent();

  return (
    <StoryblokProvider>
      <html lang="en" className={`${ubuntu.variable} ${inter.variable}`}>
        <body>
          {header && <Nav blok={header} />}
          <div className="pt-[120px]">{children}</div>
          {footer && <Footer blok={footer} />}
          {isDraft && <StoryblokBridge />}
        </body>
      </html>
    </StoryblokProvider>
  );
}
