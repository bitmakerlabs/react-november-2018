function add_1(x, y) {
  return x + y;
}

let add_2 = (x, y) => {
  return x + y
}

const add_3 = (x, y) => {
  return x + y
}

const add_4 = (x, y) => x + y

const add_5 = (x, y) => {
  x + y
}

// Can omit parenthesis if have only one argument
const foo = bar => bar + 1

// no argument, cannot omit parenthesis
const baz = () => 100

const obj = () => (
  {
    key1: 'value1',
    key2: 'value2'
  }
)

console.log(add_1(2,3))
console.log(add_2(2,3))
console.log(add_3(2,3))
console.log(add_4(2,3))
console.log(add_5(2,3))

console.log(foo(1))
console.log(baz())
console.log(obj())
