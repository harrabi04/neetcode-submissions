class PrefixTree {
    constructor() {
        this.map = new Map();
        this.word = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let root = this;
        for(let c of word){
            if (!root.map.has(c)){
                root.map.set(c, new PrefixTree());
            }
            root = root.map.get(c);
        }
        root.word = true;   
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let root = this;
        for(let c of word){
            if (!root.map.has(c)){
                return false;
            }
            root = root.map.get(c);
        }
        return root.word;   
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let root = this;
        for(let c of prefix){
            if (!root.map.has(c)){
                return false;
            }
            root = root.map.get(c);
        }
        return true;   
    }
}
