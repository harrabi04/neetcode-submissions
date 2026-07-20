class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let l = 0;
        let r = nums.length;
        for(let i = 0; i < nums.length ; i ++){
            const x = nums[i];
            const y = map.get(target - x);
            if( y != null ){
                l = i;
                r = y
                break;
            }else{
                map.set(nums[i], i);
            } 
        }
        return [l, r];
    }
}
