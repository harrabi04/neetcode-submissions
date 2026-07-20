class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let s = new Set();
        let curr = 0;
        let max = 0;
        for(let x of nums){
            s.add(x);
        }
        for(let x of nums){
            curr = 1;
            let y = x;
            while(s.has(y + 1)){
                curr++;
                y++;
            }
            max = Math.max(curr, max);
        }
        return max;
    }
}
