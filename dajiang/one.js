/**
 * Created by Administrator on 2017/9/9.
 */
var H = readInt()
var x = readInt()
var y = readInt()
var h = readInt()
var s = readInt()

var time = s - h / x
var out = 0
if(time < 0){
    out = Math.round( x * s )
}else{
    out = Math.round( x * time - y * time + h )
}
if(out > H){
    out = H
}

print(out)
