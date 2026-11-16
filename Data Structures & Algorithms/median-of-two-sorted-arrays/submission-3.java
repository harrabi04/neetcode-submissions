class Solution {
    public double findMedianSortedArrays(int[] nums1,    int[] nums2) {
        int length = nums1.length + nums2.length;
        int medianIndex = (length / 2);

        int i = 0;
        int firstPointer = 0;
        int secondPointer = 0;
        int[] sorted = new int[medianIndex + 1];
        System.out.println("[");
        while( i <= medianIndex){
        
            if(secondPointer >= nums2.length ||firstPointer < nums1.length && nums1[firstPointer] < nums2[secondPointer]){
                sorted[i++] = nums1[firstPointer];
                firstPointer++;
            }else{
                sorted[i++] = nums2[secondPointer];
                secondPointer++;
            }
        }
        for(Integer y : sorted){
            System.out.println(y);
        }
        if(length % 2 == 0){
            return (double)(sorted[medianIndex] + sorted[medianIndex  -1]) / 2;
        }else{
            return sorted[medianIndex];
        }
    }
}
