class LRUCache {
    /**
     * @param {number} capacity
     */
    

    
    constructor(capacity) {
        this.map = new Map();
        this.size = 0;
        this.head = null;;
        this.tail = null;
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let n = this.map.get(key);
        if(n === undefined){
            console.log(key + "not found")
            return -1;
        }
        if(n === this.head) return this.head.val;
        if(n === this.tail){
            this.tail = this.tail.prev;
        }
        if(n.prev != null){
            n.prev.next = n.next;
        }
        if(n.next != null){
            n.next.prev = n.prev;
        }
        n.next = this.head;
        this.head.prev = n;
        this.head = n;
        n.prev = null;
        return n.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
    if(this.head === null){
        this.head = new Node(value, key);
        this.tail = this.head;
        this.map.set(key, this.head);
        this.size++;
        return;
    }

    let n = this.map.get(key);

    if(n !== undefined){
        n.val = value;

        if(this.head === n) return;

        if(n.prev) n.prev.next = n.next;
        if(n.next) n.next.prev = n.prev;
        if(this.tail === n) this.tail = n.prev;

    } else {
        n = new Node(value, key);
        this.map.set(key, n);
        this.size++;
    }

    n.prev = null;
    n.next = this.head;
    this.head.prev = n;
    this.head = n;

    
    if(this.size > this.capacity){
        let old = this.tail;
        this.tail = this.tail.prev;
        if(this.tail) this.tail.next = null;
        else this.head = null;
        old.prev = null;
        this.map.delete(old.key);
        this.size--;
    }
    }
}

class Node{
        constructor(val = 0, key = null, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
        }
}
