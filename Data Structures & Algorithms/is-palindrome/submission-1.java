class Solution {
    public boolean isPalindrome(String s) {
        char[] str = s.toCharArray();
        
        StringBuilder onlyAlphaNum = new StringBuilder();
        for(char c : str){
            if(Character.isLetterOrDigit(c)) onlyAlphaNum.append(c);
        }

        char[] clean = onlyAlphaNum.toString().toCharArray();

        for(int i = 0 ; i < clean.length; i++){
            if(Character.toLowerCase(clean[i]) != Character.toLowerCase(clean[clean.length - i - 1])) return false;
        }
        return true;
    }
}
