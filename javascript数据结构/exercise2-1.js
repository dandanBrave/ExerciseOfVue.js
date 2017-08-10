/**
 * Created by Administrator on 2017/8/10.
 * 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法
 */
function scoreOfStudent() {
    this.scoreRecord = [];
    this.add = add;
    this.average = average;
}
function add(grade) {
    this.scoreRecord.push(grade);
}
function average() {
    var total = 0;
    for(var i=0;i<this.scoreRecord.length;i++){
        total += this.scoreRecord[i];
    }
    return total/this.scoreRecord.length;
}

var studentScore = new scoreOfStudent();
studentScore.add(67);
studentScore.add(87);
studentScore.add(76);
studentScore.add(98);
studentScore.add(56);
studentScore.add(91);
console.log(studentScore.average().toFixed(2));