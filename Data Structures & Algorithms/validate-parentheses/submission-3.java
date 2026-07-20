class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        int index = 0;
        while(index < s.length()){
            if(stack.isEmpty()){
                stack.push(s.charAt(index));
            }else{
            if(s.charAt(index) == ')' && stack.peek() == '('){
                stack.pop();
            }else if(s.charAt(index) == ']' && stack.peek() == '['){
                stack.pop();
            }
            else if(s.charAt(index) == '}' && stack.peek() == '{'){
                stack.pop();
            }
            else{
                stack.push(s.charAt(index));
            }
            }
            index++;
        }
        return stack.isEmpty();
    }
    
}
