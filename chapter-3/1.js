// const square = x => x * x

// // console.log(square(12))

// const makeNoise = () => {
//   console.log('Pling!')
// }

// makeNoise()

// const power = (base, exponent) => {
//   let result = 1
//   for (let i = 0; i < exponent; i++) {
//     result *= base
//   }
//   return result
// }

// console.log(power(2, 10))

// const hummus = factor => {
// 	const ingredient = (amount, unit, name) => {
// 		let ingredientAmount = amount * factor
// 		if (ingredientAmount > 1) unit += 's'
// 		console.log(`${ingredientAmount} ${unit} ${name}`)
// 	}

// 	ingredient(1, 'can', 'chickpeas')
// 	ingredient(0.25, 'cup', 'tahini')
// 	ingredient(0.25, 'cup', 'lemon juice')
// 	ingredient(1, 'clove', 'garlic')
// 	ingredient(2, 'tablespoon', 'olive oil')
// 	ingredient(0.5, 'teaspoon', 'cumin')
// }

// hummus(5)

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// // → 1
// console.log(wrap2());
// // → 2

// const multiplier = (factor) => {
//   return number => number * factor
// }

// let thrice = multiplier(3) //Creates a thrice(number) function

// console.log(thrice(3))

const power = (base, exponent) => {
  if (exponent === 0) return 1
  else return base * power(base, exponent - 1)
}

