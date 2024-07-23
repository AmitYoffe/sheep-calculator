import { FormData } from "../context/FormDataContext";

export type FormErrors = {
  name?: string;
  age?: string;
  height?: string;
  weight?: string;
};

export function validateForm(formData: FormData) {
  const validationErrors: any = {};

  if (!formData.name || formData.name.length <= 0) {
    validationErrors.name = "Name is required";
  }

  if (!formData.age || formData.age <= 0) {
    validationErrors.age = "Age must be a positive number";
  }

  if (!formData.height || formData.height <= 0) {
    validationErrors.height = "Height must be a positive number";
  }

  if (!formData.weight || formData.weight <= 0) {
    validationErrors.weight = "Weight must be a positive number";
  }

  return validationErrors;
}
