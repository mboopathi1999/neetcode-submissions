class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const res = []
        stack.push([0,temperatures[0]])
        for(let i = 1 ; i < temperatures.length ; i++) {
            const temp = temperatures[i]
            while(stack.length > 0 && temp > stack[stack.length-1][1]) {
                res[stack[stack.length-1][0]] = i - stack[stack.length-1][0]
                stack.pop()
            }
            stack.push([i,temperatures[i]])
        }
        while(stack.length > 0) {
            const temp = stack.pop()
            res[temp[0]] = 0
        }
    return res
    }
}
