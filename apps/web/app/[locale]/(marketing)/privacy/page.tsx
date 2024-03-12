import { PrivacyPolicy } from "@marketing/home/components/PrivacyPolicy";
import { getTranslations } from "next-intl/server";

export default async function PricingPage() {
  const t = await getTranslations();

  return (
    <main>
      <div className="px-8 pb-24 pt-12">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold lg:text-5xl">
              {t("privacy.title")}
            </h1>
          </div>
          <PrivacyPolicy />
        </div>
      </div>
    </main>
  );
}
