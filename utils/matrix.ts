export class Matrix {
 generateRandomMatrix(x: number, y: number): number[][] {
  let matrix = [];

  for (let i = 0; i < y; i++) {
   let row: number[] = [];

   for (let j = 0; j < x; j++) {
    const number: number = Math.floor(Math.random() * 7)
    row.push(number)
   }

   matrix.push(row)
  }

  return matrix;
 }

 _zeroRowsAndColsFinder(matrix: number[][]) {
  const rowsCount = matrix.length
  const colsCount = matrix[0].length
  const rowsToZero: Set<number> = new Set();
  const colsToZero: Set<number> = new Set();

  for (let r = 0; r < rowsCount; r++) {
   for (let c = 0; c < colsCount; c++) {
    if (matrix[r][c] === 0) {
     rowsToZero.add(r);
     colsToZero.add(c);
    }
   }
  }

  return {
   rows: rowsToZero,
   cols: colsToZero
  }
 }

 setRowsAndColsToZero(newMatrix: number[][]) {
  const {rows, cols} = this._zeroRowsAndColsFinder(newMatrix);
  const matrix = newMatrix.map(row => row.slice());
  const rowsCount = matrix.length
  const colsCount = matrix[0].length

  rows.forEach(row => {
   for (let o = 0; o < colsCount; o++) {
    matrix[row][o] = 0;
   }
  })

  cols.forEach(col => {
   for (let f = 0; f < rowsCount; f++) {
    matrix[f][col] = 0;
   }
  })

  return matrix
 }
}



