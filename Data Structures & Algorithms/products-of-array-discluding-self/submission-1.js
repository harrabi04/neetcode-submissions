class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let mult = 1;
        let z = [];
        for(let x of nums){
            if(x === 0){
                z.push(0);
                continue
            }
            mult *= x;
        }
        let res = [];
        for(let x of nums){
            if(x === 0 ) {
                if(z.length > 1){
                    res.push(0)
                }else{
                    res.push(mult)
                }
                
            }else{
                if(z.length >0){
                    res.push(0);
                }else{
                    res.push(mult/x);
                }
                
            }
           
          }
        return res;
    }   
}
