import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const messagesMap = {
    en: () => import("../messages/en.json"),
    fr: () => import("../messages/fr.json"),
  };

  const safeLocale = (locale ?? "fr") as Locale;

  return {
    locale: safeLocale,
    messages: (await messagesMap[safeLocale]()).default,
  };
});
