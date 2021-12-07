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


function titleCased(array) { 
  
  const newArray = array.map((sentence) => {
    
    const wordArr = sentence.split(" ");
    console.log(wordArr)
    return  wordArr.map(word => { 
      if (word === word.charAt().toLowerCase() && word.charAt() === word.toLowerCase()) {
        return word.charAt().toUpperCase() + word.slice(1).toLowerCase()
      } 
      else {
        
        return word
        
      }
      
    }
    ).join(" ")
  })
  console.log(newArray)

  return newArray
}