function solution(arr) {
  return arr !== null && arr.length > 0 ? arr.sort((a, b) => a - b) : [];
}

console.log(solution([1, 2, 10, 50, 5]));
console.log(solution([]));
console.log(solution(null));
