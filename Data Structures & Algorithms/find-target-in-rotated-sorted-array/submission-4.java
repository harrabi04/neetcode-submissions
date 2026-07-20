class Solution {
    public int search(int[] nums, int target) {
      int l = 0;
      int r = nums.length - 1;
      
        while(l < r){
            int m = (l + r) / 2;
            if(nums[m] > nums[r]){
                l = m +1;
            }else{
                r = m;
            }
        }
        int s = binarySearch(nums, 0, l -1, target);
        if(s != -1){
            return s;
        }else{
            return binarySearch(nums, l, nums.length - 1, target);
        }
        
    }

    public int binarySearch(int[] array, int s, int e, int target){
        while(s <= e){
            int pivot = (s + e) / 2;
            if(array[pivot] == target ) return pivot;
            if(target > array[pivot]){
                s = pivot + 1;
            }else{
                e = pivot - 1;
            }
        }
    return - 1;
    }
}