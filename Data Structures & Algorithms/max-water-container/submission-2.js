class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let i = 0
        let j = heights.length - 1
        while(i < j) {
            let height = Math.min(heights[i], heights[j])
            let distance = j - i
            let volume = height * distance
            max = Math.max(max , volume)
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
            // if(heights[i] > height[j]) {
            //     j--
            // } else {
            //     i++
            // }
        }
        return max
    }
}
