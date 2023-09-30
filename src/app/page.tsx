import { Advertising } from "@/components/Advertising";
import { ClaimDiscount } from "@/components/ClaimDiscount";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { GuaranteeCard } from "@/components/GuaranteeCard";
import { MainTitle } from "@/components/MainTitle";
import { Navbar } from "@/components/Navbar";
import { NoThanks } from "@/components/NoThanks";
import { ProductCard } from "@/components/ProductCard";
import { ProductMainImage } from "@/components/ProductMainImage";
import { SavePercentage } from "@/components/SavePercentage";
import { ShippingCards } from "@/components/ShippingCards";
import { SpecialOffer } from "@/components/SpecialOffer";
import { Stepper } from "@/components/Stepper";
import { TestimonialCard } from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="header">
        <Advertising />
        <Navbar />
      </header>
      <section className="page">
        <MainTitle />
        <Stepper />
        <section className="product">
          <div className="left-container">
            <ProductMainImage />
            <TestimonialCard />
          </div>
          <div className="right-container">
            <SpecialOffer />
            <ProductCard />
            <Features />
            <SavePercentage />
            <ClaimDiscount />
            <ShippingCards />
            <NoThanks />
            <GuaranteeCard />
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
