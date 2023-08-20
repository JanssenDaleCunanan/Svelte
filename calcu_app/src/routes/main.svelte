<script>
   
    // @ts-ignore
    import { POST } from './api/+server.js';

    let screenOutput = "0";
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    let result = null;
    let res = false;

    // @ts-ignore
    // Adding numbers and operators in screenOutput variable
    // @ts-ignore
    const add = num => () => {
        let ls = screenOutput.substr(screenOutput.length - 1, 1);

        if (screenOutput == '0') {
            if (num == '/' || num == '*' || num == '-' || num == '+' || num == ".") {
            screenOutput = screenOutput
            } else {
            screenOutput = ''
            }
        }

        else if (screenOutput == "Infinity") {
            screenOutput = ''
        }

        else if ((ls == '/' || ls == '*' || ls == '-' || ls == '+' || ls == '.') 
            && (num == '/' || num == '*' || num == '-' || num == '+' || num == '.')) {
            screenOutput = screenOutput.substr(0, screenOutput.length-1)
        }

        else if (res) {
            if (num == '/' || num == '*' || num == '-' || num == '+' || num == ".") {
            screenOutput = screenOutput
            } else {
            screenOutput = ''
            }
        }

        else if (screenOutput == '0' && (num == '/' || num == '*' || num == '-' || num == '+')) {
            num = ''
        }

        screenOutput += num
        res = false
    };
  

    // MAIN CALCULATION FUNCTION
    
    // @ts-ignore
    // const answer = async function processAnswer(){
    //     let expression;

    //     // PARSING

    //     try {
    //         // Finds all numbers and operators and store them in an array
    //         const tokens = screenOutput.match(/(\d+(\.\d+)?)|[\+\-\*\/]/g);
    //         console.log(`THIS IS THE TyPEOF TOKENS ${typeof tokens}`);
    //         console.log(`THIS IS THE TOKENS ${tokens}`);

    //         // Error handler
    //         if (!tokens) {
    //         throw new Error("Invalid expression");
    //         }

    //         expression = tokens;
    //     } catch (error) {
    //         throw new Error("Invalid expression");
    //     }

    //     // Send the data to the backend
    //     try {
    //         const response = await fetch('/calculate', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(expression), // Pass the expression as the request body data
    //         });

    //         // Handle the response from the server
    //         if (response.ok) {
    //         console.log('Data sent successfully');
    //         const result = await response.json();
    //         console.log(`THIS IS THE TOTAL ${result}`);
    //         screenOutput = result.toString(); // Return the result as a number
    //         } else {
    //         console.error('Failed to send data');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const answer = () => {
        
        const tokens = screenOutput.match(/(\d+(\.\d+)?)|[\+\-\*\/]/g);
            console.log(`THIS IS THE TyPEOF TOKENS ${typeof tokens}`);
            console.log(`THIS IS THE TOKENS ${tokens}`);


        // @ts-ignore
        POST({ request: { body: tokens } })
            // @ts-ignore
            .then((result) => {
            console.log(`THIS IS THE TOTAL ${result}`);
            screenOutput = result.toString();
            })
            // @ts-ignore
            .catch((error) => {
            console.error('An error occurred:', error);
            // Handle the error
            });
    };
      
       


    
    // All Clear
    const allClear = () => {
    // @ts-ignore
    screenOutput = '0'
    };

    // Delete
    const del = () => {
        // @ts-ignore
        if (screenOutput.length == 1 || screenOutput.length <= 0) {
            // @ts-ignore
            screenOutput = '0'
        }

        // @ts-ignore
        else if (screenOutput.length > 0) {
            // @ts-ignore
            screenOutput = screenOutput.substr(0, screenOutput.length-1)
        }
    };


    // Squared
    const squared = () => {
        // @ts-ignore
        let ans = screenOutput * screenOutput;

        if (!(isNaN(ans))) {
            // @ts-ignore
            screenOutput = ans.toString()
            
        }

        else {
            // @ts-ignore
            screenOutput = screenOutput
        }
    }



