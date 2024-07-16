import { FormData } from "../context/FormDataContext";
import { gaussian } from "./gaussianBell";
import { calculateNameFactor } from "./nameFactor";

export function worthCalculation({ name, age, height, weight }: FormData) {
  const baseWorth = age * height * weight;

  const nameFactor = calculateNameFactor(name);
  const ageFactor = gaussian(age, 21, 5);
  const heightFactor = gaussian(height, 182, 10);
  const weightFactor = gaussian(weight, 70, 12);

  const adjustedWorth =
    (baseWorth * ageFactor * heightFactor * weightFactor * nameFactor) / 2000;

  return Math.round(adjustedWorth);
}

//TODO: add אריאלה condition
