//quadratic equaation almighty fomula
function solveQuraticEquation(a, b, c) {
  const squareB = Math.pow(b, 2); //calculates the square of b

  const rootPart = Math.sqrt(squareB - 4 * a * c);
  const firstRootOfEquation = ((-b - rootPart) / (2 * a)).toFixed(3);
  const secondRootOfEquation = ((-b + rootPart) / (2 * a)).toFixed(3);
  const rootsOfEquation = `The roots of the equation are ${firstRootOfEquation} and ${secondRootOfEquation}`;
  return rootsOfEquation;
}

const rootsOfEquation = solveQuraticEquation(1, 5, 1);
console.log(rootsOfEquation);
