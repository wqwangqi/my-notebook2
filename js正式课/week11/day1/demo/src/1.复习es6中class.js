class A{
    constructor(){
        this.a=10;
        this.b=100
    }
    //原型上的方法
    getA(){

    }
    static d(){
        return 18
    }   //添加静态属性，方法
}

class B extends A{
    constructor(){
        super();
    }
    getB(){
        
    }   
}
let a=new A();
let b=new B();
console.log(a);//=>{a:10,b:100}
console.log(b);//=>{a:10,b:100}
console.log(B.d());  //子级能够调用父级的静态属性
console.log(new B().d);  //undefined   实例不能调用父级的静态属性

b.getA();
a.getA();
A.prototype.getA();
// 继承：原型继承、call继承、寄生组合继承、es6继承
