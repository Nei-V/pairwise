function pairwise(arr, arg) {
  let originalString = document.getElementById("originalArrayString").value;
  let originalArray = originalString.split(",").map(Number);
  let sum = document.getElementById("target").value;
  console.log("original array", originalArray, "and the target sum is,", sum);
  let result = [];
  let sumOfSumIndices = 0;
  let sumIndices = 0;
  let itemIndex = 0;

  for (let i = 0; i < originalArray.length - 1; i++) {
    if (originalArray[i] !== undefined) {
      result = originalArray.reduce((accumulator, current, currentIndex) => {
        let sumIndices = 0;
        console.log("originalArray before if", originalArray);
        console.log("current before if", current, "currentIndex", currentIndex, "sum is", sum, "sumIndices", sumIndices, "accumulator", accumulator);
        if ((accumulator !== undefined) && (current !== undefined) && (currentIndex !== i) && (itemIndex !== (originalArray.length - 1)) && (accumulator + current == sum)) {
          console.log("original length is in if", originalArray.length, "place of acumulator", i, "place of current in if", currentIndex);
          console.log("sumIndices in if", sumIndices);
          sumIndices = i + currentIndex;
          sumOfSumIndices += sumIndices;
          accumulator = undefined;
          current = undefined;
          originalArray[currentIndex] = undefined;
          sumIndices = 0;
        }
        else {
          sumIndices = 0;
        };
        originalArray[i] = undefined;
        console.log("sumIndices", sumIndices);
        console.log("accumulator is", accumulator, "current is", current);

        return accumulator;
      }, originalArray[i]);
    };

  };
  console.log("sumofallindeces", sumOfSumIndices);

  document.getElementById("result").innerHTML = sumOfSumIndices;
  return sumOfSumIndices;
};

