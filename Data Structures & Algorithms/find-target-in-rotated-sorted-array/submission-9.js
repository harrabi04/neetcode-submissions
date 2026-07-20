class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0;
        let right = nums.length - 1;

        if(nums[left] > nums[right]){
            // look for the pivot point
            let mid = Math.floor((left + right + 1) / 2); // bias right
            while (left < right) {
                 mid = Math.floor((left + right + 1) / 2); // bias right
                if (nums[mid] >= nums[left]) {
                    left = mid;        // mid could be max
                } else {
                    right = mid - 1;
                }
            }
            let p = left;
            if(target >= nums[0]){
                left = 0;
                right = p;
            }else{
                right = nums.length - 1;
                left = p + 1;
            }
        }
        console.log("made it here")
        // usual binary search
        while(left <= right){
            let mid = parseInt(left + (right - left) / 2);
            if(nums[mid] === target ) return mid;
            if(target > nums[mid]){ 
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return -1;
    }
}
