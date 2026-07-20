class Solution {
    public int largestRectangleArea(int[] heights) {
        int max = 0;
        Stack<List<Integer>> s = new Stack<>();
        for(int i = 0; i < heights.length; i++){
            int start = i;
            ArrayList<Integer> pair = new ArrayList();
            if(s.isEmpty()){
                pair.add(i);
                pair.add(heights[i]);
                s.push(pair);
                continue;
            } 

            while(!s.isEmpty() && s.peek().get(1) > heights[i]){
                Integer lastIndex = s.peek().get(0);
                Integer lastValue = s.peek().get(1);
                max = Math.max(max, (i - lastIndex) * lastValue);
                s.pop();
                start = lastIndex;
            }
            pair.add(start);
            pair.add(heights[i]);
            s.push(pair);                

        }
        while(!s.isEmpty()){
            Integer lastIndex = s.peek().get(0);
            Integer lastValue = s.peek().get(1);
            s.pop();
            max = Math.max(max, (heights.length - lastIndex) *  lastValue);
        }
        return max;
    }
}
