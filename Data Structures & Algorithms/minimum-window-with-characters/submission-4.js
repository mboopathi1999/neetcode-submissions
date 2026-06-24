class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = ''
        const map = new Map()
        for (let char of t) {
            map.set(char, (map.get(char) || 0) + 1)
        }
        let matches = 0
        let l = 0
        let r = 0
        let length = Number.POSITIVE_INFINITY
        const window = new Map()
        while (r < s.length) {
            const char = s[r]
            if (map.get(char)) {
                window.set(char, (window.get(char) || 0) + 1)
                if (window.get(char) === map.get(char)) {
                    matches++
                }
            }
            while (matches === map.size) {
                if (r - l + 1 < length) {
                    length = r - l + 1;
                    res = s.substring(l, r + 1);
                }

                const leftChar = s[l];

                if (map.has(leftChar)) {
                    if (window.get(leftChar) === map.get(leftChar)) {
                        matches--;
                    }
                    window.set(leftChar, window.get(leftChar) - 1);
                }

                l++;
            }

            r++
        }
        return res
    }
}


