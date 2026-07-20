class Solution {
    public int minEatingSpeed(int[] piles, int h) {

    // the min number will be 1, the maxximum is the max of the piles
    //we will use binary search everytime to try and get best solution
    // if we found a solution that is it less than the nu;ber of hours we try and decrease the speed
    // else we will ioncrease the speed
    // we will calculate the duration needed to eat all the piles with every speed
    int left = 1;
    int right =  Arrays.stream(piles).max().getAsInt();
    int res = right;

    while(left <= right){
        int speed = (left + right) /2;
        int total = 0;

        for(int pile : piles){
            total += Math.ceil((double)pile / speed);
        }

        if(total <= h){
            res = speed;
            right = speed - 1;
        }else{
            left = speed + 1;
        }

    }
    return res;
    }
}
