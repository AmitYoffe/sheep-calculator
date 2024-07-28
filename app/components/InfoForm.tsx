"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Gender, useFormData } from "@/context/FormDataContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GenderIconSvg from "../../components/layout/dynamicSvgs/GenderIconSvg";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.coerce.number().min(0).max(999),
  height: z.coerce.number().min(0).max(999),
  weight: z.coerce.number().min(0).max(999),
  gender: z.string(),
});

const resolver = zodResolver(formSchema);

export default function InfoForm() {
  const { setFormData } = useFormData();
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState<Gender>("male");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: resolver,
    defaultValues: {
      age: undefined,
      height: undefined,
      name: undefined,
      weight: undefined,
      gender: "male",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const submitValues = { ...values, gender: selectedGender };
    setFormData(submitValues);
    router.push("/result");
  }

  return (
    <Tabs
      className="mx-auto grid max-w-md items-start my-10 p-1"
      value={selectedGender}
      onValueChange={(value) => setSelectedGender(value as Gender)}
    >
      <Card className="p-6 pt-2 shadow-lg">
        <TabsList className="grid w-full grid-cols-2 mb-5">
          <TabsTrigger value="male" className="gap-2 w-full h-8">
            <GenderIconSvg gender={"male"} />
            Male
          </TabsTrigger>
          <TabsTrigger value="female" className="gap-2 w-full h-8">
            <GenderIconSvg gender={"female"} />
            Female
          </TabsTrigger>
        </TabsList>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>height</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your height"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>weight</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your weight"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </Tabs>
  );
}
