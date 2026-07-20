class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let m = new Map();
        for(let i of nums){
            if(m.has(i)){
                m.set(i,m.get(i) + 1);
            }else{
                m.set(i,1);
            }
        }
        let arr = []
        for(let [k,v] of m){
            let a = arr[v];
            if(a == null){
                a = [k] 
            } else {
                a.push(k)
            }
            arr[v] = a;
        }
        let result = []
        for(let i = nums.length ; i >= 0; i --){
            if(result.length == k) break;
            if(arr[i] != null) result.push(...arr[i]);
        }
        return result;
    }
}
