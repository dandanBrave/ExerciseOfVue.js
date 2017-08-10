/**
 * Created by Administrator on 2017/8/7.
 */
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";
var n;
var s;
var l;

process.stdin.on('data', function (data) {
    input += data;
});

function numOfCD(n, s, l){
    //你的代码
    if(n>100 || s>l || l>10000 || s>10000){
        return -1;
    }
    var t =Math.floor((l+1)/(s+1));
    if(n<t){
        t = n;
    }
    if(t%13==0){
        t--;
    }
    var sum =Math.floor(n/t);
    var re = n%t;
    if(re>0){
        sum++;
        if(re%13==0&&t-re==1){
            sum++;
        }
    }
    console.log(sum);
}

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;
    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var input_arrays = line.split(' ');
        n = +input_arrays[0];
        s = +input_arrays[1];
        l = +input_arrays[2];

        numOfCD(n, s, l);

    }
})
