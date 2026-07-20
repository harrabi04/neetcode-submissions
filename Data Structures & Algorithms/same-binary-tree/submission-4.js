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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    
    isSameTree(p, q) {
        let l = [];
        let l2 = [];
        this.helper(p,l);
        this.helper(q, l2);
        console.log(l2);
        console.log(l);
        if(l.length !== l2.length) return false;
        for(let i = 0; i <l.length; i++){
            if(l[i] !== l2[i]) return false;
        }
        
        return true;
    }

    helper(root, list){
        if(!root) list.push(null);
        else list.push(root.val);
        if(root) this.helper(root.left, list);
        if(root) this.helper(root.right, list);
        return;
    }
}
