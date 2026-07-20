class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let l = 0;
        let r = 0;
        let m = [];
        for(let c of s1){
            let index = c.charCodeAt(0) - 97;
            console.log(index);
            m[index] = (m[index] || 0) + 1;
        }
        while(r < s2.length){
            r = l + s1.length - 1;
            console.log("left" + l);
            console.log("right" + r);
            

            let f = [];
            for(let c of s2.substring(l, r + 1)){
                let index = c.charCodeAt(0) - 97;
                f[index] = (f[index] || 0) + 1;
            }
            let exact = true;
            for(let i = 0; i < f.length; i++){
                console.log(f);
                console.log(m);
                if(JSON.stringify(f) !== JSON.stringify(m)){
                    console.log("break")
                    break;
                }else{
                    return true;
                }
            }
            l++;
        }
        return false;
    }
}
