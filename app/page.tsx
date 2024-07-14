import CalculationChoice from "@/components/CalculationChoice";
import FunFacts from "@/components/FunFacts";
import Header from "@/components/Header";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CalculationChoice />
        <FunFacts />
      </main>
    </>
  );
}
