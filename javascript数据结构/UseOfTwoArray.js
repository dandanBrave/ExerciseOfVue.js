/**
 * Created by Administrator on 2017/8/10.
 */
Array.matrix=function (numrows,numcols,initial) {
    var arr=[];
    for(var i=0; i<numrows; i++){
        var colnumns = [];
        for(var j=0; j<numcols;j++){
            colnumns[j] = initial;
        }
        arr[i] = colnumns;
    }
    return arr;
}
var nums = Array.matrix(3,4,5);
console.log(nums);
console.log(nums[1][1]);