class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let length = s.length;
        if(length <= 1) return length;
        let max = 1;
        let set = new Set();
        let l = 0;
        let r = 0;
        set.add(s.charAt(0));
        while(r < length){
            set.add(s.charAt(r));
            max = Math.max(max, r - l +1);
            r++;
            while(set.has(s.charAt(r))){
                set.delete(s.charAt(l));
                l++;
            }
        }
        return max;
    }
}
