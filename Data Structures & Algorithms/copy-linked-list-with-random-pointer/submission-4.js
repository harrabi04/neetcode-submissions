// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
    let map = new Map();
     let p = head;  
    let index = 0;
    while(p != null){
        map.set(p, new Node(p.val));
        p = p.next;
        index++;
    }

    let result = new Node();
    p = result;
    index = 0;
    while(head != null){
        p.next = map.get(head);
        p = p.next;
        if(head.random !== null){
            p.random = map.get(head.random);
        }

        head = head.next;
    }

    return result.next;

    }
}
