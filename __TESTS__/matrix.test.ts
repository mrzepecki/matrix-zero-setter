import {Matrix} from "../utils/matrix";


const matrix = new Matrix();

test('Generate Matrix 3x3', () => {
 const newMatrix = matrix.generateRandomMatrix(3, 3);

 expect(newMatrix.length).toBe(3);
 expect(newMatrix[0].length).toBe(3);
});

test('Generate Matrix 10x3', () => {
 const newMatrix = matrix.generateRandomMatrix(3, 10);

 expect(newMatrix.length).toBe(10);
 expect(newMatrix[0].length).toBe(3);
});

test('Generate Matrix 20x78', () => {
 const newMatrix = matrix.generateRandomMatrix(78, 20);

 expect(newMatrix.length).toBe(20);
 expect(newMatrix[0].length).toBe(78);
});

test('Generate Matrix 300x300', () => {
 const newMatrix = matrix.generateRandomMatrix(300, 300);

 expect(newMatrix.length).toBe(300);
 expect(newMatrix[0].length).toBe(300);
});

test('Set columns and rows to 0 in 3x3 matrix', () => {
 const inputMatrix = [
  [1, 3, 4],
  [4, 0, 9],
  [8, 3, 4]
 ];

 const expectedMatrix = [
  [1, 0, 4],
  [0, 0, 0],
  [8, 0, 4]
 ]

 const newMatrix = matrix.setRowsAndColsToZero(inputMatrix);

 expect(newMatrix).toEqual(expectedMatrix);
});

test('Set columns and rows to 0 in 5 x 7 matrix', () => {
 const inputMatrix = [
  [5, 4, 1, 5, 6],
  [1, 1, 5, 0, 4],
  [2, 3, 6, 3, 6],
  [4, 3, 3, 6, 0],
  [5, 6, 5, 2, 3],
  [2, 1, 6, 4, 6],
  [2, 1, 2, 4, 6]

 ];

 const expectedMatrix = [
  [5, 4, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [2, 3, 6, 0, 0],
  [0, 0, 0, 0, 0],
  [5, 6, 5, 0, 0],
  [2, 1, 6, 0, 0],
  [2, 1, 2, 0, 0]
 ];

 const newMatrix = matrix.setRowsAndColsToZero(inputMatrix);

 expect(newMatrix).toEqual(expectedMatrix);
});
