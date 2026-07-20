class WordDictionary {

    /**
     * @param {string} word
     * @return {void}
     */
    constructor(){
        this.map = new Map();
        this.word = false;
    }
    addWord(word) {
        let root = this;
      for(let c of word){
        if(!root.map.has(c)){
           root.map.set(c, new this.constructor())
        }
        root = root.map.get(c);
      }
      root.word = true;
      console.log(root.map)
      console.log(this.map)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word){
        return this.helperSearch(word, this,0);
    }


    helperSearch(word,node,idx){
        if(idx === word.length) return node.word;

        let c = word.charAt(idx);

        if(c === "."){
            for(let m of node.map.keys()){
                if(this.helperSearch(word,node.map.get(m), idx + 1)) return true;
            }
            return false;
        }else{
            if(!node.map.has(c)) return false;
            return this.helperSearch(word, node.map.get(c), idx+1)
        }
    }

    
}
