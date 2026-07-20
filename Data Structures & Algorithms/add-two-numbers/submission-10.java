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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
      ListNode head = new ListNode(-1);
      ListNode sum = head;
      int remain = 0;  
      while(l1 != null && l2!= null){
        ListNode s = new ListNode(0);
        s.val += remain;
        remain =  0;
        int sumOfNodes = l1.val + l2.val;
        int toAdd = sumOfNodes % 10;
        remain = sumOfNodes / 10;
        s.val += toAdd;
        sum.next = s;
        sum = sum.next; 
        l1 = l1.next;
        l2 = l2.next;
      }

      while(l1 != null){
        ListNode s = new ListNode(0);   
        int su = remain + l1.val;
        System.out.println(su);
        remain =  0;
        int toAdd = su % 10;
        remain = su / 10; 
        s.val = toAdd;
        sum.next = s;
        sum = sum.next; 
        l1 = l1.next;
      } 
      while(l2 != null){
        ListNode s = new ListNode(0);   
        int su = remain + l2.val;
        remain =  0;
        int toAdd = su % 10;
        remain = su / 10; 
        s.val = toAdd;
        sum.next = s;
        sum = sum.next; 
        l2 = l2.next;
      }
      if(remain != 0){
        ListNode s = new ListNode(0);
        s.val = remain;
        sum.next = s;
        sum = sum.next;
      }  
      return head.next; 
    }
}
