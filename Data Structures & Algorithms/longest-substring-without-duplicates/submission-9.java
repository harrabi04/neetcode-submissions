class Solution {
    public int lengthOfLongestSubstring(String s) {
      Set<Character> set= new HashSet<>();
      int left = 0;
      int right = 0;
      int best = 0;
      int temp = 0;
      char[] c = s.toCharArray();
      for(right = 0; right < c.length; right++){
            while(set.contains(c[right])){
                set.remove(c[left]);
                left++;
            }
            set.add(c[right]);
            best = Math.max(best, (right - left) +1); 
        }
       return  best; 
      }  
      
}

