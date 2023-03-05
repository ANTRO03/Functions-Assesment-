const letterOne = [name];

function firstLetterName(name){
    alert("The name " + name + " starts with the letter " + name[0] );
}


firstLetterName("Tristan");

let oneDivisible = true;
let twoDivisible = false;

function divisibleByTwo(x , y){
  let number = x
  let number2 = y
  console.log("The number " + number +  " is divisble by 2: ");
  console.log("The number " + number2 +  " is divisble by 2: ");

  if(number % 2 == 0){
  console.log(oneDivisible)
  }
else{
  console.log(twoDivisible)
  }
   return x % y;
}



divisibleByTwo(6, 7);


function largestNum(arr){
    let num = 0;

    for (let i = 0; i < arr.length; i++){
      if (arr[i] >= num){
        num = arr[i];
      }
    }
    return num;
  }
  
const arr = [1, 14, 25, 11, 5, 19];
console.log(largestNum(arr));
