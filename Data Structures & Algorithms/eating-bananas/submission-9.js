class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let res = r
        while(l <= r) {
            const mid = Math.floor((l+r)/2)
            let totalHours = 0
            for(let p of piles) {
                totalHours += Math.ceil(p/mid)
            }
            if(totalHours <= h) {
                res = Math.min(res,mid)
            }
            if(totalHours <= h) {
                // res = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return res
    }
}
