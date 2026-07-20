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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if(head == null) return null;
        ListNode node = head;
        int size = 0;
        int index = 0;
        while(node != null){
            node = node.next;
            size++;
        }
        System.out.println(size);
        int indexWanted = size - n;
        node = head;
        if(indexWanted == 0) return head.next;

        for(index = 0 ; index < indexWanted - 1; index++ ){
            node = node.next;
        }
        node.next = node.next.next;
    
        
        
        return head;
    }
}
