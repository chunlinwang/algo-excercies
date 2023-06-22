impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        let mut v = x;
        if v < 0 {
            return false;
        }

        let mut vec = Vec::new();

        while (v != 0) {
            let pop = v % 10;
            v = v /10;

            vec.push(pop);
        }

        let mid: usize = vec.len() / 2;
        let len: usize = vec.len() - 1;

        for i in 0..mid {
            if (vec[i] != vec[len-i]) {
                return false;
            }
        }

        return true;
    }
}