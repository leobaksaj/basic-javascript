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
const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '(0 + 10) * 3 / 2 - 1';

outputResult( currentResult, calculationDescription );