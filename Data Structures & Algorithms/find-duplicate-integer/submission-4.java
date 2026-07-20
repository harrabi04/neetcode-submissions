class Solution {
    public int findDuplicate(int[] nums) {
      for(int i=0; i < nums.length; i++){
       int index = Math.abs(nums[i]) - 1;
       System.out.println(i);
       System.out.println("index  " + index);
       if(nums[index] <= 0) return Math.abs(nums[i]);
       nums[index] *= -1;
      }
      return -1; 
    }
}
