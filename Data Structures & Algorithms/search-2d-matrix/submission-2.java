class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
      for(int i = 0; i < matrix.length; i++){
        if(target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]){
            return binarySearchHelper(matrix[i], 0,matrix[i].length - 1, target);
        }
      }
      return false;
    }

    public boolean binarySearchHelper(int[] array, int start, int end, int target){
        
        while(start <= end){
            int pivot = (start + end) / 2;
            if(array[pivot] == target) return true;
            if(target > array[pivot]){
                start = pivot +1; 
            }   
            if(target < array[pivot] ){
                end = pivot - 1;
            }
        }
          return false;
    
    } 
}
