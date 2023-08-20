




    // @ts-ignore
export async function calculate(req) {
        const screenOutput = req

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


