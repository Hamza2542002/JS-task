let score;
let input;

while (true) {
  input = prompt("Enter Your Garde");
  if (!input) break;
  score = parseInt(input);

  if (isNaN(score)) {
    console.log("Not a Number");
  } else if (score < 0 || score > 100) {
    console.log("Invalid Score");
  } else if (score === 100) {
    console.log("Perfect Score");
  } else if (score >= 85) {
    console.log("You got an A");
  } else if (score >= 75) {
    console.log("You got a B");
  } else if (score >= 65) {
    console.log("You got a C");
  } else if (score >= 50) {
    console.log("You got a D");
  } else if (score >= 0) {
    console.log("You got an F");
  }

  switch (true) {
    case isNaN(score):
      console.log("Not a Number");
      break;
    case score < 0 || score > 100:
      console.log("Invalid Score");
      break;
    case score === 100:
      console.log("Perfect Score");
      break;
    case score >= 85:
      console.log("You got an A");
      break;
    case score >= 75:
      console.log("You got a B");
      break;
    case score >= 65:
      console.log("You got a C");
      break;
    case score >= 50:
      console.log("You got a D");
      break;
    case score >= 0:
      console.log("You got an F");
      break;
    default:
      console.log("Invalid Score");
      break;
  }
}
