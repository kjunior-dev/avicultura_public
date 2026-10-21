import { SiteHeader } from "@/components/home/site-header";
import { HeroSection } from "@/components/home/hero-section";
import { BenefitsBar } from "@/components/home/benefits-bar";
import { AboutSection } from "@/components/home/about-section";
import { OrderSteps } from "@/components/home/order-steps";
import { CustomerReviews } from "@/components/home/customer-reviews";
import { OrderCta } from "@/components/home/order-cta";
import { SiteFooter } from "@/components/home/site-footer";
import { getPublishedReviews } from "@/lib/customer-reviews";
import { getManagementLinks } from "@/lib/management-links";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { orderUrl, adminUrl } = getManagementLinks();
  const { reviews, unavailable } = await getPublishedReviews();

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4">
        Saltar para o conteúdo
      </a>
      <SiteHeader adminUrl={adminUrl}/>
      <main id="conteudo">
        <HeroSection orderUrl={orderUrl}/>
        <BenefitsBar/>
        <AboutSection/>
        <OrderSteps/>
        <CustomerReviews reviews={reviews} unavailable={unavailable}/>
        <OrderCta orderUrl={orderUrl}/>
      </main>
      <SiteFooter adminUrl={adminUrl}/>
    </>
  );
}
