var nums = readline().split(' ')
for(var i = 0; i < nums.length; i++){
    nums[i] = parseInt(nums[i])
}
function IsTriangle(nums){
    return (nums[0]+nums[1]>nums[2] && nums[0]+nums[2]>nums[1] && nums[2]+nums[1]>nums[0])
}

while(!IsTriangle(nums)){
    nums.sort(function(a, b){
        return b-a
    })
    nums[0] = nums[0] - 1
}

console.log(nums[0] + nums[1] + nums[2])
