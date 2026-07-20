/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        Node h = new Node(-1);
        Node t = h;

        Node hh = head;
        HashMap<Node, Node> map = new HashMap<>();
        while(head != null){
            Node temp = new Node(head.val);
            map.put(head, temp);
            t.next = temp;
            t = t.next;
            head = head.next;                                                                                                                                                                          
        } 

        head = hh;
        t = h.next;
        while(head != null){
            t.random = map.getOrDefault(head.random,null);
            t = t.next;
            head = head.next;                                                                                                                                                                       
        } 
        return h.next;

    }
}
