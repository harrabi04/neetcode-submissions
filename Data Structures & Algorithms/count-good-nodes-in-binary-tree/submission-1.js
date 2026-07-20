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
        this.count = 0;
    }
    goodNodes(root) {
        this.helper(root, root.val);
        return this.count;
    }

    helper(root, max){
        if(!root) return;
        if(root.val >= max) this.count++;
        
        this.helper(root.left, Math.max(max, root.val));
        this.helper(root.right, Math.max(max, root.val));
    }
}
