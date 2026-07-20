class Solution {
    public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
        for(char c : s.toCharArray()){
            if(stack.isEmpty()){
                stack.push(c);
            }else{
                char latest = stack.peek();
                
                if( latest == '(' && c == ')'
                    || latest == '{' && c == '}'
                    || latest == '[' && c == ']'
                ){
                    stack.pop();
                }else{
                    stack.push(c);
                }
            }
        }
        
        return stack.isEmpty();   
    }
}
