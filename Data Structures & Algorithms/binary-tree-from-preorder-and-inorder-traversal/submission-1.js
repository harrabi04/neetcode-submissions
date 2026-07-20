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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    constructor(){
        this.indexes = new Map();
        this.idx = 0;    
    }
    buildTree(preorder, inorder) {    
        
        for(let i = 0; i < inorder.length; i++){
            this.indexes.set(inorder[i],i);
        }
        return this.helper(preorder,0,inorder.length -1);
        
    }

    helper(preorder, left, right){
        if(left > right) return null;
        let value = preorder[this.idx++];
        let root = new TreeNode(value);
        root.left = this.helper(preorder, left, this.indexes.get(value) - 1);
        root.right = this.helper(preorder, this.indexes.get(value) + 1, right);
        return root;
    }
}
