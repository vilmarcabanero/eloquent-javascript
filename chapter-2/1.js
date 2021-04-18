// //Bindings or variables
// let vilsDebt = 1000
// vilsDebt = vilsDebt - 400
// console.log(vilsDebt)

// let one = 1, two = 2
// console.log(one + two)

// let theNumber = Number(prompt('Pick a number'))
// alert('Your number is the square root of ' + theNumber * theNumber)

let theNumber = prompt('Pick a number')
let theString = theNumber
theNumber = Number(theNumber)

if(!Number.isNaN(theNumber)) 
  alert(`Your number is the square root of ${theNumber * theNumber}.`)
else alert(`${theString} is not a valid number. Please try another value.`)