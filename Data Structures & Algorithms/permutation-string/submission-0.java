class Solution {
            public static boolean checkInclusion(String s1, String s2) {
                if(s2.length() < s1.length()) return false;

                HashMap<Character, Integer> map = new HashMap<>();
                int i = 0;
                while(i < s1.length()){
                    Character c = s1.charAt(i);
                    int count = map.getOrDefault(c, 0);
                    map.put(c, count + 1);
                    i++;
                }

                int l = 0;
                int r = s1.length() - 1;

                while(r < s2.length()){
                    boolean result = true;
                    int index = l;
                    HashMap<Character, Integer> map2 = new HashMap<>();
                    while(index <= r){
                        Character c2 = s2.charAt(index);
                        int subCount = map2.getOrDefault(c2, 0);
                        map2.put(c2, subCount + 1);
                        index++;
                    }

                    for(char c : s2.substring(l, r + 1).toCharArray()){
                        if(!map2.get(c).equals(map.get(c))){
                            result = false;
                            break;
                        }
                    }
                    if(result) return result;

                    l++;
                    r++;

                }

                return false;
    }
}