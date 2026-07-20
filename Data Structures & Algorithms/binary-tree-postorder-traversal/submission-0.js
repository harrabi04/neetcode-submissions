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
    postorderTraversal(root) {
        let arr = [];
        this.helper(root, arr);
        return arr;
    }

    helper(root, list){
        if(!root) return;
        this.helper(root.left,list);
        this.helper(root.right,list);
        list.push(root.val);
    }
}
