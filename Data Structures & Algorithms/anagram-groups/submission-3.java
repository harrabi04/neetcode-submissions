class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
       
       HashMap<String, List<String>> groups = new HashMap<>();

        for(String s : strs){
            int[] count = new int[26];
            for(Character c : s.toCharArray()){
              int ascii = c;
              int index = ascii - 97;
              count[index]++;  
            }
            String key = Arrays.toString(count);
            groups.computeIfAbsent(key, k -> new ArrayList<String>())
                .add(s);
        }

        return groups.values().stream().toList();
    }
}
