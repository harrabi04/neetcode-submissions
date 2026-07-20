class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let w = (right - left) * Math.min(heights[right], heights[left]);
            console.log("w = " + w);
            max = Math.max(max, w);
            if(heights[left] < heights[right]){
                left ++;
            }else{
                right--;
            }
        }
        return max;
    }
}
