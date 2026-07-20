class TimeMap {
    
    Map<String, ArrayList<Pair<Integer, String>>> map = new HashMap<>();
    public TimeMap() {
    }
    
    public void set(String key, String value, int timestamp) {
        map.putIfAbsent(key, new ArrayList<>());
        map.get(key).add(new Pair<>(timestamp, value));
    }
    
    public String get(String key, int timestamp) {
        if(!map.containsKey(key)) return "";

        return map.get(key).stream().filter(p -> p.getKey() == timestamp).map(p-> p.getValue()).findFirst().orElseGet(()->{
            ArrayList<Pair<Integer, String>> temp = new ArrayList<>(map.get(key));
            Collections.reverse(temp);
            return temp.stream().filter(p -> p.getKey() <= timestamp).map(p->p.getValue()).findFirst().orElse("");
            }
        
        );
    }
}
