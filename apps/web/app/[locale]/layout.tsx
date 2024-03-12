import { AnalyticsScript } from "@analytics";
import { ClientProviders } from "@shared/components/ClientProviders";
import { Toaster } from "@ui/components/toaster";
import { cn } from "@ui/lib";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { importLocale } from "../../i18n";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: {
    absolute: "Kidtivity Lab - Fun and Educational Activities for Kids",
    default: "Kidtivity Lab - Fun and Educational Activities for Kids",
    template: "%s | Kidtivity Lab - Fun and Educational Activities for Kids",
  },
  description:
    "Parental guide to fun and educational activities for kids using AI",
  // generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "kids activities",
    "fun activities",
    "educational activities",
    "parental guide",
    "parental control",
    "AI",
  ],
  // themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Chop Wood Ventures",
      url: "https://www.chopwoodventures.com/",
    },
  ],
  // viewport:
  //   "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", url: "/icon.png" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  const messages = await importLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={cn(
          "bg-background text-foreground min-h-screen font-sans antialiased",
          GeistSans.variable,
        )}
      >
        <NextTopLoader color={"var(--colors-primary)"} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProviders>{children}</ClientProviders>
          <Toaster />
        </NextIntlClientProvider>
        <AnalyticsScript />
      </body>
    </html>
  );
}
