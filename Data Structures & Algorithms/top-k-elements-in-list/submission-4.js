class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}
        for(let num of nums) {
            obj[num] = (obj[num] || 0) + 1
        }
        const arr = Array.from({length: nums.length + 1}, () => [] )
        for(let [key, value] of Object.entries(obj)) {
            arr[value].push(key)
        }
        const res = []
        for(let i = arr.length - 1 ; i > 0 ; i--) {
            for(const n of arr[i]) {
                res.push(n)
                if(res.length === k) return res
            }
        }
    }
}
