class Solution {
    public int search(int[] nums, int target) {
        return binarySearch(0,nums.length,nums,target);
    }

    public static int binarySearch(int start, int end, int[] nums, int target){
        if(start >= end) return -1;

        int pivot = (start + end) / 2 ;

        if(nums[pivot] == target) return pivot;

        if(nums[pivot] > target){
                return binarySearch(start, pivot, nums, target) ;
        } 
        else{
            return binarySearch(pivot + 1, end, nums, target) ;
        }
    }
}
