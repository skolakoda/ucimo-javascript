//Suma prvih n brojeva
//Izračunaj i ispiši sumu prvih 15 prirodnih brojeva. Koristiti for petlju.
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let sum = 0;
for (let i = 0; i <arr.length; i++) {
  sum += arr[i]
}

console.log(`Ukupan zbir elemenata u nizu od ${arr[0]} do ${arr[arr.length - 1]} je: ${sum}`);


//Proizvod prvih n brojeva
//Napiši program za izračunavanje proizvoda od 1 do n (izabrati po volji).

const arr2 = [1,2,3,4,5];
let total = 1;

for (let i = 0; i < arr2.length; i++) {
  total *= arr2[i];
  
}

console.log(`Ukupan proizvod elementa od ${arr2[0]} do ${arr2[arr2.length -1]} je: ${total}`);

//Srednja vrednost niza
//Napiši program koji izračunava i štampa srednju vrednost sledećeg niza od deset brojeva: 1, 4, 9, …, 81, 100 .
let middle = 0;
let help = 0;
const arr3 = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < arr3.length; i++) {
  help += arr3[i];
  middle = help / arr3.length;
  
}
console.log(`Prosek brojeva u nizu je ${middle}`);

//Brojevi djeljivi sa tri
//Napiši program za prebrojavanje prirodnih brojeva djeljivih sa 3 u intevalu od 1 do n (izabrati po volji).
const arr4 = [1,2,3,25,29,30,33,55,60];
let divisible;
console.log(`Brojevi u nizu koji su deljivi sa 3 su:`) ;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 3 === 0) {
    
    console.log(arr4[i]);
  }
  
}


//Koren prvih n brojeva
//Ispiši kvadratni koren brojeva od 1 do n.
const arr5 = [1,4,9,16,25,36,49,64];
let square = 0;

for (let i = 0; i < arr5.length; i++) {
  square = Math.sqrt(arr5[i]);
  console.log(`Kvadratni koren od ${arr5[i]} je ${square}`);
  
}


// Zbir kvadrata prvih n brojeva
// Izračunaj zbir kvadrata prirodnih brojeva od 1 do n.

const arr6 = [1,2,3,4,5,6];
let sqr=0;
let sum_sqr = 0;

for (let i = 0; i < arr6.length; i++) {
  sqr = Math.pow(arr6[i],2);
  sum_sqr += sqr;
  console.log(`Kvadrat od ${arr6[i]} je ${sqr}`)
  
}
console.log(`Zbir svih kvadrata je ${sum_sqr}`);

//Štampanje trougla
//Napiši program koji štampa sledeći trougao:

function makeTriangle(num) {
  let number = '';

  for (let i = 1; i <= num; i++) {
    console.log(number += '*');
  }
}
makeTriangle(10);
