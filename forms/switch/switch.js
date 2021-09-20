
let firstName = prompt("What's your first name?")
console.log(firstName)

let state = prompt("What's ur state in 2 letters?")
console.log(state)

let temp = prompt("What's the wheather outside in F?")
console.log(temp)

let messages = [`${firstName}, wear a warm coat, hat, scarf and gloves.`,`${firstName}, wear a warm coat but you won't need a hat, scarf or gloves.`,`${firstName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`,`${firstName}, wear a warm coat, hat and gloves. Maybe a scarf too.`]
console.log(messages)

switch (true) {
  case (temp < 32 && state == 'NE'):
    console.log(messages[0])
    break;
  case (temp >= 32 && temp <= 50 && state == 'NE'):
    console.log(messages[1])
    break;
  case (temp >= 32 && temp <= 50 && state == 'FL'):
    console.log(messages[2])
    break;
  case (temp > 50 && temp <= 70 && state == 'FL'):
    console.log(messages[3])
    break;
  default: console.log("Don't currently have a recommendation.")
    break;
}
