// The parameter's mean value will give the most points,
// the standard deviation will substract from the mean accordingly
export function gaussian(x: number, mean: number, stdDev: number) {
  return Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2));
}
