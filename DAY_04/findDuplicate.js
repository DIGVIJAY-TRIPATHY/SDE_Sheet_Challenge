var findDuplicate = function(nums) {
    const seen = new Set();
    return nums.find(num => {
        if (seen.has(num)) return true;
        seen.add(num);
        return false;
    });
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([3,3,3,3,3]));

