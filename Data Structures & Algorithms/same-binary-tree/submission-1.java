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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        return bfs(p).equals(bfs(q));
    }

    public List<Integer> bfs(TreeNode p){
        List<Integer> result = new ArrayList();
        LinkedList<TreeNode> queue = new LinkedList();
        if(p != null) queue.add(p);
        while(queue.size() > 0){
            TreeNode root  = queue.pop();
            if(root != null ){
                result.add(root.val);
                queue.add(root.left);
                queue.add(root.right);
            }else {
                result.add(null);
            }
        }
        return result;
    }
}
