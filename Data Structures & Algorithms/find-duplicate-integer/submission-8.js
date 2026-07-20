class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i = 0; i < nums.length ; i++){
            let number = Math.abs(nums[i]);
            if(nums[number - 1] < 0 ) {return number;}
            else{
                nums[number - 1] *= -1; 
            }
        }
        console.log(nums)
        return -1;
        
    }
}
