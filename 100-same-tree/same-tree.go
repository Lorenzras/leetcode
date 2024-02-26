func isSameTree(p *TreeNode, q *TreeNode) bool {
    // Both trees are empty
    if p == nil && q == nil {
        return true
    }

    // One tree is empty, and the other is not
    if p == nil || q == nil {
        return false
    }

    // The values of the nodes are different
    if p.Val != q.Val {
        return false
    }

    // Recursively check the left and right subtrees
    return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
}