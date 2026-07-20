class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let sol = [];
        this.helper(n, sol, 0,0, "");
        return sol;
    }


    helper(n, solution, close, open, curr){
        if(curr.length === n * 2){
            solution.push(curr);
            return;
        }

        if(curr.length > n*2){
            return;
        }
        if(open < n) this.helper(n, solution, close, open + 1, curr + "(");
        if(close < open) this.helper(n, solution, close + 1, open, curr + ")");
    }



    isValidParenthesis(str){
        let stack = []
        for(let c of str){
            if(stack.length == 0){
                stack.push(c)
            }else{
                if(stack[stack.length -1 ] === "(" && c === ")"){
                    stack.pop();                    
                }else{
                    stack.push(c);
                }
            }
        }
        return stack.length === 0;
    }
}
