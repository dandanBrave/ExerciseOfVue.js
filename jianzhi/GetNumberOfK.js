/**
 * Created by Administrator on 2017/9/8.
 */
function GetNumberOfK(data, k) {
    // write code here
    //简单写法
    var sum = 0;
    var len = data.length;
    for(var i=0; i<len; i++){
        if(data[i]==k){
            sum++;
        }
    }
    return sum;
}
module.exports = {
    GetNumberOfK : GetNumberOfK
};