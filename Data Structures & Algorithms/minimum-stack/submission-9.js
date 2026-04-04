class MinStack {
    constructor() {
        this.stack = []
        this.min = null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
        console.log(this.stack)
    }

    /**
     * @return {void}
     */
    pop() {
        const ele = this.stack.pop()
        if(ele < 0) {
            this.min = this.min - (ele)
        }
    }

    /**
     * @return {number}
     */
    top() {
        const ele = this.stack[this.stack.length-1]
        if(ele < 0) {
            return this.min
        } else {
            return this.min + ele
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
