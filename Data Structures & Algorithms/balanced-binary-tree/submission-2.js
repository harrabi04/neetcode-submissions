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
     * @return {boolean}
     */
    constructor(){
        this.isB = true;
    }
    isBalanced(root) {
        this.helper(root);
        return this.isB;
    }


    helper(root){
        if(!root) return 0;
        let right = this.helper(root.right) + 1;
        let left = this.helper(root.left) + 1;
        if(Math.abs(left - right) > 1) this.isB = false;
        return Math.max(left,right);
    }
}
