// luhnCheck.js

export const luhnCheck = (num: string): boolean => {
  let sum: number = 0;
  let alternate: boolean = false;

  // Personnummer should have at least 10 digits
  if (num.length < 10) return false;

  for (let i: number = num.length - 1; i >= 0; i--) {
    let n: number = parseInt(num[i], 10);

    if (alternate) {
      n *= 2;
      if (n > 9) n -= 9;
    }

    sum += n;
    alternate = !alternate;
  }

  return sum % 10 === 0;
};
