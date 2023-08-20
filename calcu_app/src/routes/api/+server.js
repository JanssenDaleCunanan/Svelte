// @ts-nocheck
// const express = require('express');


// const router = express.Router();
// import calculatorController from '../../backend/calculatorController';

// router.post('/calculate', (req, res) => {
//   calculatorController.calculate(req.body)
//     // @ts-ignore
//     .then(resultFromController => res.send(resultFromController))
//     .catch(error => res.status(500).send(error.message));
// }); 

// module.exports = router;

 
export async function POST({request}) {
  const screenOutput = request.body;
  console.log ("WELCOME TO SERVER")
  console.log (screenOutput)

  // @ts-ignore
   
  const parsedTokens = screenOutput.map(token =>
    /^\d+(\.\d+)?$/.test(token) ? parseFloat(token) : token
);

console.log(`THIS IS THE parsedtokens: ${parsedTokens}`)
  // Implements the actual calculation
  let result = parsedTokens[0];
  for (let i = 1; i < parsedTokens.length; i += 2) {
      const operator = parsedTokens[i];
      const operand = parsedTokens[i + 1];

      if (operator === "+") {
          result += operand;
          } else if (operator === "-") {
          result -= operand;
          } else if (operator === "*") {
          result *= operand;
          } else if (operator === "/") {
          result /= operand;
      }
  }

    // FINAL RESULT TO BE RETURNED

    console.log(`THIS IS THE RESULT: ${result}`)
    return result;
  

}