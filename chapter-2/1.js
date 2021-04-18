// //Bindings or variables
// let vilsDebt = 1000
// vilsDebt = vilsDebt - 400
// console.log(vilsDebt)

// let one = 1, two = 2
// console.log(one + two)

// let theNumber = Number(prompt('Pick a number'))
// alert('Your number is the square root of ' + theNumber * theNumber)

// let theNumber = prompt('Pick a number')
// let theString = theNumber

// if (theNumber.length !== 0) {
//   theNumber = Number(theNumber)
//   if (!Number.isNaN(theNumber)) //Unless theNumber is not-a-number, do this
//     alert(`Your number is the square root of ${theNumber * theNumber}.`)
//   else alert(`${theString} is not a valid number. Please try another value.`)
// }
// else alert('Please enter a number.')

// let number = 0
// while (number <= 12) {
//   console.log(number)
//   number = number + 2
// }

// let count = 0, result = 1
// while (count < 10) {
//   result = result * 2
//   count++
// }

// console.log(result)

// let yourName
// do yourName = prompt('Who are you?')
// while (!yourName)

// alert(`Hello ${yourName}`)

// if (false != true)
//   console.log('That makes sense.')
//   if (1 < 2)
//     console.log('No surprise there.')

// for (let i = 0; i <= 12; i = i + 2) console.log(i)

// let result = 1
// for (let i = 0; i < 10; i++) result = result * 2
// console.log(result)

// for (let i = 20; ; i++) {
//   if (i % 7 === 0) {
//     console.log(i)
//     break
//   }
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 1) continue //after the first iteration, skip. Para di maprint ang 2
//   console.log(i+1)
// }

// switch (prompt('What is the weather like?')) {
//   case 'rainy':
//     alert('Remember to bring an umbrella.')
//     break
//   case 'sunny':
//     alert('Dress lightly')
//   case 'cloudy':
//     alert('Go outside.')
//     break
//   default:
//     alert('Unknown weather type!')
//     break
// }
// let hash = ''
// for (let i = 0; i < 7; i++) {
//   hash += '#'
//   console.log(hash)
// }

// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line)

// for (let i = 1; i <= 100; i++) {
// 	if (i % 3 === 0 && i % 5 !== 0) {
// 		console.log('Fizz')
// 		continue
// 	} else if (i % 5 === 0 && i % 3 !== 0) {
// 		console.log('Buzz')
// 		continue
// 	} else if (i % 3 === 0 && i % 5 === 0) {
// 		console.log('FizzBuzz')
// 		continue
// 	} else console.log(i)
// }

// for (let n = 1; n <= 100; n++) {
// 	let output = ''
// 	if (n % 3 == 0) output += 'Fizz'
// 	if (n % 5 == 0) output += 'Buzz'
// 	console.log(output || n) //Kapag '' lang ang output, choose n.
// }

// let chessBoard = '',
// 	size = 8
// for (let i = 0; i < size; i++) {
// 	for (let j = 0; j < size; j++) {
// 		if (chessBoard.length % 2 === 0) chessBoard += ' '
// 		else chessBoard += '#'
// 	}
// 	chessBoard += '\n'
// }

// console.log(chessBoard)

// let size = 8

// let board = ''

// for (let y = 0; y < size; y++) {
// 	for (let x = 0; x < size; x++) {
// 		if ((x + y) % 2 == 0) {
// 			board += ' '
// 		} else {
// 			board += '#'
// 		}
// 	}
// 	board += '\n'
// }

// console.log(board)
