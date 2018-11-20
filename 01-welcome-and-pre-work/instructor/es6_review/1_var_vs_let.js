// ES5

function varTest() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}


varTest();

// ES6
function letTest() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}

letTest();


const y = 666;
console.log(y);
y = 777;
console.log(y);
