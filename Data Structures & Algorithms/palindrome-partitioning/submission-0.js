class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let sol = []
        let curr = []
        this.helper(0,sol,curr, s)
        return sol;
    }



    helper(index, sol, curr, s){
        if(index >= s.length){
            sol.push(Array.from(curr))
            return;
        } 

        for(let i = index; i < s.length; i++){
            if(this.isPalindrome(s.substring(index, i + 1))){
                curr.push(s.substring(index, i + 1))
                this.helper(i + 1, sol, Array.from(curr),s)
                curr.pop()
            }
        }  
    }

    isPalindrome(str){
        if(str.length === 0) return false;
        let left = 0;
        let right = str.length - 1;

        while(left <= right){
            if(str.charAt(left) !== str.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
