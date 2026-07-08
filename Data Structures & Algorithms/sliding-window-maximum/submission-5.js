class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    maxSlidingWindow(nums, k) {
        const queue = new Deque()
        const res = []
        for(let i = 0 ; i < nums.length ; i++) {
            while(queue.size() > 0 && nums[queue.back()] <= nums[i]) {
                queue.popBack()
            }  
            queue.pushBack(i)
            if(i >= k-1 ) {
                res.push(nums[queue.front()])
            }
            if(queue.front() === i - (k - 1)){
                queue.popFront()
            }
        }
        return res
    }
}
