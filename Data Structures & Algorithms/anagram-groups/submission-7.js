class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for(let str of strs) {
            const arr = new Array(26).fill(0)
            for(let char of str) {
                const idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
                arr[idx] = arr[idx] + 1
            }
            const key = arr.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(str);
        }
        return Object.values(res)
    }
}
