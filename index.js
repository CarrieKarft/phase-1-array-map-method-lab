let tutorials = [
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

const titleCased = () => {
  return tutorials.map((item) => {
    let words = item.split(" ")
    const firstPartOfWords = words.map((words) => words.charAt(0).toUpperCase() + words.slice(1))
    const tutorialsTitles = firstPartOfWords.join(" ")
    return tutorialsTitles;
    
    
  })
}
titleCased()

/*const titleCased = () => {
  return tutorials.map((splittingItUp) => splittingItUp.charAt(0).toUpperCase());
  
}*/
// console.log(titleCased())

/*const tryingThinsOut = () => {
  const newString = tutorials.join(", ");
  const wereGettingWeird = newString.toString().split(" ")
  const lastBitOfWord = wereGettingWeird.map((item) => item.slice(1))
  // console.log(lastBitOfWord)
  const tutorailFirstLetter = wereGettingWeird.map((titleWord) => titleWord.charAt(0).toUpperCase());
  tutorials = tutorailFirstLetter + lastBitOfWord
  console.log(tutorials)
 
  
}
titleCased()(/)

/*function splittingUp(array) {
  const newTutorials =  array.map((title) => title.split(" "))
  return newTutorials
}
splittingUp(tutorials);*/

/*const tryingThisOut = array => {
  const arr =  array.split(' ');
  return arr
}
console.log(tryingThisOut(tutorials));*/