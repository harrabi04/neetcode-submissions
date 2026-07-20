class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let curr = [];
        let sol = [];
        nums.sort((a,b) => a-b)
        this.helper(nums,0,curr,sol)
        return sol;
    }

    helper(nums, index, curr, sol){
        if(index === nums.length){
            sol.push(Array.from(curr));
            return;
        }
        curr.push(nums[index]);
        this.helper(nums, index + 1, curr, sol)
        curr.pop();
        while(index + 1 < nums.length && nums[index] === nums[index +1]) index++;
        this.helper(nums, index + 1, curr, sol)
    }
}
