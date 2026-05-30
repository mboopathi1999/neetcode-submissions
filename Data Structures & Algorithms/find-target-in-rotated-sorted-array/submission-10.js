class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length -1
        let idx = null
        while(l<r) {
            const mid = Math.floor((l+r)/2) 
            if(mid>0 && nums[mid] < nums[mid-1]) {
                idx = mid
                break
            }
            if(nums[mid] > nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        if(idx === null) {
            idx = l
        }
        if(target >= nums[idx] && target <= nums[nums.length-1]) {
            l = idx
            r = nums.length - 1
        } else {
            l = 0 
            r = idx-1
        }
        while(l <= r) {
            const mid = Math.floor((l+r)/2) 
        console.log({mid})
            if(nums[mid] === target) {
                return mid
            } 
            if(target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return -1
    }
}
