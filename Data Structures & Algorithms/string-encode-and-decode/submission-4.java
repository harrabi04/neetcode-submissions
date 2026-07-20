class Solution {

    public String encode(List<String> strs) {
        if(strs.size() == 0) return "";
        String base = "";
        String merged = "";  
        for (String s : strs){
            base += s.length() + ",";
            merged += s;
        }
        return base + ":" + merged;
        
    }

    public List<String> decode(String str) {
        if(str == "") return new ArrayList<String>();
        String[] keys = str.substring(0,str.indexOf(':')).split(",");
        List<String> result = new ArrayList<>();
        int initial = 0;
        for(String s : keys){
            int endingIndex = initial + Integer.parseInt(s);
            String word = str.substring(str.indexOf(':') + 1).substring(initial, endingIndex);
            result.add(word);
            initial += Integer.parseInt(s);
        }
        
        return result;
    }
}
