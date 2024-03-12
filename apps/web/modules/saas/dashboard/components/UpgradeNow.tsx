"use client";

import { Button } from "@ui/components/button";
import { Icon } from "@ui/components/icon";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function UpgradeNow({ plan }: { plan?: string }) {
  const t = useTranslations();

  return (
    <div className="bg-muted-foreground pointer-events-none absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center rounded-lg bg-opacity-75">
      <div className="bg-muted-foreground pointer-events-auto rounded-lg bg-opacity-50 p-4 text-center">
        {!plan && (
          <h2 className="text-secondary text-2xl font-bold">
            {t("dashboard.upgradeToUnlock")}
          </h2>
        )}
        {!plan && (
          <p className="mb-8 mt-4  text-xl">
            {t("dashboard.upgradeToUnlockDescription")}
          </p>
        )}
        <Button
          asChild
          variant="default"
          size="lg"
          className="pointer-events-auto"
        >
          <Link
            href="/app/settings/team/billing"
            className="inline-flex items-center"
          >
            <Icon.creditCard className="mr-2 h-4 w-4" />{" "}
            {t("dashboard.upgradeNow")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
