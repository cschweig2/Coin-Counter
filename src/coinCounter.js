export default function coinCounter(x, quarters = 0, dimes = 0, nickels = 0, pennies = 0) {
  if (isNaN(x)) {
    return;
  }
  if (x > 0) {
    if (x >= .25) {
      quarters = x / .25;
      quarters = Math.floor(quarters);
      x -= (quarters * .25);
      x = x.toFixed(2);
    } else if (x < .25 && x >= .10) {
      dimes = x / .10;
      dimes = Math.floor(dimes);
      x -= (dimes * .10);
      x = x.toFixed(2);
    } else if (x < .10 && x >= .05) {
      nickels = x / .05;
      nickels = Math.floor(nickels);
      x -= .05;
      x = x.toFixed(2);
    } else {
      pennies = x / .01;
      x = 0;
      x = x.toFixed(2);
    }
    return coinCounter(x, quarters, dimes, nickels, pennies);
  }
  console.log(`Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`);
}