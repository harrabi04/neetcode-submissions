class Solution {

    public String encode(List<String> strs) {
        if(strs.isEmpty()) return "";
        String key = "";
        String encodedString = "";
        for(String s : strs){
            key += s.length() + "/";
            encodedString += s;
        }
        return key + "#" + encodedString;
    }

    public List<String> decode(String str) {
        if(str.equals("")) return new ArrayList<String>();
        String[] keys = str.substring(0,str.indexOf("#")).split("/");
        String encoded = str.substring(str.indexOf("#") +1);
        List<String> result = new ArrayList();
        int intialIndex = 0;
        for(String s : keys){
            int length = Integer.parseInt(s);
            result.add(encoded.substring(intialIndex, intialIndex + length));
            intialIndex += length;
        }
        return result;
    }
}
