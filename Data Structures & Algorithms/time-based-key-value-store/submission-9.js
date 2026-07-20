class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        console.log(this.keyStore);
        let ar = [];
        if(this.keyStore.has(key)){
            ar = this.keyStore.get(key);
        }
        let val = [timestamp, value];
        console.log(val);
        ar.push(val);
        this.keyStore.set(key,ar);
        console.log(this.keyStore);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(this.keyStore.has(key)){
            console.log("we have the key  for " + key );
            let val = this.keyStore.get(key);
            if(timestamp < val[0][0]) return "";
            if(timestamp >= val[val.length - 1][0]) return val[val.length - 1][1];
            let r = val.length - 1;
            let l = 0;
            let result = -1;
            while(l <= r){
                let mid = parseInt(l + (r - l) / 2);
                console.log(mid);
                if(val[mid][0] == timestamp) return val[mid][1];
                else if(val[mid][0] > timestamp){
                    r = mid - 1;
                }else{
                    result = mid;
                    l = mid + 1;
                }
            }
            return val[result][1];
        }
        return "";
    }
}
