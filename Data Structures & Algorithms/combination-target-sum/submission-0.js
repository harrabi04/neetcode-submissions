class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let curr = []
        let sol = []
        this.helper(0,nums,curr,sol,0,target);
        return sol;
    }

    helper(index, nums, curr, sol, sum, target ){
        if(sum === target){
            sol.push(Array.from(curr));
            return;
        }
        
        if(index >= nums.length || sum > target) return;

        sum += nums[index];
        curr.push(nums[index])
        this.helper(index, nums, curr, sol, sum, target)
        sum -= nums[index];
        curr.pop()
        this.helper(index + 1, nums, curr, sol, sum, target)
    }
}
