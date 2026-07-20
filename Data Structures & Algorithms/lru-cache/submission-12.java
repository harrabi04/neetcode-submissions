class LRUCache {
    public Node head;
    public Node tail;
    public int capacity;
    public HashMap<Integer,Node> map = new HashMap();
    public LRUCache(int capacity) {
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if(map.containsKey(key)){
            Node n = map.get(key);
            addToTail(n);
            return n.val;
        }
        return -1;
    }
    
    public void put(int key, int value) {
        Node n = null;
        if(map.containsKey(key)){
             n = map.get(key);
             n.val = value;
        }else{
         n = new Node();
        n.val = value;
        n.key = key;
        map.put(key, n);
        }
        addToTail(n);
        if(map.size() > capacity){
            shiftHead();
        }
    }

    public Node removeNode(Node n){
        Node prev = n.prev; 
        Node next = n.next;
        if(prev != null){
            prev.next = next;
        }
        if(next != null){
            next.prev = prev;
        }
        if(n == head){
            head = next;
        }
        if(n == tail){
            tail = prev;
        }
        n.next = null;
        n.prev = null;
        return n;
    }

    public void addToTail(Node n){
        if(head == null){
            head = n;
            tail = n;
            return;
        }
        if(n == tail){
            return;
        }
        n = removeNode(n);
        tail.next = n;
        n.prev = tail;
        tail = n;
    }

    public void shiftHead(){
        if (head != null) {
            Node removed = removeNode(head);
            map.remove(removed.key);
        }
    }

    static class Node{
        public int val;
        public int key;
        public Node prev;
        public Node next;
    }
}
