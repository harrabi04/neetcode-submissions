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
    public List<List<Integer>> levelOrder(TreeNode root) {
        LinkedList<TreeNode> q = new LinkedList();
        List<List<Integer>> result = new ArrayList();
        if(root != null) q.add(root);
        while(q.size() > 0){
            List<Integer> level = new ArrayList();
            int s = q.size();
            for(int i = 0; i < s; i++){
                TreeNode r = q.pop();
                level.add(r.val);
                if(r.left != null){
                    q.add(r.left);
                } 
                if(r.right != null){
                    q.add(r.right);
                } 
            }
            result.add(level);
        }
        return result;
    }
}