</script>



<!-- inline CSS -->
<style>
    @import 'bootstrap/dist/css/bootstrap.min.css';

    * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    
    }

    main {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    background-color: #2BB1B3;
    padding: 1rem
    
    }

    main #container {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    padding: 3rem;
    border: 2px solid #1D283A;
    border-radius: 2rem;
    background-color: #1D283A;
    }

    main #container #display {
    padding: 5px;
    height: 70px;
    width: 100%;
    }

    main #container #display input {
    width: 100%;
    height: 100%;
    background: gray;
    border: solid white 2px;
    border-radius: 3px;
    text-align: right;
    font-size: 2.5rem;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    color: white;
    max-width: 324.39px;
    padding-right: 5px;
    font-weight: bold;
    }

    main #container .line {
    width: 100%;
    margin: 5px 0 5px 0;
    -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    }

    main #container .line .colspan {
    width: 155px;
    }

    main #container .line button {
    width: 70px;
    height: 70px;
    margin: 5px;
    background-color: #354357;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 3px;
    } 
    #ArrowUp sup {
        background-color: inherit;
    }

    main #container .line button:hover {
    background-color: #E3BC61;
    }

    main #container .line button:active {
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
    }

    #Enter{
        background-color: #dd660d !important;
        border: 1px solid #dd660d !important;
        border-radius: 10px !important;
    }
   
   .number{
    background-color:  #D0CCCE !important;
    border: 1px solid #D0CCCE !important;
    border-radius: 20px !important;

   }
   .operation{
    background-color: #82819D !important;
    border: 1px solid #82819D !important;
    border-radius: 3rem !important;
   }

   .operationTop{
    background-color: #82819D !important;
    border: 1px solid #82819D !important;
    border-radius: 10px !important;
   }

</style>


<!-- MAIN UI -->
<main>

	<div id="container">
		<div id="display">
			{#if screenOutput == "Infinity"}
			<input type="text" readonly value="" maxlength="20">
			{:else}
			<input type="text" readonly bind:value={screenOutput} maxlength="20">
			{/if}
		</div>

		<div id="buttons" class="mt-4">
			<div class="line d-flex">
				<button id="Backspace" class="colspan operationTop" on:click={del}>del<i style="font-size: 1.9rem;" class="fas fa-long-arrow-alt-left"></i></button>
				<button id="Delete" class="colspan operationTop" on:click={allClear}>AC</button>
			</div>
			<div class="line d-flex">
				<button id="(" class="operation" on:click={add("(")}>(</button>
				<button id=")" class="operation"  on:click={add(")")}>)</button>
				<button id="ArrowUp" class="operation"  on:click={squared}>x<sup>2</sup></button>
				<button id="/" class="operation"  on:click={add("/")}>/</button>
			</div>
			<div class="line d-flex">
				<button id="7" class="number" on:click={add("7")}>7</button>
				<button id="8" class="number" on:click={add("8")}>8</button>
				<button id="9" class="number"  on:click={add("9")}>9</button>
				<button id="*" class="operation" on:click={add("*")}>*</button>
			</div>
			<div class="line d-flex">
				<button id="4" class="number"  on:click={add("4")}>4</button>
				<button id="5" class="number"  on:click={add("5")}>5</button>
				<button id="6" class="number"  on:click={add("6")}>6</button>
				<button id="-" class="operation" on:click={add("-")}>-</button>
			</div>
			<div class="line d-flex">
				<button id="1" class="number"  on:click={add("1")}>1</button>
				<button id="2" class="number"  on:click={add("2")}>2</button>
				<button id="3" class="number"  on:click={add("3")}>3</button>
				<button id="+" class="operation" on:click={add("+")}>+</button>
			</div>
			<div class="line d-flex">
				<button id="0" class="number"  on:click={add("0")}>0</button>
				<button id="." class="number" on:click={add(".")}>.</button>
				<button id="Enter" on:click={answer} class="colspan">=</button>
			</div>
		</div>
	</div>
</main>