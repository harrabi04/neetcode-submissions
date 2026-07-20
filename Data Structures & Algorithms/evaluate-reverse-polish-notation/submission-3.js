class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let st = [];
        for(const c of tokens){
            console.log(c);
            if(c === '+'){
                console.log("addition");
                let curr = parseInt(st.pop());
                
                  curr = parseInt(st.pop()) + curr ;
                
                st.push(curr);
            }else if(c === '*'){
                console.log("multi");
                let curr = parseInt(st.pop());
                
                  curr = parseInt(st.pop()) * curr  ;
                
                st.push(curr);
            }else if (c === "-"){
                console.log("subst");
                let curr = parseInt(st.pop());
                curr = parseInt(st.pop()) - curr ;
                st.push(curr);
            }else if(c === '/'){
                console.log("devision");
                let curr = parseInt(st.pop());
                curr = parseInt(st.pop()) / curr ;
                st.push(curr);
            }else{
                console.log("push");
                st.push(c);
            }
            console.log(st);
        }
        return parseInt(st[st.length - 1]);
    }
}
