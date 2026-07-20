// Definition for a pair.
// class Pair {
//     public int key;
//     public String value;
//
//     public Pair(int key, String value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    public List<Pair> mergeSort(List<Pair> pairs) {
        if(pairs.isEmpty()) return new  ArrayList<Pair>();
        return ms(pairs, 0, pairs.size() - 1);
        
    }

    public static List<Pair> ms(List<Pair> pairs, int start, int end){  
        if (start >= end) {
            List<Pair> base = new ArrayList<>();
            base.add(pairs.get(start));
            return base;
        }

        int mid = (start + end) / 2;
        List<Pair> left = ms(pairs, start, mid);
        List<Pair> right = ms(pairs, mid + 1, end);

        return merge(left, right);
    }

    public static List<Pair> merge(List<Pair> left, List<Pair> right){  
        int i = 0, j = 0;

        ArrayList<Pair> result = new ArrayList<>();
        while(i < left.size() && j < right.size()){
            if(left.get(i).key <= right.get(j).key){
                    result.add(left.get(i++));
            }else{
                result.add(right.get(j++));
            }
        }
        while( i < left.size()){
            result.add(left.get(i++));
        }
        while (j < right.size()){
            result.add(right.get(j++));
        }
        return result;
    }

}
