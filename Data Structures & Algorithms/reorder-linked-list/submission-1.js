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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }

        let head2 = slow.next;
        slow.next = null;
        let reversed = this.reverseList(head2);

        let solution = new ListNode();
        let node = solution;

        while(head != null && reversed != null){
            solution.next = head;
            solution = solution.next;
            head = head.next;

            solution.next = reversed;
            solution = solution.next;
            reversed = reversed.next;  
        }

        if(head != null){
            solution.next = head;
        }

        if(reversed != null){
            solution.next = reversed;
        }

        return node.next;

    }


    reverseList(head) {
        let prev = null;
        while (head !== null){
            let t = head.next;
            head.next = prev;
            prev = head;
            head = t;
        }
        return prev;
    }
}
