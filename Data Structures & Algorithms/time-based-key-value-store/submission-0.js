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
        if(this.keyStore.get(key)) {
            this.keyStore.get(key).push([timestamp, value])
        } else {
            this.keyStore.set(key,[[timestamp,value]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.get(key)) return ""
        let result = ""
        const arr = this.keyStore.get(key)
        let l = 0 
        let r = arr.length - 1
        while(l <= r) {
            const mid = Math.floor((l+r)/2)
            if(arr[mid][0] === timestamp) return arr[mid][1]
            if(arr[mid][0] < timestamp) {
                l = mid + 1
                result = arr[mid][1]
            } else {
                r = mid - 1
            }
        }
        return result
    }
}
