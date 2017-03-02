var thirdMax = function(nums) {
    var max1,
        max2,
        max3;
    for (i in nums) {
        var n = nums[i];
        if (n == max1 || n == max2 || n == max3) continue;
        if (max1 == undefined || n > max1) {
            max3 = max2;
            max2 = max1;
            max1 = n
        } else if (max2 == undefined || n > max2) {
            max3 = max2;
            max2 = n;
        } else if (max3 == undefined || n > max3) {
            max3 = n
        }
    }
    return max3 == undefined ? max1 : max3;
};