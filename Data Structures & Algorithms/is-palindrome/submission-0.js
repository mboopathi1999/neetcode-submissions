class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0
        let j = s.length - 1
        while(i < j) {
            if(!((s[i] >= 'a' && s[i] <= 'z') ||
               (s[i] >= 'A' && s[i] <= 'Z') ||
               (s[i] >= '0' && s[i] <= '9'))) {
                i++ 
                continue
            }
            if(!((s[j] >= 'a' && s[j] <= 'z') ||
               (s[j] >= 'A' && s[j] <= 'Z') ||
               (s[j] >= '0' && s[j] <= '9'))) {
                j-- 
                continue
            }
            if(s[i].toLowerCase() === s[j].toLowerCase()) {
                i++
                j--
                continue
            } else {
                return false
            }
        }
        return true
    }
}
