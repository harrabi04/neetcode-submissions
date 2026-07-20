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
    public int maxDepth(TreeNode root) {
        int depth = 0;
        Queue<TreeNode> q = new LinkedList<>();
        if(root != null){
            q.add(root);
        }

        while(q.size() > 0){
            int s = q.size();
            depth++;
            for(int i = 0; i < s;i++){
                
                TreeNode r = q.poll();
                if(r.left != null){
                    q.add(r.left);
                }
                if(r.right != null){
                    q.add(r.right);
                }
            }
        }
        return depth;
    }
}
