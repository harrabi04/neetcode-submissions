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
    public ListNode mergeKLists(ListNode[] lists) {
        if(lists == null || lists.length == 0) return null;
        List<ListNode> l = new ArrayList<>(Arrays.asList(lists));
        while(l.size() > 1){
            List<ListNode> merged = new ArrayList<>();
            for(int i = 0; i < l.size(); i = i+2){
                ListNode first = l.get(i);
                ListNode second = null;
                if(i+1 < l.size()){
                    second = l.get(i+1);
                }
                merged.add(mergeTwoNodes(first,second));
            }
            l = merged;
        }
        return l.getFirst();
    }


    public ListNode mergeTwoNodes(ListNode node1, ListNode node2){
        ListNode h = new ListNode();
        ListNode head = h;

        while(node1 != null && node2 != null){
            if(node1.val < node2.val){
                h.next = node1;
                node1 = node1.next;
            }else{
                h.next = node2;
                node2 = node2.next;
            }
            h = h.next;
        }

        if(node1 != null){
            h.next = node1;
        }
        if(node2 != null){
            h.next = node2;
        }
        return head.next;
    }
}
