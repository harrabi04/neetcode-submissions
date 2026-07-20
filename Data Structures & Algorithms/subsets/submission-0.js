class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let curr = []
        let sub = []
        this.helper(0, nums, curr, sub)
        return sub;
        
    }

    helper(i, nums, curr, sub){
        if(i >= nums.length){
            sub.push(Array.from(curr));
            return;
        }

        curr.push(nums[i])
        
        this.helper(i+1, nums, curr, sub);
        curr.pop()
        this.helper(i+1, nums, curr, sub);
    }
}
