const readline = require('readline-sync');

function getUserPrompt(){
    let maxOutput;
    let done = false;
    while(true){
        maxOutput=readline.question("Please enter the maximum number output");
        if (parseInt(maxOutput,10)!= NaN){
            return parseInt(maxOutput,10);
        }
        else{
            console.log("Please enter a valid number");
        }
    }
}

// Here, we create our main function.
 /*  Rules:
    -Print 1-100
    -Multiple of 3 - Print Fizz
    -Multiple of 5 - Print Buzz
    -Multiple of 3 & 5 - Print FizzBuzz
    -Multiple of 7 - Print Bang >> Append Bang in the end e.g. FizzBuzzBang or FizzBang
    -Multiple of 11 -Print ONLY BONG nothing else
    -Multiple of 13 - Fezz should go before first thing with B, Print even with Bong
    -Multiple of 17 - Reverse current order only if not  number
    -Prompt user input >> max number of output
    -Prompt user for rules 
    -Write in a single line
 */

    function fizzbuzz(maxOutput) {
    console.log('Welcome to FizzBuzz!');
    let fizzBuzzArr=[];    
    for (let i=1; i<=maxOutput; i++){
        let word="";
        if(i%3===0){
           word="Fizz";
        }
        if(i%5===0){
           word+="Buzz";
        }
        if (i%7===0){
            word+="Bang";
        }
        if (i%11===0){
            word="Bong";

        }
        if(i%13===0){
            word.includes("B")?word.replace(/B/,"FezzB"):word+="Fezz";
            
        }
        if(word===""){
        word=i.toString();
        } 
       

        fizzBuzzArr.push(word);
    
    }

    console.log(fizzBuzzArr);
}

// Now we run the main function...

let output = getUserPrompt();
fizzbuzz(output);