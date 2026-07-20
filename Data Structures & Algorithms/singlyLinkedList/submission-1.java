class LinkedList {
    ListNode head;
    ListNode tail;
    int size = 0;
    public LinkedList() {

    }

    public int get(int index) {
        if(index >= size || index <0) return -1;
        int i = 0;
        ListNode current = head;
        while(i != index){
            current = current.next;
            i++;
        }
        return current.value;
    }

    public void insertHead(int val) {
        ListNode newHead = new ListNode(val);
        newHead.next = head;
        head = newHead;
        if(tail == null) tail = head;
        size++;
    }

    public void insertTail(int val) {
        ListNode newTail = new ListNode(val);
        if(tail != null){
            tail.next = newTail;
            tail = newTail;
        }
        else{
            head = tail = newTail; ;
        }
        size++;
        
    }

    public boolean remove(int index) {
        if(index >= size || head == null || index < 0) return false;
        
        if(index == 0){
            head = head.next;
            if(head == null) tail = null;
            size--;
            return true;
        }

        ListNode current = head;
        int i = 0;
        while(i<index - 1 && current.next != null){
            current = current.next;
            i++;
        }

        if(current.next == null) return false;

        current.next = current.next.next;

         if (current.next == null) {
        tail = current;
        }
        size--;
        return true;

    }

    public ArrayList<Integer> getValues() {
        ListNode current = head;
        ArrayList<Integer> list = new ArrayList<>();
        while(current != null){
            list.add(current.value);
            current = current.next;
        }
        return list;
    }
}

 public class ListNode {  
    int value;  
    ListNode next;  
  
    public ListNode(int val) {  
        this.value = val;  
    }  
} 
