class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let sum = 0
        let i = 0
        let j = height.length - 1
        let maxL = height[i]
        let maxR = height[j]
        while(i < j) {
            if(maxL < maxR) {
                i++
                maxL = Math.max(maxL,height[i])
                sum = sum + (maxL - height[i])
            } else {
                j--
                maxR = Math.max(maxR,height[j])
                sum = sum + (maxR - height[j])
            }
        }
        return sum
    }
}
