"use strict";

//1
let k = 1;
while (k <= 10) {
  console.log(k);
  k++;
}

//2

for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//3
for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

//4
let g = 1;
while (g <= 5) {
  console.log(g);
  g++;
}
//5
for (let j = 1; j <= 10; j++) {
  if (j === 7) {
    break;
  }
  console.log(j);
}

//6
let n = 10;
for (let i = 1; i < 20; i++) {
  console.log(i);
  if (i >= n) {
    break;
  }
}

//7
let f = 1;
while (f <= 20) {
  if (f % 3 === 0) {
    f++;
    continue;
  }

  console.log(f);
  f++;
}
