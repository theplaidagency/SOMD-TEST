import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/disable-draft
 * Disables draft mode to go back to published content.
 */
export async function GET(request: NextRequest) {
  (await draftMode()).disable();
  return NextResponse.redirect(new URL("/", request.url));
}
