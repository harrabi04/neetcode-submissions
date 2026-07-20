/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        let map = new Map();
        let newMap = new Map();
        let queue = []
        queue.push(node)

        while(queue.length > 0){
            let s = queue.length
            for(let i = 0; i< s; i++){
                let curr = queue.shift()
                if(!map.has(curr.val)){
                    map.set(curr.val, curr)
                }
                for(let v of curr.neighbors){
                    if(!map.has(v.val)){
                        queue.push(v)
                    }   
                }
            }
        }

        for(let k of map.keys()){
            let n = new Node(k)
            newMap.set(k,n)
        }

        for(let k of newMap.keys()){
            for(let n of map.get(k).neighbors){
                newMap.get(k).neighbors.push(newMap.get(n.val))
            }
        }

        return newMap.get(node.val)
    }


}
