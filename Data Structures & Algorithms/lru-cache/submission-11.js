class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let n = this.map.get(key);
        if(n === undefined){
            return -1;
        }

        if(n == this.head) return n.val;

        this.setHead(n);
        return n.val;
        
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let n = this.map.get(key);
        if(n === undefined){
            n = new Node(value,key, null, null);
            this.map.set(key,n);
            this.size++;
        }else{
            n.val = value;
        }
        if(this.size > this.capacity){
            this.map.delete(this.tail.key);
            this.tail = this.tail.prev;
            if(this.tail) this.tail.next = null;
            this.size--;
        }
        this.setHead(n);
    }

    setHead(n){
        
        if(n === this.head) return;

        if(n === this.tail){
            this.tail = n.prev;
            if(this.tail) this.tail.next = null;
            
        }else{
            let prev = n.prev;
            let next = n.next;

            if(prev) prev.next = next;
            if(next) next.prev = prev;
        }

        n.prev = null;
        n.next = this.head;
        if(this.head) this.head.prev = n;
        this.head = n;
        
        if(!this.tail) this.tail = n;
    }
}

class Node{
    constructor(val = 0, key = null, next = null, prev = null){
        this.val = val;
        this.key = key;
        this.next = next;
        this.prev = prev;
    }
}
