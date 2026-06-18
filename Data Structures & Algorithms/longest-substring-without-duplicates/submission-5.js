class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map()
        let max = 0
        let i = 0
        let j = 0
        while(j < s.length) {
            const char = s[j]
            if(map.has(char) && map.get(char) >= i) {
                i = map.get(char) + 1
                map.set(char , j)
                j++

            } else {
                map.set(char,j)
                j++
                max = Math.max(max , j - i)
            }
        }
        return max
    }
}
