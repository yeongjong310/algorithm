function solution(nums) {
    var answer = 0;
    const dp = Array(nums.length).fill(0);

    let gap = -10000;
    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === gap) count++;
        else count = 1;
        gap = nums[i] - nums[i - 1];
        if (count >= 2) dp[i] = dp[i - 1] + 1;
    }
    
    return dp.reduce((acc, cur) => acc + cur, 0);
}

// function solution(nums) {
//     let answer = 0;
//     let lt = 0;
//     let d = nums[1] - nums[0];
    
//     for (let rt = 2; rt < nums.length; rt++) {
//         let currD = nums[rt] - nums[rt-1];
//         if(currD === d) answer += (rt - lt - 1);
//         else {
//             lt = rt - 1;
//             d = currD;
//         }
//     }
//     return answer;
// }