import { gaussian } from "./gaussianBell";

// This function generates numPoints data points based on the Gaussian function,
// covering the range from mean - 3 * stdDev to mean + 3 * stdDe
export const generateGaussianData = (
  mean: number,
  stdDev: number,
  numPoints: number
) => {
  const data = [];
  const step = (mean + 3 * stdDev - (mean - 3 * stdDev)) / numPoints;

  for (let i = mean - 3 * stdDev; i <= mean + 3 * stdDev; i += step) {
    const parameter_value = parseFloat(i.toFixed(2));
    if (parameter_value > 0) {
      data.push({
        parameter_value, // x axis
        "score multiplication": parseFloat(
          gaussian(parameter_value, mean, stdDev).toFixed(3)
        ), // y axis
      });
    }
  }

  return data;
};
