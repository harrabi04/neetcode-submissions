/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
       this.helper(root);
       return root; 
    }

    helper(root){
        if(root == null) return;
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
        this.helper(root.left);
        this.helper(root.right);
    }
}
