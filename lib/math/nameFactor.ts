export function calculateNameFactor(name: string) {
  const decreaseRate = 0.01; // rate at which the factor decreases per extra character

  // long names should be lower in worth
  const acceptableNameLength = 25;
  const minNameFactor = 0.1; // minimum value for the factor

  const nameFactor =
    name.length > acceptableNameLength
      ? Math.max(
          minNameFactor,
          1 - (name.length - acceptableNameLength) * decreaseRate
        )
      : 1;
  return nameFactor;
}
