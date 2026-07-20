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
     * @return {number[][]}
     */
    constructor(){
        this.a = [];
        this.q = [];
    }
    levelOrder(root) {
        this.helper(root);
        return this.a;
    }

    helper(root){
        if(!root) return;
        this.q.push(root);
        while(this.q.length > 0){
            let size = this.q.length;
            let g = [];
            while(size > 0){
                let node = this.q.shift();
                g.push(node.val);
                if(node.left) this.q.push(node.left);
                if(node.right) this.q.push(node.right);
                size--;
            }
            this.a.push(g);
        }
    }
}
