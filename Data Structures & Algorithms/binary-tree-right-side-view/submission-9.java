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
    public List<Integer> rightSideView(TreeNode root) {
        Queue<TreeNode> q = new LinkedList();
        if(root != null) q.add(root);
        List<Integer> result = new ArrayList();
        while(q.size() > 0){
            int x = q.size();
            for(int i = 0; i < x; i++){
                TreeNode r = q.poll();
                if(r.left != null) q.add(r.left);
                if(r.right != null ) q.add(r.right);
                if(i == x - 1) result.add(r.val);
            }
        }
        return result;
    }
}
