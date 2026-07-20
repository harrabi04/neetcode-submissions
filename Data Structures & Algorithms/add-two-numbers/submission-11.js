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
        let sum = new ListNode();
        let p = sum;

        while(l1 !== null & l2 !== null){
            let s = l1.val  + l2 .val + carried;
            if(s > 9){
                carried = 1;
                s = s - 10;
            }else{
                carried = 0;
            }
            p.next = new ListNode(s)   
            p = p.next;
            l1 = l1.next;
            l2 = l2.next; 
        }

        while(l1 !== null){
            let s = l1.val + carried;
            if(s > 9){
                carried = 1;
                s = s - 10;
            }else{
                carried = 0;
            }
            p.next = new ListNode(s)   
            p = p.next;
            l1 = l1.next;
        }

        while(l2 !== null){
            let s = l2.val + carried;
            if(s > 9){
                carried = 1;
                s = s - 10;
            }else{
                carried = 0;
            }
            p.next = new ListNode(s)   
            p = p.next;
            l2 = l2.next;
        }

        if(carried !== 0){
            p.next = new ListNode(carried);
        }

        return sum.next;
    }
}
