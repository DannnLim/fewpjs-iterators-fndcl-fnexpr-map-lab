const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//----------Doesn't this one work too?------------------------


// function titleCased(tutorials) {
//   return tutorials.map(elements => {
//     return elements.split(" ").map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ")
//   })
// }

// console.log(titleCased(tutorials))

//---------------------------------------------------------------

const titleCased = () => {
  return tutorials.map(capitalize)
}

function capitalize(sentence) {
  return sentence.split(' ').map(capitalizeWord).join(' ')
}

function capitalizeWord(word) {
  const arr = word.split('')
  arr[0] = arr[0].toUpperCase()
  return arr.join('')
}

console.log(titleCased())