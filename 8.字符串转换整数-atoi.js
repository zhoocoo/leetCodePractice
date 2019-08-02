/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

 const INT_MAX = Math.pow(2,31) - 1;
 const INT_MIN = -Math.pow(2,31);
/**
 * @param {string} str
 * @return {number}
 */
// var myAtoi = function(str) {
//     str = str.replace(/(^\s*)|(\s*$)/g, "");
//     let arr = str.split("");
//     let symbol = 1;
//     let result = 0;
//     let first = "";
//     if(arr[0]==="-"){
//         symbol = -1;
//         first = parseInt(arr.splice(0,2)[1]);
//     }  else if(arr[0]==="+"){
//         symbol = 1;
//         first = parseInt(arr.splice(0,2)[1]);
//     }else if(!isNaN(parseInt(arr[0]))){
//         symbol = 1;
//         first = parseInt(arr.splice(0,1)[0]);
//     }else{
//         if(arr[0]==='"' && arr[arr.length-1] ==='"' || arr[0]==="'" && arr[arr.length-1]==="'"){
//             let str = arr.splice(0,2)[1];
//             if(str === '-'){
//                 first = parseInt(arr.splice(0,1)[0]);
//                 symbol = -1;
//             }else{
//                 first = parseInt(str);
//             }
//         }else{
//             return 0;
//         }
//     }
//     while(arr.length>=0 && !isNaN(first)){
//         first *= symbol;
//         if (result > INT_MAX / 10 ||
//             (result === parseInt(INT_MAX / 10) && first > 7)) return INT_MAX;
//         if (result < INT_MIN / 10 ||
//         (result === parseInt(INT_MIN / 10) && first < -8)) return INT_MIN;
//         result = result * 10 + first;
//         first = parseInt(arr.splice(0,1)[0]);
//     }
//     return result;
// };

/**
 * 方法二
 * @param {string} str
 * @return {number}
 */
var myAtoi = (str) => Math.max(Math.min(parseInt(str)||0, INT_MAX), INT_MIN);
console.log(myAtoi("   - 321"));

