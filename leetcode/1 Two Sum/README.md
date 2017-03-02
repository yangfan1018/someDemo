###leetcode第1号题，TwoSum
####Given an array of integers, return indices of the two numbers such that they add up to a specific target.
####You may assume that each input would have exactly one solution, and you may not use the same element twice.
####给一个数字数组和一个标识数值target，选择数组中的两个数值a,b相加等于target，函数返回a,b在数组中的下标；
####假定必有解决方案，而且同一个元素只能用一次

#####思路
数组排序，然后首array[i]，尾array[j]相加，如果大于target，j--，如果小于target，i++；等于时，循环结束，获取到此时的
array[i]和array[j],然后查询在原数组中的下标，比较下标大小，小到大排序输出。