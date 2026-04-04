class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for(let s of strs) {
            str = str + s.length + '#' + s
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        const res = []
        while(i < str.length) {
            let j = i
            while(str[j]!= '#') {
                j++
            }
            const len = +str.substring(i,j)
            i=j+1
            j=i+len
            res.push(str.substring(i,j))
            i=j
        }
        return res
    }
}
