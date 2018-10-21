const getYears = (provision, interestRate, taxes, desirableAmount) => {
  let years = 0;

  while (provision < desirableAmount) {
    provision += provision * interestRate * (1 - taxes)
    years += 1
  }

  return years;
}