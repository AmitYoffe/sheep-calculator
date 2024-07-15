"use client";
import { useFormData } from "@/lib/context/FormDataContext";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function InfoForm() {
  const { formData, setFormData } = useFormData();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/result");
  };

  return (
    <Card className="p-6 shadow-lg mx-auto grid max-w-md items-start my-10">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            placeholder="Enter your height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Enter your weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full">
          Calculate Your Worth
        </Button>
      </form>
    </Card>
  );
}
