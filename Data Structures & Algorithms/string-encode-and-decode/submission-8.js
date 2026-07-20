class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs) {
        let encoded = "";
        for(let s of strs){
            encoded = encoded + s.length + ":" + s
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //4:neet4:code4:love3:you
        let arr = []
        while(str.length != 0){
           let i = str.indexOf(':');
           let n = parseInt(str.substring(0,i));
           let x = i+1; //2
           let temp = str.substring(x, x + n ); //neet
           str = str.substring(x + n);
           arr.push(temp);
        }
        return arr;
 str.substring(str.indexOf(':') + 1 , str.indexOf(':') + str.substring(0,i) )
       
    }
}
