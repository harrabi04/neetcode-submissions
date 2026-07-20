class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
      let s = [];
      let max = 0;
      for(let i = 0; i< heights.length; i++){
        let start = i;
        while(s.length > 0 && heights[i] < s[s.length - 1][0]){
            max = Math.max(max, (i - s[s.length - 1][1]) * s[s.length - 1][0]);
            start = s[s.length - 1][1];
            s.pop();
        }
        s.push([heights[i],start]);
      }  

      while(s.length > 0){
            let v = s.pop();
            max = Math.max(max, (heights.length - v[1]) * v[0]);
        }
      return max;
    }
}
