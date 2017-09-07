function FirstNotRepeatingChar(str)
{
    // write code here

    var len = str.length;
    if(len == 0){
        return -1;
    }
    var object = {};
    for(var i=0; i<len; i++){
       if(!object[str[i]]){
           object[str[i]] = 1;
       }else{
           object[str[i]]++;
       }
    }
    for(var i=0;i<len;i++){
        if(object[str[i]]==1){
            return i;
        }
    }
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};