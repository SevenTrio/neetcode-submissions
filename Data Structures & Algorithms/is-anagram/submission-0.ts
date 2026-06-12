class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sCharactersMap: Record<string, number> = {};
        const tCharactersMap: Record<string, number> = {};

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            sCharactersMap[s[i]] = (sCharactersMap[s[i]] ?? 0) + 1;
            tCharactersMap[t[i]] = (tCharactersMap[t[i]] ?? 0) + 1;
        }

        for (let i = 0; i < s.length; i++) {
            const currChar = s[i];

            if(sCharactersMap[currChar] !== tCharactersMap[currChar]) {
                return false;
            }
        }

        return true;
    }
}
