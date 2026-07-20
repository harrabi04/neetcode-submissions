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
       Queue<TreeNode> queue = new LinkedList<>();  
       List<List<Integer>> result = new ArrayList<>();
       if(root != null){
        queue.add(root);
       }
        
       while(queue.size() > 0){
        
        List<Integer> list = new ArrayList<>();
        int x = queue.size();
        for(int i = 0; i < x; i++){
            TreeNode current = queue.poll();
            list.add(current.val);
            if(current.left != null){
               queue.add(current.left);
            }
            if(current.right != null){
               queue.add(current.right);
            }
        }
        result.add(list);
        
       } 
        return  result;
    }
}
