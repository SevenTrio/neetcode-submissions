class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) {
            return false;
        }

        const bracketsMap = {
            '{': '}',
            '(': ')',
            '[': ']',
        };

        const parenthesesStack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            if (bracketsMap[s[i]]) {
                parenthesesStack.push(s[i]);
            } else {
                const opening = parenthesesStack.pop();
                if (bracketsMap[opening] !== s[i]) {
                    return false;
                }
            }
        }

        return parenthesesStack.length === 0;
    }
}
