/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist1 = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }
  function dfs(x, y, idx) {
    if (idx === word.length) return true;
    if (x < 0 || x >= rows || y < 0 || y >= cols || board[x][y] !== word[idx]) {
      return false;
    }
    const temp = board[x][y];
    board[x][y] = "#";
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let [dx, dy] of directions) {
      if (dfs(x + dx, y + dy, idx + 1)) {
        return true;
      }
    }
    board[x][y] = temp;
    return false;
  }
  return false;
};

function exist2(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(x, y, idx) {
    if (idx === word.length) return true;

    if (
      x < 0 ||
      x >= rows ||
      y < 0 ||
      y >= cols ||
      visited[x][y] ||
      board[x][y] !== word[idx]
    )
      return false;

    visited[x][y] = true; // 방문 처리

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let [dx, dy] of directions) {
      if (dfs(x + dx, y + dy, idx + 1)) return true;
    }

    visited[x][y] = false; // 백트래킹 (상태 복원)
    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }

  return false;
}
