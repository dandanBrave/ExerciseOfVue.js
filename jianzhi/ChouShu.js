function GetUglyNumber_Solution(index)
{
    // write code here
    if(index<1){
        return 0;
    }
    var p1=0,p2=0,p3=0;
    var result = [1];
    for(var i=1;i<index;i++){
        result[i] = Math.min(result[p1]*2,result[p2]*3,result[p3]*5);
        if(result[i]==result[p1]*2){
            p1++;
        }
        if(result[i]==result[p2]*3){
            p2++;
        }
        if(result[i]==result[p3]*5){
            p3++;
        }
    }
    return result[index-1];
}
module.exports = {
    GetUglyNumber_Solution : GetUglyNumber_Solution
};