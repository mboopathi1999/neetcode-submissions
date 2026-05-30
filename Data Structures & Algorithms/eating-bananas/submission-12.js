class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles)
        let l = 1
        let r = max
        let rate = max
        while(l<=r) {
            const mid = Math.floor((l+r)/2)

            let hours = 0
            for(let pile of piles) {
                hours += Math.ceil(pile/mid)
            }
            if(hours > h) {
                l = mid + 1
            } else if(hours <= h){
                rate = Math.min(rate,mid)
                r = mid - 1
            }
        }
        return rate
    }
}
