class Solution {
    public boolean hasDuplicate(int[] nums) {
        Set<Integer> s= new HashSet<>();
        List<Integer> i = Arrays.stream(nums).boxed().toList();
        return i.stream().filter(n -> !s.add(n)).findFirst().isPresent();
    }
}
