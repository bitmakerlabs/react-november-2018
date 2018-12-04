
// 2 kinds of data types in JS
// Basic data types: Boolean, Number, "null", "undefined", "String"
// Object type: Arrays, Objects, Functions --> all technicall "Objects"

const i = 1
const hungry = true
const x = null
// y
const s = "Hello"

// const makes the variable IMMUTABLE
// let allows the variable to mutate

// EXCEPT for Object types...
let a = [1, 2, 3]
a.push(4) // a ==> [1,2,3,4]

const b = [4, 5, 6]
b.push(7) // b ==> [4,5,6,7]

b = { a: 1, b: 2 } // ERROR

// Spread Operator
const add = (a, b) => {
  a + b
}

args = [3, 7]
add(...args)



let arr1 = ["a", "b", "c"]
let arr2 = [1, 2, 3]

let newarray = [...arr1, ...arr2, "More!!"]

const exampleObject = {
  name: "Dave",
  hometown: "Toronto"
}

const newObject = {
  ...exampleObject,
  favouriteFood: "Pizza"
}

const moreData = {
  specialty: 'Security',
  laptop: 'Macbook Pro'
}

const lotsOfData = {
  ...newObject,
  ...moreData,
  ...moreData
}
