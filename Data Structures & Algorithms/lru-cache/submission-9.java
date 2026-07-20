class LRUCache {
    int capacity = 0;
    int size = 0;
    Node head;
    Node tail;
    HashMap<Integer, Node> h = new HashMap<>();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if(h.get(key) == null) return - 1;
        Node n = h.get(key);
        setLast(n);
        return n.value;
    }
    
    public void put(int key, int value) {
       Node n;
       if(h.get(key) != null){
        n = h.get(key);
        n.value =  value;
       }else{
        if(size == capacity){
            h.remove(head.key);
            if (head == tail) {
                    head = null;
                    tail = null;
            } else {
                head = head.next;
                if (head != null) head.prev = null;
            }
            size--;
        }
        n = new Node(key, value);
        h.put(key, n);
        size++;
       }
       setLast(n);
    }

    private void setLast(Node node){
        if(head == null){
            head = node;
            tail = node;
            return;
        }
        if(node == tail) return;
        if(node == head){
            head = head.next;
            if(head != null){
                head.prev = null;     
            }
        }else{
            if(node.next != null){
                node.next.prev = node.prev;
            }
            if(node.prev != null){
                node.prev.next = node.next;
            }
           
        }
        node.next = null;
        node.prev = tail;
        tail.next = node;
        tail = node;
    }

    class Node{
        int value;
        int key;
        Node next;
        Node prev;

        public Node(int key, int value){
            this.key = key;
            this.value = value;
        }
    }
}
