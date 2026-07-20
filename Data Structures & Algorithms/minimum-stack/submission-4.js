class MinStack {
    constructor() {
        this.min = [];
        this.st = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    
    push(val) {
         if(this.min.length === 0 || val <= this.min[this.min.length-1]){
            this.min.push(val);
        }
        this.st.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.top() === this.min[this.min.length-1]){
            this.min.pop();
        }
            return this.st.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.st[this.st.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}
    
    

