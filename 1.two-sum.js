/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lindex = nums.length-1;
    while(nums.length>0){
      let num = target - nums.pop();
      let findex = nums.findIndex(val => num===val);
      if(findex>=0){
        return [findex,lindex];
      }
      lindex--;
    }
};
// @lc code=end

