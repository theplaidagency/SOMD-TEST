"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client component that loads the Storyblok Bridge script.
 * When the editor saves content, it triggers a Next.js router refresh
 * so server components re-fetch and re-render with the new data.
 */
export default function StoryblokBridge() {
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.storyblok.com/f/storyblok-v2-latest.js";
    script.async = true;
    script.onload = () => {
      const { StoryblokBridge } = window as any;
      if (StoryblokBridge) {
        const bridge = new StoryblokBridge({
          accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
        });

        bridge.on("input", () => {
          // Live preview — refresh server components on every keystroke
          router.refresh();
        });

        bridge.on(["published", "change"], () => {
          router.refresh();
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [router]);

  return null;
}
