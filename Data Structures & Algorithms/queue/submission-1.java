class Deque {
    Node left;
    Node right;
    int size = 0;
    public Deque() {

    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void append(int value) {
       Node newNode = new Node(value); 
       if(right == null){
        right = newNode;
        left = newNode;
       }else{
        right.next = newNode;
        newNode.prev= right;
        right = newNode;
       }
       size++;

    }

    public void appendleft(int value) {
       Node newNode = new Node(value); 
       if(left == null){
        right = newNode;
        left = newNode;
       }else{
        left.prev = newNode;
        newNode.next= left;
        left = newNode;
       } 
       size++;
    }

    public int pop() {
        if(size <= 0) return -1;
        if(right == null) return -1;
       int value = right.val;
       if(size == 1){
        right = left = null;
       }else{
        if(right.prev != null){
            right = right.prev;
            right.next = null;
        }
        else{
            left = right = null;
        }
       }
       size--;
       return value;
    }

    public int popleft() {
    if(size <= 0) return -1;
    if(left == null) return -1;
       int value = left.val;
       if(size == 1){
        right = left = null;
       }else{
        if(left.next != null){
            left = left.next;
            left.prev = null;
        }else{
            left = right = null;
        }
    
       }
       size--;
       return value;
    }
}

public class Node{
    int val;
    Node prev;
    Node next;

    public Node(int val){
        this.val = val;
    }
}
