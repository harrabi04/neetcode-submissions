class Solution {
    public  int[] maxSlidingWindow(int[] nums, int k) {
        List<Integer> result = new ArrayList<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        int l = 0;
        int r = 0;
        while(r < Math.min(nums.length, l + k)){
            maxHeap.add(nums[r]);
            if(r == l + k -1){
                result.add(maxHeap.peek());
                maxHeap.remove(nums[l]);
                l++;
            }
            r++;
        }
        return result.stream()
                .mapToInt(Integer::intValue)
                .toArray();
    }
}
