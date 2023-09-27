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

function getUserNumberInput(){
    return parseInt( userInput.value );
}

function createAndWriteOutput( operator, resultBeforeCalc, calcNumber  ){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult( currentResult, calcDescription ); //from vendor file

}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult + enteredNumber;
    createAndWriteOutput( '+', initialResult , enteredNumber  );
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult - enteredNumber;
    createAndWriteOutput( '-', initialResult , enteredNumber  );
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult * enteredNumber;
    createAndWriteOutput( '*', initialResult , enteredNumber  );

}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult       = currentResult / enteredNumber;
    createAndWriteOutput( '/', initialResult , enteredNumber  );
}

addBtn.addEventListener( 'click', add );
subtractBtn.addEventListener( 'click', subtract );
multiplyBtn.addEventListener( 'click', multiply );
divideBtn.addEventListener( 'click', divide );

