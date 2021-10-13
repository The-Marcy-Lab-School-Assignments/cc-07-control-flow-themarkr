//1
function sumOfFourAndSix(){
  let multiplesSum = 0;
  for (let i = 1 ; i<=1000; i++){
      if(i % 4 === 0 && i % 6 ===0){
          multiplesSum += i;
      }
  }
  return multiplesSum;
}

//2
function oddAndEvenInFifteen(){
  for (let i = 0; i <= 15; i++){
      if( i % 2 === 0){
          console.log(`${i} is even`);
      }else{
          console.log(`${i} is odd`);
      }
  }
}

//3
function assignGrade(num){
  if (num <= 100){
      if(num >=91){
         return "A";
      }else if(num >=81){
          return "B";
      }else if(num >= 71){
          return "C";
      }else if(num >= 65){
          return "D";
      }else{
          return "F";
      }
  }
}
//carmen said to try doing it without &&
//   }else if(num <= 90 && num >=81){
//       return "B";
//   }else if(num <= 80 && num >=71){
//       return "C";
//   }else if(num <= 70 && num >=65){
//       return "B";
//   }else{
//       return "F";
//   }
// }

console.log(sumOfFourAndSix());
oddAndEvenInFifteen();
console.log(assignGrade(66));



