class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map()
        let longest = 0
        for(let num of nums) {
            if(map.has(num)) continue
            let prev = map.get(num - 1) || 0
            let next = map.get(num + 1) || 0
            map.set(num, prev + 1 + next)
            map.set(num - (map.get(num-1) || 0), map.get(num))
            map.set(num + (map.get(num+1)||0), map.get(num))
            longest = Math.max(longest, map.get(num))
        }
        return longest
    }
}
