/**
 * Created by Administrator on 2017/8/26.
 */
function MaxSum (data) {
    var arr = data.split(" ");
    var len = arr.length;
    var max = 0;
    var sum = 0;
    for(var i = 0; i < len; i++){
        sum += parseInt(arr[i]);
        if(sum < 0){
            sum = 0;
        }else{
            if(sum > max){
                max = sum;
            }
        }
    }
    console.log(max);
}
MaxSum('-23 17 -7 11 -2 1 -34');