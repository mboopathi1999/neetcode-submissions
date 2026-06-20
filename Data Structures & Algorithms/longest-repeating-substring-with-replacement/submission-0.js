class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map()
        let l = 0
        let r = 0
        let res = 0
        while (r < s.length) {
            const char = s[r]
            map.set(char, (map.get(char) || 0) + 1)
            let highFreq = 0
            for (let [key, value] of map) {
                highFreq = Math.max(highFreq, value)
            }
            const windowLen = r - l + 1
            if (windowLen - highFreq <= k) {
                r++
                res = Math.max(res, windowLen)
                continue
            }
            while (l < r) {
                map.set(s[l], map.get(s[l]) - 1)
                let highFreq = 0
                for (let [key, value] of map) {
                    highFreq = Math.max(highFreq, value)
                }
                l++
                const windowLen = r - l
                if (windowLen - highFreq <= k) {
                    r++
                    res = Math.max(res, windowLen)
                    break
                }
            }
        }
        return res

    }
}
