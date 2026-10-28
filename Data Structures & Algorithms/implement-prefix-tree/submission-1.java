class PrefixTree {

    Node head;
    public PrefixTree() {
         head = new Node();
    }

    public void insert(String word) {
        if(word.length() == 0) return;
        var current = head;
        for(Character c : word.toCharArray()){
            if(current.children.get(c) == null){     
                Node node = new Node();
                node.c = c;
                current.children.put(c,node);
            }
            current = current.children.get(c);
        }
        current.end = true;
    }

    public boolean search(String word) {
        var current = head;
        for(Character c : word.toCharArray()){
            if(current.children.get(c) == null){     
                return false;
            }
            current = current.children.get(c);
        }
       return true && current.end;
    }

    public boolean startsWith(String prefix) {
        var current = head;
        for(Character c : prefix.toCharArray()){
            if(current.children.get(c) == null){     
                return false;
            }
            current = current.children.get(c);
        }
       return true;
    }

    private static class Node{
        Character c;
        HashMap<Character, Node> children = new HashMap<>();
        boolean end;
    }
}
