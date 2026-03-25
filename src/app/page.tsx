import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export const revalidate = 60; // revalidate content every 60 seconds

export default async function Home() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft" as const,
  });

  const story = data?.story;

  if (!story) {
    return (
      <div className="p-12 text-center text-red-600">
        Story not found — make sure a &quot;Home&quot; story exists in Storyblok.
      </div>
    );
  }

  return <StoryblokServerComponent blok={story.content} />;
}
