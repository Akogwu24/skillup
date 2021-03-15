//quadratic equaation almighty fomula
function solveQuraticEquation(a, b, c) {
  const squareB = Math.pow(b, 2); //calculates the square of b

  const rootPart = Math.sqrt(squareB - 4 * a * c);
  const firstRootOfEquation = (-b - rootPart) / (2 * a);
  const secondRootOfEquation = (-b + rootPart) / (2 * a);
  const rootsOfEquation = `The roots of the equation are ${firstRootOfEquation} and ${secondRootOfEquation}`;
  return rootsOfEquation;
}

const rootsOfEquation = solveQuraticEquation(1, -6, 5);
console.log(rootsOfEquation);
