var thirdMax = function(nums) {
    var newArray = unique(nums);
    var nLength = newArray.length;
    if (nLength < 2) {
        return newArray[0];
    } else if (nLength < 3) {
        if (newArray[0] > newArray[1]) return newArray[0];
        return newArray[1];
    } else {
        var newArray2 = newArray.sort(function(a, b) { return a - b; });
        return newArray2[nLength - 3];
    }
};

function unique(arr) {
    var result = [],
        hash = {};
    for (var i = 0, elem;
        (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}