function GetNumberOfK(data, k) {
    // write code here
    //二分写法
    if(data.length==0){
        return 0;
    }
    var first = 0;
    var end = data.length-1;
    var mid = Math.floor((end+first)/2);
    var index = mid;
    while (first<=end){
        mid = Math.floor((end+first)/2);
        if(k>=data[mid]){
            first = mid + 1;
        }else{
            end = mid -1;
        }
    }
    var count = 0;
    index = mid;
    for(var i=index;data[i]==k;i++){
        count++;
    }
    for(var i=index-1;data[i]==k;i--){
        count++;
    }
    console.log(count);
}
