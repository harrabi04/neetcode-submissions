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
     * @return {number}
     */
    constructor(){
        this.max = 0;
    }
    diameterOfBinaryTree(root) {
        this.helper(root);
        return this.max;
    }

    helper(root){
        if(root === null) return 0;
        let r  = this.helper(root.right);
        let l = this.helper(root.left);
        this.max = Math.max(l + r , this.max);
        return 1 + Math.max(r, l);
    }
}
