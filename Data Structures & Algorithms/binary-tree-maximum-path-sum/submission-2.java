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
    public static int global = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        global = Integer.MIN_VALUE;
        dfs(root);
        return global;
    }

    public int dfs(TreeNode r){
        if(r == null){
            return 0;
        }
        int left =  Math.max(dfs(r.left), 0);
        int right = Math.max(dfs(r.right), 0);
        global = Math.max(global, (r.val + left + right));
        return r.val + Math.max(left,right);
    }
}
