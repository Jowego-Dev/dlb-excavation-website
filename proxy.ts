import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/config";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "fr",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export default function proxy(request: NextRequest) {
  return intlMiddleware(request);
}
