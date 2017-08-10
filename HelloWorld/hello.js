/**
 * Created by Administrator on 2017/8/6.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'I will be stronger'
    }
})

var app2  = new Vue({
    el:"#app-2",
    data:{
        message: '新消息'
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            { text: '学习JavaScript'},
            { text: '学习Vue'},
            { text: '做项目'},
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'Hello , I am li'
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue!'
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0, text:'蔬菜'},
            {id:0, text:'水果'},
            {id:0, text:'米饭'},
        ]
    }
})

var example1 = new Vue({
        el: '#example-1',
        data: {
            message: ''
        }
})

var example2 = new Vue({
    el:'#example-2',
    data:{
        message:''
    }
})

var example3 = new Vue({
    el:'#example-3',
    data:{
        checkedNames:[]
    }
})

var example4 = new Vue({
    el:'#example-4',
    data:{
        picked:[]
    }
})

var example5 = new Vue({
    el:'#example-5',
    data:{
        selected:''
    }
})

var example6 = new Vue({
    el:'#example-6',
    data:{
        selected:''
    }
})

var example7 = new Vue({
    el: '#example-7',
    data: {
        selected: 'A',
        options:[
            {text:'One', value:'A'},
            {text:'Two', value:'B'},
            {text:'Three', value:'C'}
        ]
    }
})


















