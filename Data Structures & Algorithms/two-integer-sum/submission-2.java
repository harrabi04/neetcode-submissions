class Solution {
    public int[] twoSum(int[] nums, int target) {
      HashMap<Integer,Integer> neededIndex = new HashMap<>(); 

      for(int i = 0; i < nums.length; i++){
        int needed = target - nums[i];
        if(neededIndex.containsKey(needed)){
            int j = neededIndex.get(needed);
            return new int[]{j,i};
        }
        neededIndex.put(nums[i], i);
      }
      return new int[0];
    }
}
