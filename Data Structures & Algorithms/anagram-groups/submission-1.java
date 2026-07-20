class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
    HashMap<String, ArrayList<String>> hm = new HashMap<>();
    for(String s : strs){
        char[] charArray = s.toCharArray();
        Arrays.sort(charArray);
        String sorted = new String(charArray);
    ArrayList l = hm.getOrDefault(sorted, new ArrayList<String>());
    l.add(s);
    hm.put(sorted,l);
    }    
    return new ArrayList(hm.values());
    }
}
