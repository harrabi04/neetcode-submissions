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
            console.log(l);
            console.log(r);
            set.add(s.charAt(r));
            max = Math.max(max, r - l +1);
            r++;
            while(set.has(s.charAt(r))){
                console.log('inside while');
                set.delete(s.charAt(l));
                l++;
                console.log(l);
                console.log(r);
                console.log('while finished');
            }
            
            
        }
        return max;
    }
}
