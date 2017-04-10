// 1.
function stringy(size){
  var string = "";
  for(var i = 0; i <size; i++) {
    string += i%2 === 1? "0" : "1";
  }
  return string;
};

 console.log(stringy(12));

// var array = [0, 1, 0, 1, 0, 1]
// for (var i = array.length; i > 0; i--) {
//   console.log(array[i - 1]);
// }

// 2.************************************************

function digits (number) {
    return number.toString().split("").map(Number).reverse();
}

console.log(digits(348597));

// var array = [3, 4, 8, 5, 9, 7]
// for (var i = array.length; i > 0; i--) {
//   console.log(array[i - 1]);
// }

// 3.************************************************

///0 + 1 = 1 1 + 1 = 2 1 + 2 = 3 2 + 3 = 5 3 + 5 = 8 …

function fibonacci(n) {
  if(n <= 2) {
      return n;
  } else {
      return fibonacci(n - 1) +  fibonacci(n - 2);
  }
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
 //4. ***************************************************

//
