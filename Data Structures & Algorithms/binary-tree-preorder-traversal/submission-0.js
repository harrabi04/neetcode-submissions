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
     * @return {number[]}
     */
    constructor(){
        this.a = []
    }
    preorderTraversal(root) {
        this.helper(root);
        return this.a;
    }

    helper(root){
        if(!root) return;
        this.a.push(root.val);
        this.preorderTraversal(root.left)
        this.preorderTraversal(root.right) 
    }

}
