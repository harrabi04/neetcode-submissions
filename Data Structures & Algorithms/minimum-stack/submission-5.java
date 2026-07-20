class MinStack {

    Deque<Integer> min = new ArrayDeque();
    Deque<Integer> stack = new ArrayDeque();

    public MinStack() {
        
    }
    
    public void push(int val) {
        if(min.isEmpty() || min.peek() >= val){
            min.push(val);
        }
        stack.push(val);
    }
    
    public void pop() {
        int popped = stack.pop();
        if(min.peek() == popped){
            min.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return min.peek();
    }
}
