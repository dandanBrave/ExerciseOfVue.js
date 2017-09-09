/**
 * Created by Administrator on 2017/9/9.
 */
/*魔法币*/
var lineAdd = 0;
var inputArr =[10];
function readline() {
    var line = inputArr[lineAdd];
    lineAdd++;
    return line;
}
function print(x) {
    console.log(x);
}

var input = parseInt(readline());
var str = "";

while(input > 2){
    if(input%2===0){
        input = (input-2)/2;
        str = '2'+str;
    }else{
        input = (input-1)/2;
        str = '1'+str;
    }
}
if(input === 1){
    str = "1"+str;
}
if(input === 2){
    str = "2"+str;
}
print(str);

