import { FormData } from "./context/FormDataContext";

export function worthCalculation({ name, age, height, weight }: FormData) {
  const baseWorth = age * height * weight;

  // long names should be lower in worth
  const maxNameLength = 25;
  const minNameFactor = 0.1; // minimum value for the factor
  const decreaseRate = 0.01; // rate at which the factor decreases per extra character

  const nameFactor =
    name.length > maxNameLength
      ? Math.max(
          minNameFactor,
          0.9 - (name.length - maxNameLength) * decreaseRate
        )
      : 1;

  //TODO: Should do the same with these 3
  const ageFactor = age >= 18 && age <= 64 ? 1.05 : 1;
  const heightFactor = height >= 165 && height <= 199 ? 1.05 : 1;
  const weightFactor = weight >= 18 && weight <= 64 ? 1.05 : 1;

  const adjustedWorth =
    (baseWorth * ageFactor * heightFactor * weightFactor * nameFactor) / 2000;

  return Math.round(adjustedWorth);
}
