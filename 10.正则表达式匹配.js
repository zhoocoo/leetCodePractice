/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (23.55%)
 * Likes:    530
 * Dislikes: 0
 * Total Accepted:    20.2K
 * Total Submissions: 85.5K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 * 
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 * 
 * 
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 * 
 * 说明:
 * 
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = (s, p)=> new RegExp(`^${p}$`).test(s);


// var isMatch = (s,p)=>{
//   let isMatch = true;
//   let cache = '';
//   let cacheNum = -1;
//   let point = 0;
//   let arr = s.split('');
//   for(let index=0;index<arr.length;index++){
//     let item = arr[index];
//     let str = p.substring(point,point+1);
//     let next = p.substring(point+1,point+2);
    
//     if(item === str){
//         point++;
//     }else if(str === '*'){
//       cache = p.substring(point-1,point);
//       if(cache === item || cache === '.'){
//         cacheNum++;
//         isMatch = true;
//       }else if(item === next || next === '.'){
//         // if(p.substring(point + 2 , point+3)){
//         //   point += 2;
//         // }else{
//         //   point++;
//         // }
//         point+=2;
//         cache = '';
//         cacheNum=0;
//       }else if(next === cache){ //修正point
//         while(next === cache && cacheNum!==0){
//           point++;
//           cacheNum--;
//           str = p.substring(point,point+1);
//           if(str === item){
//             break;
//           }
//         }
//         if(str === item || str === '.'){
//           point++;
//         }else{
//           isMatch = false;
//         }
//       }else{
//         isMatch = false;
//       }
//     }else if(str === '.'){
//         point++;
//     }else if(next === '*'){
//       cache = str;
//       if(p.substring(point + 2 , point+3) === item) {
//           point+= 3;
//       }else{
//         isMatch = false;
//       } 
//     }else{
//       isMatch = false;
//     }
//     if( index === arr.length-1 && p.substring(point,point+1) && p.substring(point,point+1)!=='*' && p.substring(point,point+1)!==cache){ //next还存在，但已经验证完最后一个值了
//       isMatch = false;
//     }
//     if(!isMatch){
//       break;
//     }
//   }
//   if(p.substring(point+1,point+2)===cache && p.substring(point+1,point+2) !==''){
//     while(p.substring(point+1,point+2) === cache && cacheNum!==0){
//       point++;
//       cacheNum--;
//     }
//   }
//   if(p.substring(point+1,point+2)){
//     return false;
//   }
//   return isMatch;
// };

var isMatch = (s,p)=>{
  if(p === ''){
    return s === '';
  }
  let first = s !=='' && (s[0] === p[0] || p[0] === '.');

  if(p.length >= 2 && p[1] === '*'){
    return isMatch(s,p.substr(2)) || (first && isMatch(s.substr(1),p));
  }else{
    return first && isMatch(s.substr(1),p.substr(1));
  }
};

console.log(isMatch("aaa","aaaa"));  //false
console.log(isMatch("aa","a"));  // false
console.log(isMatch("aa","a*")); // true
console.log(isMatch("ab",".*"));  //true
console.log(isMatch("aab","c*a*b"));  //true 
console.log(isMatch("mississippi","mis*is*p*.")); // false
console.log(isMatch("aaaaab","a*ab")); // true
console.log(isMatch("aaa","ab*a*c*a")); // true

