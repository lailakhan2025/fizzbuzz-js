const readline = require('readline-sync');

//Get User input

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

//FizzBuzz function
    function fizzbuzz(maxOutput) {
    console.log('Welcome to FizzBuzz!');
    let fizzBuzzArr=[];    
    for (let i=1; i<=maxOutput; i++){
        let word="";
        if(i%3===0){
           word="Fizz";
        }
        if(i%5===0){
           word +="Buzz";
        }
        if (i%7===0){
            word+="Bang";
        }
        if (i%11===0){
            word="Bong";

        }
        if(i%13===0){
            let index = word.indexOf("B");
            (index===-1)?word+="Fezz":word = word.substring(0,index)+"FezzB"+word.substring(index+1);
            
        }
        if(i%17===0){
           word= word.split(/(?=[A-Z])/).reverse().join("");
        }
        if(word===""){
        word=i.toString();
        } 
       

        fizzBuzzArr.push(word);
    
    }

    console.log(fizzBuzzArr);
}

// Main function...
let output = getUserPrompt();
fizzbuzz(output);