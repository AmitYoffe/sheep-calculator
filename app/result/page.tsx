"use client";
import FunFacts from "@/components/FunFacts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useFormData } from "@/lib/context/FormDataContext";
import { worthCalculation } from "@/lib/math/worthCalculation";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Result() {
  const { formData } = useFormData();
  const [sheepWorth, setSheepWorth] = useState(0);

  useEffect(() => {
    let sheepWorth = worthCalculation(formData);
    setSheepWorth(sheepWorth);
  }, [formData]);

  return (
    <div className="h-full grid items-center justify-center gap-4 px-4 md:px-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Your Sheep Worth Revealed!
        </h2>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Check out your personalized sheep worth report and share it with your
          friends!
        </p>
      </div>
      <Card className="p-6 w-full flex flex-col items-center w-full shadow-xl space-y-4">
        <Image
          className="mx-auto aspect-square overflow-hidden rounded-t-xl object-contain"
          src={"../SVGs/sheep.svg"}
          alt="Sheep Worth"
          width={50}
          height={50}
        />
        <div className="text-4xl font-bold">
          <CountUp end={sheepWorth} /> Sheep
        </div>
        <p className="text-muted-foreground">
          Congratulations, <span className="font-bold">{formData.name}</span>!
          You are worth the equivalent of {sheepWorth} sheep.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Share on Twitter
          </Button>
          <Button variant="outline" size="sm">
            Share on WhatsApp
          </Button>
        </div>
      </Card>
      <FunFacts />
    </div>
  );
}
