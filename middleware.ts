import { NextRequest, NextResponse } from "next/server";

const IDN_HOST = "www.xn--vilserdet-27a.se";
const CANONICAL_HOST = "www.viloserdet.se";

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname.toLowerCase() !== IDN_HOST) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.hostname = CANONICAL_HOST;
  destination.port = "";

  return NextResponse.redirect(destination, 301);
}
