/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carried = 0;
        let sum = l1;
        let sum2 = l2;
        let solution = sum;
        let lastIndex = l1;
        while(l1 !== null || l2 !== null){
            let l1n = 0;
            let l2n = 0
            if(l1 !== null){
                l1n = l1.val;
                solution = sum;
            }
            if(l2 !== null){
                l2n = l2.val;
                solution = sum2;
            }

            let s = l1n  + l2n + carried;
            if(s > 9){
                carried = 1;
                s = s - 10;
            }else{
                carried = 0;
            }
            if(l1 != null){
                l1.val = s;
                lastIndex = l1;
                l1 = l1.next;
                solution = sum;
                
            }
            if(l2 != null){
                l2.val = s;
                lastIndex = l2;
                l2 = l2.next; 
                solution = sum2;
                
            }   
        }
        console.log(lastIndex)
        if(carried !== 0){
            lastIndex.next = new ListNode(carried);
        }
        return solution;
    }
}
