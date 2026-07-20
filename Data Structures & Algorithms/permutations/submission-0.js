class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
    */
    permute(nums) {
        return this.helper(0,nums)
    }

    helper(index, nums){
        if(index === nums.length){
            return [[]]
        }
        let result = [];
        let s = this.helper(index + 1, nums);
        for(let p of s){
            for(let i = 0; i <= p.length; i++){
                let copy = [
                    ...p.slice(0, i),
                    nums[index],
                    ...p.slice(i)];
                result.push(copy);
            }
        }
        return result;
    }
}
