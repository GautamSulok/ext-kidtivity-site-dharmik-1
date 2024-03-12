import { ChatbotSelector } from "@saas/dashboard/components/ChatbotSelector";
import FeaturedSection from "@saas/dashboard/components/FeaturedSection";
import { PageHeader } from "@saas/shared/components/PageHeader";
import { TEAM_SLUG_COOKIE_NAME } from "@saas/shared/constants";
import { useLocaleCurrency } from "@shared/hooks/locale-currency";
import { Card } from "@ui/components/card";
import { createApiCaller } from "api/trpc/caller";
import { ApiOutput } from "api/trpc/router";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SubscriptionPlan = ApiOutput["billing"]["plans"][number];
type FeatureData = {
  chatId: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
  tier: string;
  created_at: string;
  updated_at: string;
};
export default async function Dashboard() {
  let featureFavorite;
  let featureRecent;
  const apiCaller = await createApiCaller();
  const user = await apiCaller.auth.user();
  const features = await apiCaller.featured.featureChat();
  if (user) {
    featureFavorite = await apiCaller.featured.featureFavorites({ userId: user?.id as string });
    featureRecent = await apiCaller.featured.featureRecent({ userId: user?.id as string })
    // await apiCaller.featured.featureSelect({ userId: user?.id as string, chatId: "1YpVAO2IKau3JzMk" as string })
    // await apiCaller.featured.featireRecentOpen({ userId: user?.id as string, chatId: "vbVMWoaO2LenBHCG" as string, title: "Riddles" as string })
  }
  const t = await getTranslations();

  const handleFeatureSelect = async (chatId: string) => {
    "use server"
    console.log("server-action", chatId)
    await apiCaller.featured.featureSelect({ userId: `${user?.id}`, chatId: `${chatId}` })
  }

  const localeCurrency = useLocaleCurrency();
  // const plans = await apiCaller.billing.plans();
  const teamSlug = cookies().get(TEAM_SLUG_COOKIE_NAME)?.value as string;

  if (!user) redirect("/auth/login");

  if (!user) redirect("/app/dashboard");

  const freePlan: SubscriptionPlan = {
    id: "free",
    name: t("settings.billing.subscription.freePlan.title"),
    variants: [
      {
        id: "free",
        interval_count: 1,
        price: 0,
        interval: "month",
        currency: localeCurrency,
      },
    ],
  };

  const { teamMemberships } = user;

  const { team } =
    teamMemberships!.find((membership) => membership.team.slug === teamSlug) ??
    teamMemberships![0];

  const teamSubscription = await apiCaller.team.subscription({
    teamId: team.id,
  });
  // console.log("Team: ", teamMemberships, team, teamSubscription);

  const activePlanId = teamSubscription ? teamSubscription.plan_id : "free";
  const activeVariantId = teamSubscription
    ? teamSubscription.variant_id
    : "free";

  // const subscriptionPlan = [freePlan, ...plans].find(
  //   (plan) => plan.id === activePlanId,
  // );
  // const subscriptionVariant = subscriptionPlan?.variants.find(
  //   (variant) => variant.id === activeVariantId,
  // );

  // console.log("PLAN:", activePlanId, subscriptionPlan, subscriptionVariant);

  // if (!subscriptionPlan || !subscriptionVariant) {
  //   return null;
  // }

  const upgrade =
    activePlanId === "free" ||
    teamSubscription?.status === "CANCELED" ||
    teamSubscription?.status === "PAUSED";

  return (
    <div className="container max-w-6xl py-8">
      <PageHeader
        title={t("dashboard.welcome", { name: user?.name })}
        subtitle={t("dashboard.subtitle")}
      />

      {/* <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <StatsTile
          title="New clients"
          value={344}
          valueFormat="number"
          trend={0.12}
        />
        <StatsTile
          title="Revenue"
          value={5243}
          valueFormat="currency"
          trend={0.6}
        />
        <StatsTile
          title="Churn"
          value={0.03}
          valueFormat="percentage"
          trend={-0.3}
        />
      </div> */}

      <FeaturedSection handleFeatureSelect={handleFeatureSelect} featureRecent={featureRecent} featureFavorite={featureFavorite} upgrade={upgrade} feature={features as unknown as FeatureData[]} />

      <Card className="mt-8">
        <div className="text-foreground mx-auto p-8">
          <ChatbotSelector upgrade={upgrade} plan={activePlanId} />
        </div>
      </Card>
    </div>
  );
}
