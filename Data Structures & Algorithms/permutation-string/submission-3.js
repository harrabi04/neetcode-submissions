class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let l = 0;
        let r = l + s1.length - 1; ;
        let m = Array(26).fill(0);
        let f = Array(26).fill(0);
        for(let c of s1){
            let index = c.charCodeAt(0) - 97;
            m[index] = m[index] + 1;
        }

        for(let c of s2.substring(l, r + 1)){
            let index = c.charCodeAt(0) - 97;
            f[index] = f[index]  + 1;
        }

        console.log(m);
        console.log(f);

        while(r < s2.length){
            
            if(JSON.stringify(f) !== JSON.stringify(m)){
                let c = s2.charAt(l);
                let index = c.charCodeAt(0) - 97;
                f[index] = f[index]  - 1;


                r++;
                c = s2.charAt(r); 
                index = c.charCodeAt(0) - 97; 
                f[index] = f[index]  + 1;

                l++;
                
            }else{
                return true;
            }
           
        }
        return false;
    }
}
