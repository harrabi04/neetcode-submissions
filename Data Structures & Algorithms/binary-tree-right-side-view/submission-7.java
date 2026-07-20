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
       Deque<TreeNode> queue = new LinkedList<>();  
       List<Integer> result = new ArrayList<>();
       if(root != null){
        queue.add(root);
       }
       while(queue.size() > 0){
        int x = queue.size();
        for(int i = 0; i < x; i++){
            TreeNode current = queue.poll();
            if(current.left != null){
               queue.add(current.left);
               }
            if(current.right != null){
               queue.add(current.right);
            }
            if(i == x - 1){
                System.out.println("added" + " " + current.val);
                result.add(current.val);
            }
        }
       } 
        return  result;
    }
}
