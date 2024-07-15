"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

export interface FormData {
  name: string;
  age: number;
  height: number;
  weight: number;
}

interface FormDataContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: 0,
    height: 0,
    weight: 0,
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};
