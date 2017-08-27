/**
 * Created by Administrator on 2017/8/27.
 */
function KMax(data,n) {
    var arr = data.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i] = parseInt(arr[i]);
    }
    function compare(a,b) {
        if(a>b){
            return 1;
        }else if(a < b){
            return -1;
        }else{
            return 0;
        }
    }
    arr.sort(compare);
    console.log(arr[arr.length - n]);
}
KMax("45 23 15 62",2);