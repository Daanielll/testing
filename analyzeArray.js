function analyzeArray(arr) {
  const minN = Math.min(...arr);
  const maxN = Math.max(...arr);
  const avg = arr.reduce((sum, a) => sum + a, 0) / arr.length;
  const lng = arr.length;
  return {
    average: avg,
    min: minN,
    max: maxN,
    length: lng,
  };
}
module.exports = analyzeArray;
