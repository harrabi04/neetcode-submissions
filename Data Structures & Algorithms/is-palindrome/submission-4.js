class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0; 
        let right = s.length - 1;
        while(left < right){
            if(!isAlphanumeric(s.charAt(left))){
                left++;
                continue;
            }
            if(!isAlphanumeric(s.charAt(right))){
                right--;
                continue;
            }
            if(s.charAt(left) !== s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;

    }
}


function isAlphanumeric(str) {
  const regex = /^[a-z0-9]+$/i; // Case-insensitive Latin alphanumeric regex
  return regex.test(str);
}
