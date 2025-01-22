const readline = require('readline-sync');

//Get User input for max number

function getMaxNumber(){
    let maxOutput;
    while(true){
        maxOutput=parseInt(readline.question("Please enter a positive integer greater than 1 for maximum output"));
        if(!isNaN(maxOutput)&&maxOutput>1){
            return maxOutput;
        }
        else{
            console.log("Invalid response");
        }
        
    }
}
// Get User rules
function getRules(){
    const options = [3,5,7,11,13,17];
    let userRules =[];
    let count =0;
    while(count<6){
    let rulesInput = readline.question(`Do you want to include rule: ${options[count]}? Type y/n`);
    if(rulesInput.toLowerCase()==="y"){
        userRules.push(options[count]);
        count++;
    }
    else if (rulesInput.toLowerCase()==="n"){
        count++;
    }
    else{
        rulesInput= readline.question(`Invalid response`);
    }
    }
    return userRules;
}


//FizzBuzz function
    function fizzbuzz(maxOutput,rules) {
    console.log('Welcome to FizzBuzz!');
    let fizzBuzzArr=[];    
    for (let i=1; i<=maxOutput; i++){
        let word="";
        if(rules.includes(3)&&i%3===0){
           word="Fizz";
        }
        if(rules.includes(5)&&i%5===0){
           word +="Buzz";
        }
        if (rules.includes(7)&&i%7===0){
            word+="Bang";
        }
        if (rules.includes(11)&&i%11===0){
            word="Bong";

        }
        if(rules.includes(13)&&i%13===0){
            let index = word.indexOf("B");
            (index===-1)?word+="Fezz":word = word.substring(0,index)+"FezzB"+word.substring(index+1);
            
        }
        if(rules.includes(17)&&i%17===0){
           word= word.split(/(?=[A-Z])/).reverse().join("");
        }
        if(word===""){
        word=i.toString();
        } 
       

        fizzBuzzArr.push(word);
    
    }

    console.log(fizzBuzzArr);
}

// Main...
fizzbuzz( getMaxNumber(), getRules());
