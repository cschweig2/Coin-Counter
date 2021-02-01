export default function coinCounter(x, index = 0, quarterCounter = 0, dimeCounter = 0, nickelCounter = 0, pennyCounter = 0) {
  if (isNaN(x)) {
    return;
  }
  if (x > 0) {
    quarterCounter = quarterCount(x);
    dimeCounter = dimeCount(x);
    nickelCounter = nickelCount(x);
    pennyCounter = pennyCount(x);
    return coinCounter(x, quarterCounter, );
  }
  return `Quarters: ${quarterCounter}, Dimes: ${dimeCounter}`;
}
// with modulo the remainder is whats left
let quarters = x / .25;
Math.floor(quarters);

4.26
17 quarters x .25 = 4.25

let pennies = x /.01;


export function quarterCount(x, quarterCounter = 0) {
  if (isNaN(x)) {
    return;
  }
  if (x < .25) {
    return x & quaterCounter;
  } else {
    if (x >= .25) {
      quarterCounter++;
      x - .25;
      return quarterCount(x, quarterCounter);
    }
  }
}

export default function dimeCount(x) {
  
}

export default function nickelCount(x) {
  
}

export default function pennyCount(x) {
  
}

// output example: [15, 2, 1, 1]

// takes in X amount of money, determines exact amount of change needed in quarters, dimes, nickels, pennies.
// check if x amount of money is divisible by .25 to add quarters, add to quarter counter.. followed by dimes nickels..

function totalCoins(x) {
  return function(pennies) {
    return function(nickels) {
      return function(dimes) {
        return function(quarters) {
          let result = [];
          if (x >= .25) {
            quarters++;
            result[0].push(quarters);
            x - .25;
          } else if (x < .25 && x >= .10) {
            dimes++;
            result[1].push(dimes);
            x - .10;
          } else if (x < .10 && x >= .05) {
            nickels++;
            result[2].push(nickels);
            x - .05
          } else if (x < .05) {
            pennies++;
            result[3].push(pennies);
            x - .01;
          }
          if (x <= 0) {
            return result;
          }
          return totalCoins(x);
        }
      }
    }
  }
}