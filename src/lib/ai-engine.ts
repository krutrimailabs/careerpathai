// Based on the PRD's interest assessment (30 questions)
export type RIASECScore = {
  R: number; // Realistic
  I: number; // Investigative
  A: number; // Artistic
  S: number; // Social
  E: number; // Enterprising
  C: number; // Conventional
};

/**
 * Calculates a match percentage between student traits and career requirements.
 * Uses Euclidean Distance normalized to a percentage.
 */
export function calculateCareerMatch(
  studentProfile: RIASECScore,
  careerWeights: RIASECScore
): number {
  const traits = ['R', 'I', 'A', 'S', 'E', 'C'] as const;
  
  let sumOfSquares = 0;
  traits.forEach((trait) => {
    sumOfSquares += Math.pow(studentProfile[trait] - careerWeights[trait], 2);
  });

  const distance = Math.sqrt(sumOfSquares);
  
  // Normalize distance: Max possible distance between two 0-100 profiles is sqrt(6 * 100^2) ≈ 245
  const maxDistance = 245;
  const matchPercentage = Math.max(0, 100 - (distance / maxDistance) * 100);

  return Math.round(matchPercentage);
}

/**
 * Example Usage:
 * const student = { R: 10, I: 40, A: 80, S: 20, E: 50, C: 10 };
 * const uiDesigner = { R: 5, I: 30, A: 95, S: 10, E: 40, C: 20 };
 * const result = calculateCareerMatch(student, uiDesigner); // ~92% Match
 */
