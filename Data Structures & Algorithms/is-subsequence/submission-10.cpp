class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s.empty()) return true;
        if (t.empty()) return false;

        int i = 0;
        for (int j = 0; j < t.size() && i < s.size(); ++j) {
            if (s[i] == t[j]) {
                i++;
            }
        }

        return i == s.size();
    };
};
