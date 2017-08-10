/**
 * Created by Administrator on 2017/8/10.
 * 创建这样一个对象，它将字母存储在一个数组中，并且可以用一个方法将字母连在一起，显示成一个单词
 */
function Word(arr) {
    this.letterArray = arr;
    this.connect = connect;
}
function connect() {
    return this.letterArray.join("");
}
var words = new Word(['h','e','l','l','o']);
console.log(words.connect());

