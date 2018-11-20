function varTest() {
  var array = []

  for (var i=0; i<5; i++) {
    console.log('i: ', i)

    array.push(
      {
        foo: function() { console.log('array: ', i) }
      }
    )
  }

  array[0].foo();
  array[1].foo();
  array[2].foo();
  array[3].foo();
  array[4].foo();
}

varTest();

function letTest() {
  let array = []

  for (let i=0; i<5; i++) {
    console.log('i: ', i)

    array.push(
      {
        foo: function() { console.log('array: ', i) }
      }
    )
  }

  array[0].foo();
  array[1].foo();
  array[2].foo();
  array[3].foo();
  array[4].foo();
}

letTest()
