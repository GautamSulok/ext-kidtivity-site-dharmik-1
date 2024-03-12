import {
  CancelSubscription,
  CreateCheckoutLink,
  CreateCustomerPortalLink,
  GetAllPlans,
  PauseSubscription,
  ResumeSubscription,
  SubscriptionPlan,
} from "../../types";
import { callStripeApi } from "./api";

export const getAllPlans: GetAllPlans = async function () {
  const response = await callStripeApi(
    "/prices?active=true&expand[]=data.product",
  );

  const plans: SubscriptionPlan[] = [];

  response.data.forEach((price: any) => {
    const product = price.product;

    if (!plans.find((plan) => plan.id === product.id)) {
      plans.push({
        id: product.id,
        name: product.name,
        description: product.description,
        storeId: "",
        variants: [
          {
            id: price.id,
            interval: price.recurring?.interval || "month",
            interval_count: price.recurring?.interval_count || 1,
            price: price.unit_amount,
            currency: price.currency,
          },
        ],
      });

      return;
    }

    const plan = plans.find((plan) => plan.id === product.id);

    plan?.variants.push({
      id: price.id,
      interval: price.recurring.interval,
      interval_count: price.recurring.interval_count,
      price: price.unit_amount,
      currency: price.currency,
    });
  });

  return plans.filter((product: any) => product.variants.length > 0);
};

export const createCheckoutLink: CreateCheckoutLink = async function ({
  variantId,
  email,
  name,
  teamId,
  redirectUrl,
  // trailAllowed,
}) {
  const body = new URLSearchParams();

  body.append("mode", "subscription");
  body.append("success_url", redirectUrl ?? "");
  body.append("line_items[0][quantity]", "1");
  body.append("line_items[0][price]", variantId);
  body.append("subscription_data[metadata][team_id]", teamId);
  // TODO: only offer a triling period if the plan hasn't been  subscribed to before
  // if (trailAllowed) {
  body.append(
    "subscription_data[trial_settings][end_behavior][missing_payment_method]",
    "pause",
  );
  body.append(
    "subscription_data[trial_period_days]",
    process.env.STRIPE_TRIAL_TIME || "7",
  );
  body.append("payment_method_collection", "if_required");
  // }

  const response = await callStripeApi("/checkout/sessions", {
    method: "POST",
    body,
  });

  return response.url;
};

export const createCustomerPortalLink: CreateCustomerPortalLink = async ({
  subscriptionId,
  customerId,
  redirectUrl,
}) => {
  const body = new URLSearchParams();
  body.append("customer", customerId);
  body.append("return_url", redirectUrl ?? "");

  const response = await callStripeApi(`/billing_portal/sessions`, {
    method: "POST",
    body,
  });

  return response.url;
};

export const pauseSubscription: PauseSubscription = async (params) => {
  const { id } = params;

  const body = new URLSearchParams();
  body.append("pause_collection[behavior]", "void");

  await callStripeApi(`/subscriptions/${id}`, {
    method: "POST",
    body,
  });
};

export const cancelSubscription: CancelSubscription = async (params) => {
  const { id } = params;

  await callStripeApi(`/subscriptions/${id}`, {
    method: "DELETE",
  });
};

export const resumeSubscription: ResumeSubscription = async ({ id }) => {
  const body = new URLSearchParams();
  body.append("billing_cycle_anchor", "unchanged");

  const response = await callStripeApi(`/subscriptions/${id}/resume`, {
    method: "POST",
    body,
  });

  return {
    status: response.status,
  };
};
