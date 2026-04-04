class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = Array.from({length: nums.length}).fill(1)
        let prefix = 1
        let suffix = 1
        for(let i = 0 ; i < res.length ; i++) {
            res[i] = prefix
            prefix = prefix * nums[i]
        }
        for(let i = res.length - 1 ; i >= 0 ; i--) {
            res[i] = suffix * res[i]
            suffix = suffix * nums[i]
        }
        return res
    }
}
