var twoSum = function(nums, ___a) {
    var temp = nums.slice(0); //数组拷贝
    nums = nums.sort(function(a, b) { return a - b; }); //数组从小到大排序
    var i = 0;
    var j = nums.length - 1;
    while (nums[i] + nums[j] != ___a) { //相加为target的时候退出循环
        if (nums[i] + nums[j] > ___a) {
            j--;
        } else {
            i++;
        }
    }
    i = temp.indexOf(nums[i]);
    j = temp.lastIndexOf(nums[j]);
    return j > i ? [i, j] : [j, i];
};