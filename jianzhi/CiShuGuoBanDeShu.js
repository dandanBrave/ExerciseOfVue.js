function MoreThanHalfNum_Solution(numbers) {
    // write code here
    numbers.sort(function (a,b) {
        return a-b;
    });
    var len = numbers.length;
    var res = numbers[Math.floor(len/2)];
    var sum = 0;
    for(var i=0;i<len;i++){
        if(numbers[i] == res){
            sum++;
        }
    }
    if(sum<=Math.floor(len/2)){
        res = 0;
    }
    return res;
}
module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};