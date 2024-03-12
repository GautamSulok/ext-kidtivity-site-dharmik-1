"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { apiClient } from "@shared/lib/api-client";
import { Alert, AlertDescription, AlertTitle } from "@ui/components/alert";
import { Button } from "@ui/components/button";
import { Icon } from "@ui/components/icon";

import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
});
type FormValues = z.infer<typeof formSchema>;

export function Newsletter() {
  const t = useTranslations();
  const newsletterSignupMutation = apiClient.newsletter.signup.useMutation();

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async ({ email }) => {
    try {
      await newsletterSignupMutation.mutateAsync({ email });
    } catch {}
  };

  return (
    <section
      id="newsletter"
      className="bg-[url('/images/bg-img.png')] bg-cover bg-no-repeat py-8 md:py-12"
    >
      <div className="relative mx-auto max-w-[1024px] px-5 md:px-6 lg:px-10">
        <div className="py-2 text-center">
          <img
            src="images/email-icon.svg"
            alt=""
            className="mt-2 inline-block"
          />
          <h4 className="mb-2 mt-4 text-2xl font-bold leading-8 text-purple-500">
            {t("newsletter.title")}
          </h4>
          <p className="text-base font-medium leading-6 text-purple-500">
            {t("newsletter.subtitle")}
          </p>
          {isSubmitSuccessful ? (
            <Alert variant="success">
              <Icon.success className="h-4 w-4" />
              <AlertTitle>{t("newsletter.hints.success.title")}</AlertTitle>
              <AlertDescription>
                {t("newsletter.hints.success.message")}
              </AlertDescription>
            </Alert>
          ) : (
            <form
              className="mt-4 flex items-center justify-center gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
                id="email"
                className="block h-10 w-full max-w-[328px] rounded-[4px] border border-gray-100 bg-white p-4 text-sm text-gray-500 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
                placeholder={t("newsletter.email")}
                {...register("email")}
              />

              <Button
                className="flex h-10 items-center justify-center rounded-lg border border-blue-300 bg-blue-300 px-4 py-2 text-sm font-semibold leading-6 text-blue-100 transition-all duration-500 ease-in-out hover:bg-transparent hover:text-blue-300"
                type="submit"
              >
                {t("newsletter.submit")}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

{
  /* <section id="newsletter" className=" overflow-y-hidden border-t pt-24">
  <div className="">
    <div className="mx-auto">
      <div className="3xl relative isolate overflow-hidden py-24 text-center sm:px-16">
        <Icon.key className="text-primary mx-auto mb-3 h-12 w-12" />
        <h1 className="text-3xl font-bold lg:text-4xl">
          {t("newsletter.title")}
        </h1>
        <p className="mt-3 text-lg opacity-70 dark:text-stone-200">
          {t("newsletter.subtitle")}
        </p>
        <div className="mx-auto mt-12 max-w-lg">
          <div className="w-100 mx-auto">
            {isSubmitSuccessful ? (
              <Alert variant="success">
                <Icon.success className="h-4 w-4" />
                <AlertTitle>{t("newsletter.hints.success.title")}</AlertTitle>
                <AlertDescription>
                  {t("newsletter.hints.success.message")}
                </AlertDescription>
              </Alert>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-start"
              >
                <Input
                  type="email"
                  required
                  placeholder={t("newsletter.email")}
                  {...register("email")}
                />
                <Button type="submit" className="ml-4">
                  {t("newsletter.submit")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>; */
}
