console.log("Calculator");
//js calculator
const calculator = {
    add: function(a, b) {
        return (a+b);
    },
    sub: function(a,b) {
        return  (a-b);
    },
    multi: function(a,b) {
        return  (a*b);
    },
    divide: function(a,b) {
        return  (a/b) ;
    },
    powerof: function(a,b) {
        return  (a**b) ;
    },
    mod: function(a,b) {
        return  (a%b) ;
    }
};
// When using return instead of alert, nothing will appear on the console. 
calculator.add(2,2);
calculator.sub(4,2);
calculator.divide(4,2);
calculator.powerof(2,2);
calculator.mod(5,2);

console.log(calculator.add(2,3)); // when "return" was "console.log()" -->undefined-- > no value assigned to the function. 

// when return
const result = calculator.powerof(2,3);
console.log(result);

// able to view in the console inputing the variable name.
const plusResult = calculator.add(4,5);
const minusResult = calculator.sub(plusResult,10);
const powerofResult = calculator.powerof(10, minusResult);
const timesResult = calculator.divide(powerofResult, minusResult);
const multiResult = calculator.multi(timesResult, powerofResult);

// can use console.log to print in console.
