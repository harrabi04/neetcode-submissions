class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let r = 0;
        let max = 0;
        let highest = 0;
        let map = new Map();
        while(r < s.length){
            let c = s.charAt(r);
            if(map.has(c)){
                let ccount = map.get(c);
                ccount++;
                map.set(c,ccount);
            }else{
                map.set(c, 1);
            }
            highest = Math.max(highest, map.get(c));
            while((r - l + 1)  - highest > k){
                let x = map.get(s.charAt(l));
                x--;
                map.set(s.charAt(l),x);
                l++;
            }
            max = Math.max(max, r - l + 1);
            r++;
            
        }
        return max;
    }
}
