function OpenKey(n) {
    if(n>100000 || n<-100000 || n==0){
        return;
    }
    //var a = n > 0 ? n : -n;
    var a = Math.abs(n);
    var arr = [];
    var sumOfZero = 0;
    while(a>0){
        var temp = a % 10;
        if(temp == 0){
            sumOfZero++;
        }
        arr.push(temp);
        a = Math.floor(a / 10);
    }
    function compare(a,b) {
        return a-b;
    }
    arr.sort(compare);
    //console.log(arr);

    if(n>0){
        var x = arr[0];
        arr[0] = arr[sumOfZero];
        arr[sumOfZero] = x;
        console.log(result(arr));
    }else{
        arr = -1 * result(arr.reverse());
        console.log(arr);
    }

    function result(arr) {
        var res = 0;
        for(var i=arr.length-1; i>=0; i--){
            res = res += arr[i] * Math.pow(10,arr.length-i-1);
        }
        return res;
    }
}
OpenKey(-10520);