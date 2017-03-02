###leetcode上第414号题
####Given a non-empty array of integers, return the third maximum number in this array
####给定一个纯数字数组，返回数组中第三大的数字
#####The third maximum does not exist, so the maximum is returned instead;
#####去重

最开始写的时候，先把数组去重，然后进行排序，再取出array[length-3]，后来发现效率极低/ku;
后来查看别人的思路，，，才发觉自己有多菜，，纪录一下；