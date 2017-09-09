/*
字符串碎片
 */
var lineAdd = 0;
var inputArr =["aaabbaaac"];
function readline() {
    var line = inputArr[lineAdd];
    lineAdd++;
    return line;
}
function print(x) {
    console.log(x);
}

var input = readline();
var obj = [];
var str = "";
for(var i=0;i<input.length;i++){
    if(str.length>0){
        if(str[str.length-1]==input[i]){
            str = str + input[i];
        }else{
            obj.push(str);
            str = input[i];
        }
    }else{
        str += input[i];
    }
}
var total = 0;
obj.push(str);
obj.forEach(function (a) {
    total += a.length;
});

print((total/obj.length).toFixed(2));