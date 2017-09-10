var lineAdd=0;
var inputArr=["1 2 3"];
function readline(){
    var line=inputArr[lineAdd];
    lineAdd++;
    return line;
}
function print(x){
    console.log(x);
}
var input = readline().split(" ");
for(var i=0;i<input.length;i++){
    input[i] = parseInt(input[i]);
}

function isTriangle(input) {
    if(input[0]+input[1]>input[2] && input[0]+input[2]>input[1] && input[1]+input[2]>input[0]){
        return true;
    }
}
while (!isTriangle(input)){
    input.sort(function (a,b) {
        return b-a;
    });
    input[0] -= 1;
}

var sum = input[0] + input[1] + input[2];
print(sum);
