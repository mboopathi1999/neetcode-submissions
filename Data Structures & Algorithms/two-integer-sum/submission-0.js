class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let idx in nums) {
            const balance = target - nums[idx]
            if(map.has(balance)) {
                return [map.get(balance), +idx]
            }
            map.set(nums[idx], +idx)
        }

    }
}
