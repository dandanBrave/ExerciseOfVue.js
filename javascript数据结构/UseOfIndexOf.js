/**
 * Created by Administrator on 2017/8/10.
 */
var names = ['David','Cynthia','Paymond','Clayton','Jennifer'];
//var namestr = names.join();
var namestr = names.toString();
console.log(namestr);
var name = 'David';
var position = names.indexOf(name);
if(position>=0){
    console.log("Found "+name+" at position "+position);
}else {
    console.log(name+" not found in array.");
}