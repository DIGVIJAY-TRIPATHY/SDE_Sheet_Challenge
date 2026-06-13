var majorityElement = function(nums) {
    let candidate = 0;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
        console.log(num);
        console.log(count);
        console.log(candidate);
        console.log("iteration");
        
    }

    return candidate;
};

console.log(majorityElement([2,2,1,1,1,2,2,1,2]));
