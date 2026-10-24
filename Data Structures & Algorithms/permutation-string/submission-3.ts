class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let expectedCounts = new Map<string, number>();
        let windowCounts = new Map<string, number>();

        function increment(map: Map<string, number>, char: string) {
            map.set(char, (map.get(char) ?? 0) + 1);
        }

        function decrement(map: Map<string, number>, char: string) {
            if (map.get(char) === 1) {
                map.delete(char);
                return;
            }

            map.set(char, (map.get(char) ?? 0) - 1);
        }

        for (let i = 0; i < s1.length; i++) {
            increment(expectedCounts, s1[i]);
        }

        let L = 0;
        for (let R = 0; R < s2.length; R++) {
            if (R - L + 1 > s1.length) {
                decrement(windowCounts, s2[L]);
                L++;
            }

            increment(windowCounts, s2[R]);

            if (mapsEqual(expectedCounts, windowCounts)) {
                return true;
            }
        }

        return false;
    }
}

function mapsEqual(a: Map<string, number>, b: Map<string, number>) {
    if (a.size !== b.size) return false;

    for (const [key, value] of a) {
        if (!b.has(key) || b.get(key) !== value) {
            return false;
        }
    }

    return true;
}
