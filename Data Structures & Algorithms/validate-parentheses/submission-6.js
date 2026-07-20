class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = [];
        for(const c of s){
            console.log(c);
            if(c === '}' && st[st.length - 1] === "{"  ){
                st.pop();
            } else if(c === ')' && st[st.length - 1] === '('  ){
                st.pop();
            }
            else if(c === ']' && st[st.length - 1] === '[' )
            {
                st.pop();
            }            
            else{
                st.push(c);
            }
        }
        return st.length === 0;
    }
}
