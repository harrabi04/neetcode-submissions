/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    int count = 0;
    public int goodNodes(TreeNode root) {
        bfs(root, root.val - 1);
        return count;
    }

    public void bfs(TreeNode root, int lastMax){
        if(root == null) return;

        if(root.val >= lastMax) count++;
        bfs(root.left, Math.max(root.val, lastMax));
        bfs(root.right, Math.max(root.val, lastMax));
        return;
    }
}
