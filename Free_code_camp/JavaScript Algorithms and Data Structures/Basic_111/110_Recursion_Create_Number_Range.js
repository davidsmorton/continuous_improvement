function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const rangeArray = rangeOfNumbers((endNum - startNum) + 1)
    rangeArray.push(endNum)
    return rangeArray

  }
};