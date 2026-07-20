class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let right = piles.length - 1;
        let left = 1;
        for(let i of piles){
                right = Math.max(right, i);
        }
        let min = right;
        console.log(piles);
        while(left <= right){
            let speed = parseInt((left + right) / 2);
            console.log('left' + left);
            console.log('right' + right);
            console.log('speed' + speed);
            let time = 0;
            for(let i of piles){
                time  += Math.ceil(i / speed);
            }
            if(time > h){
                left = speed + 1;
            }else{
                right = speed - 1;
                min = Math.min(min, speed);
            }
        }
        return min;
    }//  1 2 3 4 5 6 7 8 9 10 11
}
