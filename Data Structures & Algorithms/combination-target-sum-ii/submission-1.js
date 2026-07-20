class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let curr = []
        let sol = []
        candidates.sort((a, b) => a - b);
        this.helper(candidates,0,curr, sol, target);
        return sol;
    }

    helper(numbers,index,curr, sol, target){
    
      if(target === 0){
        sol.push(Array.from(curr))
        return;
      }
      if(index >= numbers.length || target < 0){
        return;
      }

      curr.push(numbers[index]);
      this.helper(numbers,index + 1,curr,sol, target - numbers[index]);
      curr.pop();
      while(index + 1 < numbers.length && numbers[index] ===  numbers[index + 1 ]){
        index++;
      }
      this.helper(numbers,index + 1,curr,sol, target);
    }
}
