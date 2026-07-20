class Solution {
    public int trap(int[] height) {
       int[] maxLeft = new int[height.length];
       int[] maxRight = new int[height.length];
       int[] trappedByIndex = new int[height.length];
       int leftMaxTemp = 0;
       int rightMaxTemp = 0;
       
       for (int i = 0; i < height.length ; i++){
          maxLeft[i] = leftMaxTemp;
          if(height[i] > leftMaxTemp ) leftMaxTemp = height[i];

          maxRight[height.length - i - 1] = rightMaxTemp;
          if(height[height.length - i - 1] > rightMaxTemp ) rightMaxTemp = height[height.length - i - 1];      
       }

        for(int i = 0; i < height.length ; i++){
         trappedByIndex[i] = Math.min(maxLeft[i], maxRight[i]) - height[i];
         System.out.println("index: " + i + " has trapped" + trappedByIndex[i]);
       }

       int maxTrappedWater = 0;
       for (int i = 0; i < height.length -1; i++){
        if(trappedByIndex[i] > 0) maxTrappedWater += trappedByIndex[i]; 
    
       }
       return  maxTrappedWater;
    }
}
