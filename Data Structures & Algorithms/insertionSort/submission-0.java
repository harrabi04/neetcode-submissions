// Definition for a pair
// class Pair {
//     int key;
//     String value;
//
//     Pair(int key, String value) {
//         this.key = key;
//         this.value = value;
//       1,2,3,4
//       j  i
//     }
// }
public class Solution {
    public List<List<Pair>> insertionSort(List<Pair> pairs) {
        List<List<Pair>> result = new ArrayList<>();
        for(int i = 1; i <= pairs.size(); i ++){
            int j =  i -2;

            while(j >= 0 && pairs.get(j).key > pairs.get(j+1).key){
                Pair temp = pairs.get(j);
                pairs.set(j, pairs.get(j+1));
                pairs.set(j+1, temp);
                j--; 
            } 
    
            List<Pair> snapshot = new ArrayList<>();
                for (Pair p : pairs) {
                snapshot.add(new Pair(p.key, p.value));
                }
            result.add(snapshot);
        }

        return result;
    }
}
