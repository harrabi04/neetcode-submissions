class Solution {
    public String minWindow(String s, String t) {
        if (t.length() > s.length()) {
            return "";
        }

        String result = "";
        Map<Character, Integer> required = new HashMap<>();
        Map<Character, Integer> current = new HashMap<>();

        for (char c : t.toCharArray()) {
            required.put(c, required.getOrDefault(c, 0) + 1);
        }

        int l = 0;
        int r = 0;

        while (r < s.length()) {
            char right = s.charAt(r);
            current.put(right, current.getOrDefault(right, 0) + 1);

            while (isValid(current, required)) {
                String window = s.substring(l, r + 1);

                if (result.isEmpty() || window.length() < result.length()) {
                    result = window;
                }

                char left = s.charAt(l);
                current.put(left, current.get(left) - 1);
                l++;
            }

            r++;
        }

        return result;
    }

    private boolean isValid(
        Map<Character, Integer> current,
        Map<Character, Integer> required
    ) {
        for (char c : required.keySet()) {
            if (current.getOrDefault(c, 0) < required.get(c)) {
                return false;
            }
        }

        return true;
    }
}