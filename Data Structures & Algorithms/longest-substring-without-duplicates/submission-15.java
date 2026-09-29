class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.length()<= 1) return s.length();
        int l = 0, r = 0;
        int max = 0;
        Set<Character> seen = new HashSet();
        while(r < s.length()){
            while(seen.contains(s.charAt(r))){
                seen.remove(s.charAt(l));
                l++;   
            }
            seen.add(s.charAt(r));
            max = Math.max(max, r -l + 1);
            r++;
        }  
        
          
        return max; 
    }
}
