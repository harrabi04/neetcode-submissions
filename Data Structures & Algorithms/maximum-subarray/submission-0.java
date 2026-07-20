class Solution {
    public int maxSubArray(int[] nums) {
        int max = nums[0];
        int current = 0;

        for(int i : nums){
            current = Math.max(current, 0) + i;
            max = Math.max(current, max);
        }
        return max;
    }
}
