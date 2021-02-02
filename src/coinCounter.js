export default function coinCounter(x, quarters = 0, dimes = 0, nickels = 0, pennies = 0) {
  if (isNaN(x)) {
    return;
  }
  if (x > 0) {
    if (x >= .25) {
      quarters = Math.floor(x/.25);
      x -= (quarters * .25);
      x = x.toFixed(2);
    } else if (x < .25 && x >= .10) {
      dimes = Math.floor(x/.10);
      x -= (dimes * .10);
      x = x.toFixed(2);
    } else if (x < .10 && x >= .05) {
      nickels = Math.floor(x/.05);
      x -= .05;
      x = x.toFixed(2);
    } else {
      pennies = x / .01;
      x = 0;
    }
    return coinCounter(x, quarters, dimes, nickels, pennies);
  }
  let result = [quarters, dimes, nickels, pennies];
  console.log(`Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`);
  return result;
}