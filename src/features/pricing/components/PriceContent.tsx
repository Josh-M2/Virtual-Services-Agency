import Footer from "../../../shared/components/Footer";
import NavigationBar from "../../../shared/components/NavigationBar";
import RevealContent from "../../../shared/components/RevealContent";
import SectionHeader from "../../../shared/components/SectionHeader";
import PricingCards from "./PricingCards";

const PriceContent = () => {
  return (
    <div className="app-shell">
      <NavigationBar />

      <main>
        <section className="overflow-hidden bg-white px-4 pt-28 text-center sm:px-6 md:pt-36">
          <RevealContent direction="right">
            <SectionHeader
              title="Flexible Pricing for Every Stage"
              description="Choose a plan that matches your workload. Scale your virtual support as your business grows."
              className="px-0"
            />
          </RevealContent>

          <PricingCards />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PriceContent;
