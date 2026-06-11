import Footer from "../../../shared/components/Footer";
import NavigationBar from "../../../shared/components/NavigationBar";
import SectionHeader from "../../../shared/components/SectionHeader";
import PricingCards from "./PricingCards";

const PriceContent = () => {
  return (
    <div className="app-shell">
      <NavigationBar />

      <main>
        <section className="bg-white pt-5 text-center md:pt-32">
          <SectionHeader
            title="Flexible Pricing for Every Stage"
            description="Choose a plan that matches your workload. Scale your virtual support as your business grows."
            className="px-6"
          />

          <PricingCards />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PriceContent;
