class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const map = new Map();
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let index = 0;
        for (let digit = 2; digit <= 9; digit++) {
            let count = (digit === 7 || digit === 9) ? 4 : 3;
            map.set(String(digit), letters.slice(index, index + count).split(""));
            index += count;
        }   
        let sol = []
        this.helper(digits,0,"",map,sol)
        return sol;
        
    }

    helper(s, index, curr, map, sol){
        if(curr.length > 0 && curr.length === s.length){
            sol.push(curr)
        }

        if(curr >= s.length || index >= s.length) return;

        
        for(let i = 0; i < map.get(s.charAt(index)).length; i++){
            curr = curr + map.get(s.charAt(index))[i];
            this.helper(s,index + 1,curr,map,sol);
            curr = curr.substring(0, curr.length - 1)
        }
    }
}
