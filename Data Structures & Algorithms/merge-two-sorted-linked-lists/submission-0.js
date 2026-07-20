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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let h = new ListNode();
        let head = h;

        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){
                h.next = list1;
                list1 = list1.next;
            }else{
                h.next = list2;
                list2 = list2.next;
            }
            h = h.next;
        }
        
        if(list1 !== null){
            h.next = list1;
        }

        if(list2 !== null){
            h.next = list2;
        }

        return head.next;
    }
}
