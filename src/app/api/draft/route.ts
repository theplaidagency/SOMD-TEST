import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/draft?slug=home
 * Enables Next.js draft mode so Storyblok visual editor can show unpublished content.
 * Called automatically by the visual editor when opening a story.
 */
export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug") || "home";

  (await draftMode()).enable();

  // Redirect to the page being edited
  const path = slug === "home" ? "/" : `/${slug}`;
  return NextResponse.redirect(new URL(path, request.url));
}
