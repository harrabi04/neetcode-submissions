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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        return this.helper(root, subRoot);
    }



    helper(root, sub){
        if(!root) return false;
        if(this.isSameTree(root, sub)) return true;
        return  this.helper(root.left, sub) || this.helper(root.right, sub);
    }
    isSameTree(root, root2){
        if(!root && !root2) return true;
        if(!root || !root2) return false;
        if(root.val !== root2.val) return false;
        return this.isSameTree(root.right, root2.right) 
                && this.isSameTree(root.left, root2.left);  
    }
}
