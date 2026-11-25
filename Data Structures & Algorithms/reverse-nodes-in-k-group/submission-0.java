/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0, head);
        ListNode groupPrev = dummy;

        while (true) {
            ListNode groupEnd = groupPrev;

            for (int i = 0; i < k && groupEnd != null; i++) {
                groupEnd = groupEnd.next;
            }

            if (groupEnd == null) {
                break;
            }

            ListNode groupStart = groupPrev.next;
            ListNode groupNext = groupEnd.next;

            ListNode prev = groupNext;
            ListNode current = groupStart;

            while (current != groupNext) {
                ListNode next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }

            groupPrev.next = groupEnd;
            groupPrev = groupStart;
        }

        return dummy.next;
    }
}
