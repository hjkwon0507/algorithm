function solution(nums) {
 let answer = [...new Set(nums)]
 const limit = nums.length / 2
 answer = answer.length > limit ? limit : answer.length
 return answer
}