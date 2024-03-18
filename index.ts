import {Matrix} from "./utils/matrix";

const matrix = new Matrix();

const generatedMatrix = matrix.generateRandomMatrix(5,5);

console.log('Matrix before setting zero in columns and rows:');
console.log(generatedMatrix);

const settedRowsAndColsToZero = matrix.setRowsAndColsToZero(generatedMatrix);

console.log('Matrix after setting zero in columns and rows:');
console.log(settedRowsAndColsToZero);