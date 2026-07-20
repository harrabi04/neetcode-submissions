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
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null) return null;
        if(key < root.val){
            // look left   
            root.left = deleteNode(root.left, key);
        }else if(key > root.val){
            //look right
            root.right = deleteNode(root.right, key);
        }else{
            if(root.left == null){
                root = root.right;
            } else if(root.right == null){
                root = root.left;
            }
            else{
               TreeNode min = findMin(root.right);
               root.val = min.val;
               root.right =  deleteNode(root.right, min.val);
            }
        }
        return root;    
    }

    public TreeNode findMin(TreeNode x){
        TreeNode t = x;
        while(t != null &&t.left != null ){
            t = t.left;
        }
        return t;
    }
}