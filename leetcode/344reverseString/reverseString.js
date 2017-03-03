var reverseString = function(s) {
    var j = s.length - 1,
        a = "";
    while (j >= 0) {
        a += s[j];
        j--;
    }
    return a;
};