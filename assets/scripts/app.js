//  let userName = 'Max'; best practice camelCase
//  const totalUsers = 15; //  You can't change a value for const
 
//VARIABLES
// Allowed variables
// let userName5 
// let $userNAme
// let _userName

// Not allowed variables
// let user_name
// let 5userName
// let user-name
// let let

//OPERATORS
// + - * / % ** =

//let calculationDesc = '( ${defaultResult} 0 + 10) * 3 / 2 - 1';


const defaultResult = 0;
let currentResult   = defaultResult;
let logEntries =[];
 
function getUserNumberInput(){
    return parseInt( userInput.value );
}

function createAndWriteOutput( operator, resultBeforeCalc, calcNumber  ){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult( currentResult, calcDescription ); //from vendor file

}

function writeToLog( operationIdentifier, prevResult, operationNumber, newResult ){
    const logEntry = {
        operation:  operationIdentifier,
        prevResult: prevResult,
        number:     operationNumber,
        result:     newResult,
    };
    logEntries.push( logEntry );
    console.log( logEntry.operation );
    console.log( logEntries );

}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult + enteredNumber;
    createAndWriteOutput( '+', initialResult , enteredNumber  );
    writeToLog( 'ADD', initialResult, enteredNumber, currentResult );
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult - enteredNumber;
    createAndWriteOutput( '-', initialResult , enteredNumber  );
    writeToLog( 'SUBTRACT', initialResult, enteredNumber, currentResult );
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult * enteredNumber;
    createAndWriteOutput( '*', initialResult , enteredNumber  );
    writeToLog( 'MULTIPLY', initialResult, enteredNumber, currentResult );

}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult / enteredNumber;
    createAndWriteOutput( '/', initialResult , enteredNumber  );
    writeToLog( 'DIVIDE', initialResult, enteredNumber, currentResult );
}

addBtn.addEventListener( 'click', add );
subtractBtn.addEventListener( 'click', subtract );
multiplyBtn.addEventListener( 'click', multiply );
divideBtn.addEventListener( 'click', divide );

