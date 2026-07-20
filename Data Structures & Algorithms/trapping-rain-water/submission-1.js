class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = 0;
        let maxRight = 0;
        let left = [];
        let right = [];
        let result = 0;
        for(let i = 0; i < height.length; i++){
            left[i] = maxLeft;
            maxLeft = Math.max(maxLeft, height[i]);
        }
        for(let i = height.length - 1; i >= 0 ; i--){
            right[i] = maxRight;
            maxRight = Math.max(maxRight, height[i]);
        }
        for(let i = 0; i < height.length; i++){
            let trapped = Math.min(left[i], right[i]) - height[i];
            trapped = Math.max(0, trapped);
            console.log("trapped for "+ i + " is " + trapped);
            result += trapped;
        }
        return result;
    }
}
