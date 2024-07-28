import { FormData } from "../../context/FormDataContext";
import { calculateGenderFactor } from "./calculateGenderFactor";
import { gaussian } from "./gaussianBell";
import { calculateNameFactor } from "./nameFactor";

export function worthCalculation({ name, age, height, weight, gender }: FormData) {
  const baseWorth = (age ?? 0) * (height ?? 0) * (weight ?? 0);

  const genderFactor = calculateGenderFactor(gender);

  const nameFactor = calculateNameFactor(name);
  const ageFactor = gaussian(age ?? 21, 21, 5);
  const heightFactor = gaussian(height ?? 182, 182, 10);
  const weightFactor = gaussian(weight ?? 70, 70, 12);

  const adjustedWorth =
    (baseWorth * ageFactor * heightFactor * weightFactor * nameFactor * genderFactor) / 2000;

  return Math.round(adjustedWorth);
}

//TODO: add אריאלה condition
