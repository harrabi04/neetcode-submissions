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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        return this.helper(root, 0, targetSum)
    }

    helper(root, sum, target){
        if(!root) return false;
        if(root && !root.left && !root.right){
            sum += root.val
            return sum === target;
        }
        sum += root.val;
        return this.helper(root.left, sum, target) || this.helper(root.right, sum, target) 
    }
}
