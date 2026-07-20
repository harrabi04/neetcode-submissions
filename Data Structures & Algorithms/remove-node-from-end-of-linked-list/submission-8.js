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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
     let pointer = head;
     let co = head;
     let length = 0;
     
     while(co !== null){
        co = co.next
        length++;
     }

     if( length <= n){
        return head.next;
     }

     let c = 0;
     while(pointer != null && c != length - n - 1){
        pointer = pointer.next;
        c++;
     }

    if(pointer != null && pointer.next !== null){
       pointer.next = pointer.next.next;
    }
     

    return head;
    }
}
