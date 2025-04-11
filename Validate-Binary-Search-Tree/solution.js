var isValidBST = function (root) {
  // 초기값: 전체 값 범위를 넘겨줌
  return validate(root, -Infinity, Infinity);
};

function validate(node, min, max) {
  // base case: null이면 유효한 BST (리프 노드의 자식 등)
  if (node === null) return true;

  // 현재 노드의 값이 min, max 범위를 벗어나면 → 유효하지 않음
  if (node.val <= min || node.val >= max) return false;

  // 왼쪽 서브트리는 현재 노드보다 작아야 하므로 max를 node.val로 제한
  // 오른쪽 서브트리는 node.val보다 커야 하므로 min을 node.val로 제한
  return (
    validate(node.left, min, node.val) && validate(node.right, node.val, max)
  );
}
