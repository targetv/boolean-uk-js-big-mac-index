/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

let bigMacPrices = {
  uk: 2.29,
  us: 3.57,
  rus: 135.0,
  can: 6.77,
  nor: 52.0,
  swi: 6.5,
};

let compareUsUK = bigMacPrices["us"] / bigMacPrices["uk"];
let compareUsRus = bigMacPrices["rus"] / bigMacPrices["us"];
let compareUsCan = bigMacPrices["can"] / bigMacPrices["us"];
let compareUsNor = bigMacPrices["nor"] / bigMacPrices["us"];
let compareUsSwi = bigMacPrices["swi"] / bigMacPrices["us"];

let finalCompareUkvsUs = ((compareUsUK - 1.39) / compareUsUK) * 100;
let finalCompareRusvsUs = ((compareUsRus - 74.99) / compareUsRus) * 100;
let finalCompareCanvsUs = ((compareUsCan - 1.24) / compareUsCan) * 100;
let finalCompareNorvsUs = ((compareUsNor - 8.3) / compareUsNor) * 100;
let finalCompareSwivsUs = ((compareUsSwi - 0.91) / compareUsSwi) * 100;

console.log(finalCompareUkvsUs.toFixed() + "%");
console.log(finalCompareRusvsUs.toFixed() + "%");
console.log(finalCompareCanvsUs.toFixed() + "%");
console.log(finalCompareNorvsUs.toFixed() + "%");
console.log(finalCompareSwivsUs.toFixed() + "%");

console.log(finalCompareCanvsUs > finalCompareNorvsUs);
console.log(finalCompareCanvsUs > finalCompareRusvsUs);
console.log(finalCompareCanvsUs > finalCompareSwivsUs);
console.log(finalCompareCanvsUs > finalCompareUkvsUs);
