"use client";
import { useFormData } from "@/lib/context/FormDataContext";
import { FormErrors, validateForm } from "@/lib/formValidations";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function InfoForm() {
  const { formData, setFormData } = useFormData();
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      router.push("/result");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
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
          {errors.name && (
            <p className="text-red-500 text-sm pl-2 -mt-1">{errors.name}</p>
          )}
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
          {errors.age && (
            <p className="text-red-500 text-sm pl-2 -mt-1">{errors.age}</p>
          )}
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
          {errors.height && (
            <p className="text-red-500 text-sm pl-2 -mt-1">{errors.height}</p>
          )}
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
          {errors.weight && (
            <p className="text-red-500 text-sm pl-2 -mt-1">{errors.weight}</p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Calculate Your Worth
        </Button>
      </form>
    </Card>
  );
}
