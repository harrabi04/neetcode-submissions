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
        this.valid = true;
    }
    isValidBST(root) {
        this.helper(root, -9999999, 9999999);
        return this.valid;
    }

    helper(root, min, max){
        if(!root) return;
        if(root.val <= min || root.val >= max) this.valid = false;

        if(root.left )this.helper(root.left, min , Math.min(root.val, max))
        if(root.right )this.helper(root.right, Math.max(root.val, min), max)

    }
}
