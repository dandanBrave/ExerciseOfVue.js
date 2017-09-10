var lineAdd = 0;      //输入行计数
var lineArr = ['RGRGR'];        //输入两行

//模拟输入
function readline() {
    var line = lineArr[lineAdd];
    lineAdd++;
    return line;
}

//模拟输出
function print(x) {
    console.log(x);
}
var input = readline().split('')
var len = input.length;
var ans = len;

for(var i = 0; i <= len; i++) {
    var need = 0;
    for (var j = 0; j < i; j++) {
        if (input[j] != 'R') need++;
    }
    for (var j = i; j < len; j++) {
        if (input[j] != 'G') need++;
    }
    ans = Math.min(ans, need);
}
 console.log(ans);