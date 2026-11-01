import { NextRequest, NextResponse } from "next/server";

const IDN_HOST = "www.xn--vilserdet-27a.se";
const CANONICAL_HOST = "www.viloserdet.se";
const LEGACY_PATHS: Record<string, string> = {
  "/Forsakring": "/forsakring",
  "/Prisgaranti": "/prisgaranti",
  "/Kontakt": "/kontakt",
  "/OmOss": "/omoss",
  "/FAQ": "/faq",
  "/Integritetspolicy": "/integritetspolicy",
  "/Tipsinforflytt": "/tipsinforflytt",
  "/Ingariflytthjalp": "/ingariflytthjalp",
  "/Ingariflyttstadingen": "/ingariflyttstadingen",
  "/Ingarivisningsstadning": "/ingarivisningsstadning",
};

export function middleware(request: NextRequest) {
  const isIdnHost = request.nextUrl.hostname.toLowerCase() === IDN_HOST;
  const pathname = request.nextUrl.pathname;
  const pathWithoutTrailingSlash = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  const canonicalPath = LEGACY_PATHS[pathWithoutTrailingSlash];

  if (!isIdnHost && !canonicalPath) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  if (isIdnHost) {
    destination.protocol = "https:";
    destination.hostname = CANONICAL_HOST;
    destination.port = "";
  }
  if (canonicalPath) {
    destination.pathname = canonicalPath;
  }

  return NextResponse.redirect(destination, 301);
}
