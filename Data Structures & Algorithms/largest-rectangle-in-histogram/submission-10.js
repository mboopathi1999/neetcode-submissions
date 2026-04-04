class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let max = 0
        stack.push(0)
        for(let i = 1 ; i < heights.length ; i++) {
            const curr = heights[i]
            while(curr < heights[stack[stack.length - 1]]) {
                let tempArea = 0
               if(stack.length === 1) {
                    tempArea = (heights[stack[stack.length - 1]] * (i))

                }else {
                    tempArea = (heights[stack[stack.length - 1]] * (i-1-stack[stack.length -2]))
                }
                stack.pop()
                max = Math.max(max, tempArea)
            }
            stack.push(i)
        }
        while(stack.length > 0) {
                let tempArea = 0
                if(stack.length === 1) {
                    tempArea = (heights[stack[stack.length - 1]] * (heights.length))

                }else {

                    tempArea = (heights[stack[stack.length - 1]] * (heights.length-1-stack[stack.length -2]))
                }
                stack.pop()
                max = Math.max(max, tempArea)
        }
        return max
    }
}
