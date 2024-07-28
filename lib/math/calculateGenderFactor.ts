import { Gender } from "@/context/FormDataContext";

export function calculateGenderFactor(gender: Gender) {
  const genderFactor = gender === "female" ? 1.05 : 1;
  return genderFactor;
}
