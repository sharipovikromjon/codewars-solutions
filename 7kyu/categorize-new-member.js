// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data){
  return data.map((arr) => arr[0] >= 55 && arr[1] > 7 ? "Senior" : "Open")
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]