class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = 0;
        let right = matrix.length - 1;
        let left = 0;
        let found = false;
        while(left <= right){
            row = parseInt((left + right )/ 2);
            if(target > matrix[row][ matrix[row].length - 1]){
                left = row + 1;
            }else if(target < matrix[row][0]){
                right = row - 1;
            }
            else if(target <= matrix[row][matrix[row].length - 1] && target >= matrix[row][0]) {
                break;
            }
        }
        left = 0;
        right = matrix[row].length - 1;
        console.log(right);
        console.log(left);
        while(left <= right){
           let mid = parseInt((left + right)/2);
           let value = matrix[row][mid];
           if(target > value){
            left = mid + 1;
           }else if(target < value){
            right = mid - 1;
           }
           else{
            return true;
           }
        }
        return false;
    }
}
