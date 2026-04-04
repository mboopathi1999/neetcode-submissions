class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)
        const res = []
        for(let idx in nums) {
            if(+idx>0 && nums[idx] === nums[+idx-1]) {continue}
            let i = +idx + 1
            let j = nums.length - 1
            while( i < j) {
                const sum = nums[idx] + nums[i] + nums[j]
                if(sum === 0) {
                    res.push([nums[idx] , nums[i] , nums[j]])
                    i++
                    j--
                    while(i<j && nums[i] === nums[i-1]) {
                        i++
                    }
                } else {
                    if(sum < 0) {
                        i++
                    } else {
                        j--
                    }
                }
            }
        }
        return res
    }
}
