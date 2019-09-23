let isEqual = function(one, two) {
    if (one.length != two.length) {
        return false;
    } else {
        for (let i = 0; i < one.length; i++) {
            if (one[i] != two[i]) {
                return false;
            }
        }
    return true;
    }
};

console.log(
    isEqual([], []), 
    true,
    );

console.log(
    isEqual([1], [2]), 
    false,
    );

console.log(
    isEqual([1, 2, 3], [1, 2, 3]),
    true,
    );
