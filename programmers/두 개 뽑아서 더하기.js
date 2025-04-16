function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  let hash = [...new Set(answer)].sort((a, b) => a - b);
  return hash;
}

solution([2, 1, 3, 4, 1]);
