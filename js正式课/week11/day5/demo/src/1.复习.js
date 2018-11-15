
// es7的语法
/* let obj1 = {a:1,b:2};
let newObj = {...obj1};
console.log(obj1===newObj);   // false */

// 数组的去重 面试     

let ary = [{a:1,b:2},{a:1,b:3},{a:1,b:4},{a:1,b:2},{a:1,b:3},{a:3,b:2}]
let ary1 = [];
for(var i=0;i<ary.length;i++){
    　　var flag = true;
    　　for(var j=0;j<ary1.length;j++){
    　　　　if(ary[i].a == ary1[j].a&&ary[i].b == ary1[j].b){
    　　　　　　flag = false;
    　　　　};
    　　}; 
    　　if(flag){
            ary1.push(ary[i]);
    　　};
    };
    console.log(ary1);
    
    
// 实现去重


// 如果属性相同，后面的会把前面的覆盖，如果对象中不存在，就相当于新增
/* let q = {a:1,b:3};
let w = {a:3,c:5};
let s = {...q,...w}
console.log(s);  //{ a: 3, b: 3, c: 5 } */
