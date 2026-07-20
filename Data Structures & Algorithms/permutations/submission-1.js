class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [[]]

        for(let n of nums){
            let permutation = []
            for(let p of result){
                for(let i = 0; i <= p.length; i++){
                    let copy = [
                        ...p.slice(0, i),
                        n,
                        ...p.slice(i)
                    ];
                    permutation.push(copy);
                }
            }
            result = permutation;
        }
        return result;
    }
}
