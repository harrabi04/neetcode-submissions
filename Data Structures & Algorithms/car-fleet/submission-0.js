class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      let result = 0;
      let s = [];
      const sorted = position
        .map((value, index) => [value, speed[index]])
        .sort((x, y) => y[0] - x[0]);  
      for(let i of sorted){
        let duration = (target - i[0]) / i[1];
        if(s.length == 0) {
            s.push(duration)
        }else{
            if(duration > s[s.length - 1]){
                s.push(duration);
            }
        }
      }
      return s.length;
    }
}
