
// You should implement your task here.

module.exports = function towelSort(matrix) {

  let sortedData = [];

   if (matrix) {

  for (let i = 0; i < matrix.length; i++) {

    if (i % 2 === 0) {
      matrix[i].forEach(element => {
        sortedData.push(element);
      });
    } else {
      matrix[i].reverse().forEach(element => {
        sortedData.push(element);
      });
    }
  }
   } else {
     return sortedData;
   }
  return sortedData;
}
