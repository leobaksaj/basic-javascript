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

function add(){
    currentResult = currentResult + parseInt( userInput.value );
    outputResult( currentResult, '' );
}


addBtn.addEventListener( 'click', add );

