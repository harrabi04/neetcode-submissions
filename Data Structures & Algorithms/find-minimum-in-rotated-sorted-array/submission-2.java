class Solution {
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        int min = nums[0];

        while (left <= right) {
            int pivot = (left + right) / 2;
            // Update min with nums[pivot]
            min = Math.min(min, nums[pivot]);

            if (nums[pivot] >= nums[left]) {
                // Left side is sorted, minimum could be left or right side
                min = Math.min(min, nums[left]);
                left = pivot + 1;
            } else {
                // Minimum is on the left side (including pivot)
                right = pivot - 1;
            }
        }

        return min;
    }
}
