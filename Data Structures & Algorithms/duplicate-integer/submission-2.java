class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set<Integer> s = new HashSet<>();
        return Arrays.stream(nums).filter(i -> !s.add(i)).findFirst().isPresent();
    }
}