class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for(let char of s) {
            if(['(','[','{'].includes(char)) {
                stack.push(char)
            } else {
                const pop = stack.pop()
                    if(pop === '[' && char === ']') {
                        continue
                    } else if(pop === '{' && char === '}') {
                        continue
                    } else if(pop === '(' && char === ')') {
                        continue
                    } else {
                        return false
                    }
            }
        }
        if(stack.length === 0) return true
        return false
    }
}
