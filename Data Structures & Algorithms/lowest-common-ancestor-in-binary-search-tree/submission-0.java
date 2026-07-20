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
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
     /// get the list of all anscestor w ba#ed we get the closest 
     List<TreeNode> a = getAnscestors(root, p);
     List<TreeNode> b = getAnscestors(root, q);
     return getCommunAncestors(a, b);
    }


    public List<TreeNode> getAnscestors(TreeNode root, TreeNode s){
        List<TreeNode> ansc = new ArrayList();

        while(root != null){
            if(s.val < root.val){
                ansc.add(root);
                root = root.left;
            }else if(s.val > root.val){
                ansc.add(root);
                root = root.right;
            }else{
                ansc.add(root);
                break;
            }

        }
        return ansc;
    }

    public TreeNode getCommunAncestors(List<TreeNode> a, List<TreeNode> b){
        HashSet<TreeNode> h = new HashSet();
        for(TreeNode i : a){
            h.add(i);
        }
        for(int i = b.size() - 1; i >= 0; i--){
            if(h.contains(b.get(i))) return b.get(i);
        }
        return new TreeNode();
    }
}
