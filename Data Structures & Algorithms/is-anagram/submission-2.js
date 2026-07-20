class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        let h = new Map();
        let m = new Map();
        for(const v of s){
            if(h.has(v)){
                h.set(v, h.get(v) + 1);
            }else{
                h.set(v, 1)
            }
        }
        for(const v of t){
            if(m.has(v)){
                m.set(v, m.get(v) + 1);
            }else{
                m.set(v, 1)
            }
        }
        return mapEqual(h,m);
    }

    
}

function mapEqual(m1 , m2){
    const arr = [];
        if(m1.size != m2.size) return false;

        for(const [k, v] of m1){
            if(m2.get(k) !== v) return false;
        }
        return true;
}
