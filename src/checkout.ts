import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }: { lineItems: any }) {
  let stripe: any = null;

  const getStripe = async () => {
    if (!stripe) {
      stripe = await loadStripe(
        "pk_test_51Ngk6CEOAsghiMdifAADAEYH6K4a9pJAc9h5DetSpsAAwLruHIicsW87cNMbTprncW4n0RysmUgz1190M4GufyWh0001FvvgWO"
      );
    }
    return stripe;
  };

  const stripeClient = await getStripe();
  await stripeClient.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}/success?sessionID={CHECK_OUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}/cancel`,
  });
}
