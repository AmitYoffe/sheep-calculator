/* eslint-disable react/no-unescaped-entities */
"use client";
import InfoForm from "@/components/InfoForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

export default function LandingPage() {
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToBottom = () => {
    if (bottomSectionRef.current) {
      bottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-6 md:py-12 lg:py-16 border-y">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              What's Your Sheep Worth?
            </h1>
            <p className="mt-1 mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Find out how much you're worth in sheep with our fun and whimsical
              calculator!
            </p>
            <Button
              onClick={handleScrollToBottom}
              className="mt-6 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Calculate Your Worth
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              className="mx-auto aspect-square overflow-hidden rounded-t-xl object-contain"
              src={"../SVGs/sheep.svg"}
              alt="Sheep Hero"
              width={125}
              height={125}
            />
          </div>
        </div>
      </section>
      <section ref={bottomSectionRef} className="w-full py-6 md:py-12 lg:py-16">
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
          src={"../SVGs/sheep.svg"}
          alt="Sheep Calculator"
          width={100}
          height={100}
        />
      </section>
    </div>
  );
}
