/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode-cn.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (56.32%)
 * Likes:    654
 * Dislikes: 0
 * Total Accepted:    57.2K
 * Total Submissions: 101.4K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为
 * (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 说明：你不能倾斜容器，且 n 的值至少为 2。
 * 
 * 
 * 
 * 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * 
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxArea = function(arr) {
    let left = 0;
    let right = arr.length-1;
    let result = 0;
    while(left<right){
      let height = Math.min(arr[left],arr[right]);
      let width = right-left;
      result = Math.max(result,width * height);
      if(arr[left] < arr[right]){
        do{
          left++;
        }while(left<right && arr[left] < height);
      }else{
        do{
          right--;
        }while(left<right && arr[right] < height);
      }
    }
    return result;
};

