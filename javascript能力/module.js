/**
 * Created by Administrator on 2017/8/23.
 */
//使用构造函数法
function createModule(str1, str2) {
   function Obj() {
       this.greeting = str1
       this.name = str2
       this.sayIt = function () {
           return this.greeting + ", " + this.name
       }
   }
   return new Obj()
}
//使用构造函数加原型结合
function createModule(str1, str2) {
    function Obj() {
        this.greeting = str1
        this.name = str2
    }
    Obj.prototype.sayIt = function () {
        return this.greeting + ", " + this.name
    }
    return new Obj();
}