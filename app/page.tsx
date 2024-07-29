/* eslint-disable react/no-unescaped-entities */
"use client";
import SheepSvg from "@/components/layout/dynamicSvgs/SheepSvg";
import { useTheme } from "@/components/layout/ThemeProvider";
import Image from "next/image";
import { useRef } from "react";
import CalculateWorthButton from "./components/CalculateWorthButton";
import InfoForm from "./components/InfoForm";

export default function LandingPage() {
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const handleScrollToBottom = () => {
    if (bottomSectionRef.current) {
      bottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-6 md:py-12 lg:py-16 border-b-2">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              What's Your Sheep Worth?
            </h1>
            <p className="mt-1 mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Find out how much you're worth in sheep with our fun and whimsical
              calculator!
            </p>
            <CalculateWorthButton handleScrollToBottom={handleScrollToBottom} />
          </div>
          <SheepSvg className="size-60" />
        </div>
      </section>
      <section ref={bottomSectionRef} className="w-full pt-6 md:pt-12 lg:pt-16">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Find Out Your Sheep Worth
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Simply enter your details and we'll calculate your worth in sheep.
            It's a fun and whimsical way to learn more about yourself!
          </p>
        </div>
        <InfoForm />
        <Image
          className="mx-auto aspect-square overflow-hidden rounded-t-xl object-contain"
          src={"/images/takeMyMoney.jpg"}
          alt="Sheep Hero"
          width={275}
          height={275}
        />
      </section>
    </div>
  );
}
