function solution(answers) {
  let pattern1 = [1, 2, 3, 4, 5];
  let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var answer = [];
  let answer1 = 0;
  let answer2 = 0;
  let answer3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (pattern1[i % 5] === answers[i]) answer1++;
    if (pattern2[i % 8] === answers[i]) answer2++;
    if (pattern3[i % 10] === answers[i]) answer3++;
  }
  let max = Math.max(answer1, answer2, answer3);
  if (answer1 === max) answer.push(1);
  if (answer2 === max) answer.push(2);
  if (answer3 === max) answer.push(3);
  return answer;
}
solution([1, 2, 3, 4, 5]);
