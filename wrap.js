const wrap = function (string, num) {
  let newArr = [];
  let newLine = '';
  for (let i = 0; i < string.length; i++) {
    newLine += string[i];
    if (newLine.length >= num) {
      let splitChar = newLine.lastIndexOf(' ') + 1;
      if (splitChar){
        let lineToPush = newLine.slice(0, splitChar)
      newArr.push(lineToPush);
      newLine = newLine.slice(splitChar, newLine.length);
    }
    }
  }
  if (newLine.length) {
    newArr.push(newLine);
  }
  let newString = newArr.join('\n')
  return newString;
}

module.exports = wrap
