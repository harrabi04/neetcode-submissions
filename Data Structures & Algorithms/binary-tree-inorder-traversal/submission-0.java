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
    
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> l = new ArrayList<>();
        return helper(root, l);
    }

    public List<Integer> helper(TreeNode root, List<Integer> l){
        if(root == null){
            return l;
        }

        helper(root.left, l);
        l.add(root.val);
        helper(root.right, l);

        return l;
    }
}