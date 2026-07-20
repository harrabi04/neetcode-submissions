class Solution {
    public int characterReplacement(String s, int k) {
     Map<Character, Integer> c = new HashMap<>();
     int l = 0;
     int r = 0;
     int max = 0;   
     for(char ch : s.toCharArray()){
        c.put(ch, c.getOrDefault(ch, 0) + 1);
        while((r - l + 1) - c.values().stream()
                                 .mapToInt(Integer::intValue)
                                 .max().getAsInt() > k ){
                c.put(s.charAt(l), c.get(s.charAt(l)) - 1);                    
                l++;                    
        }
        max = Math.max(max, r - l + 1);
        r++;
     }
     return max;   
    }
     
}
