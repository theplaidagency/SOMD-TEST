import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slugPath}`, {
      version: "draft" as const,
    });

    const story = data?.story;

    if (!story) {
      notFound();
    }

    return <StoryblokServerComponent blok={story.content} />;
  } catch {
    notFound();
  }
}
