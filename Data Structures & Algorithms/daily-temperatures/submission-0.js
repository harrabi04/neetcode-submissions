class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if(temperatures.length == 0) return [];
        let s = [];
        let result = [];
        for(let i = 0; i < temperatures.length ; i++){
          result.push(0);
        }
        for(let i = 0; i < temperatures.length ; i++){
            while(s.length > 0 && temperatures[i] > s[s.length - 1][1]){
                let x = s.pop();
                result[x[0]] = i - x[0];
            }
            s.push([i, temperatures[i]]);
        }
        return result;
    }
}
