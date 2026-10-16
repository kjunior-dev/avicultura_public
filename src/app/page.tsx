import { SiteHeader } from "@/components/home/site-header";
import { HeroSection } from "@/components/home/hero-section";
import { BenefitsBar } from "@/components/home/benefits-bar";
import { AboutSection } from "@/components/home/about-section";
import { OrderSteps } from "@/components/home/order-steps";
import { OrderCta } from "@/components/home/order-cta";
import { SiteFooter } from "@/components/home/site-footer";
import { getManagementLinks } from "@/lib/management-links";

export default function Home() {
  const { orderUrl, adminUrl } = getManagementLinks();

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
        <OrderCta orderUrl={orderUrl}/>
      </main>
      <SiteFooter adminUrl={adminUrl}/>
    </>
  );
}