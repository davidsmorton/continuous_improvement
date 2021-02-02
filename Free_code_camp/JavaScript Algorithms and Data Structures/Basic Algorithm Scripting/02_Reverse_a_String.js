function reverseString(str) {
  let arr = str.split([,])
  console.log(arr)
  let arrRev = arr.reverse()
  console.log(arrRev)
  str = arrRev.join('')
  console.log(str)
  return str;
}

reverseString("hello");