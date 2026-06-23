class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Count = new Array(26).fill(0)
        const s2Count = new Array(26).fill(0)
        let matches = 0
        for(let i = 0 ; i < s1.length ; i++) {
            let idx = s1.charCodeAt(i) - 97
            s1Count[idx] = s1Count[idx] + 1
            idx = s2.charCodeAt(i) - 97
            s2Count[idx] = s2Count[idx] + 1
        }
        for(let i = 0 ; i < 26 ; i++) {
            if(s1Count[i] === s2Count[i]) {
                matches++
            }
        }
        if(matches === 26) return true
        let l = 0
        for(let i = s1.length; i < s2.length ; i++) {
            let idx = s2.charCodeAt(i) - 97
            s2Count[idx]++
            if(s1Count[idx] === s2Count[idx]) {
                matches++
            } else if(s1Count[idx] === s2Count[idx] - 1){
                matches--
            }
            idx = s2.charCodeAt(l) - 97
            s2Count[idx]--
            if(s1Count[idx] === s2Count[idx]) {
                matches++
            } else if(s1Count[idx] === s2Count[idx] + 1){
                matches--
            }
            l++
            if(matches === 26) return true
        }
        if(matches === 26) return true
        return false

    }
}
