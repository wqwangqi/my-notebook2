/* 
forEach
map
for in
for of
filter
includes
find
some
every
reduce

*/
var ary = ['4',2,'5',4,6,9,8];

// 1.forEach
/* ary.forEach((item,index,input)=>{
    console.log(this);   //this是window
}) */


// 2.map 将回调函数的返回值组成一个新的数组

/* var newAry = ary.map((item,index)=>{
    return item*10
})
console.log(newAry);   //[ 40, 20, 50, 40, 60, 90, 80 ]
 */


// 3.for in  遍历对象   也可以遍历数组

/* for(var key in ary){
    console.log(key);   //数组的索引
    console.log(ary[key]);  //数组中的每一项
} */


// 4.for of  遍历数组，只能遍历数组，不能遍历对象
/* for(var item of ary){
    console.log(item);   //item对应的是ary中的每一项
}  */
// 直接遍历对象会报错，我们可以调用方法【Object.keys()】解决
/* var obj = {name:'zf',age:5};
//console.log(Object.keys(obj));
for(var item of Object.keys(obj)){
    console.log(item);
} */


// 5.filter 过滤：将符合条件的值，放到一个新的数组当中  
// 1)、遍历数组；2)、将符合回调函数返回值的内容【判断为true】放到一个新的数组当中
// 原数组不会发生改变
/* var newAry = ary.filter((item,index)=>{
    return item>6
})
console.log(newAry,ary);  //[ 9, 8 ]  [ 4, 2, 5, 4, 6, 9, 8 ] */

// 用map不合适
/* var newAry = ary.map((item,index)=>{
    if(item>6){
         return item
    }  //如果小于6的话，没有return，所以返回undefined
})
console.log(newAry,ary);  //[ undefined, undefined, undefined, undefined, undefined, 9, 8 ] */


// 6.includes判断数组当中是否有某项  有=>true  否=>false
/* var newAry = ary.includes('5');  //里面的数，必须和数组里面保持一致
console.log(newAry);  //true */


// 7.find 查找 => 找到符合条件的值进行返回
// 1)、遍历数组；2)、判断回调函数返回值的布尔值，返回true，停止便利，直接将这个值【遍历数组当前项的值】返回
// 遇到符合的数就停止便利，进行返回
/* var newAry = ary.find((item,index)=>{
    return item>6
})
console.log(newAry);   //9 */


// 8.some 找true =>遍历数组当中如果回调函数返回计算为true，停止便利，整体返回true，全部便利后，都没有返回true，整体返回为false
/* var newAry = ary.some((item,index)=>{
    return item>5
})
console.log(newAry); //true */


// 9.every 找 false => 1).遍历数组；2).如果回调函数返回值计算结果为false，停止遍历，整体返回false
// 如果计算结果为true的话，继续进行遍历，【当遍历结束后，全部返回为true的话，整体返回true】，直到找到false，否则为true
/* var newAry = ary.every((item,index)=>{
    return item>5
})
console.log(newAry);  //false */


// 10.reduce 返回两次计算后的结果
//  1)、遍历数组；2)、将回调函数返回值作为第一次的计算结果【return后面的值】
//      prev【初始值 => 第一项的值，当痪第二次的时候，就是计算后的结果】
//      next【数组第二项，从第二项依次向后获取】
//      index【next代表值所对应的索引】
//      input【当前数组】
// 遍历ary.length-1次
// 1.prev => 4 next => 5 index => 1     //这一次计算结果return xxx 【对应prev的值】
// ...

/* var newAry = ary.reduce((prev,next,index,input)=>{
    //console.log(prev,next,index,input);
    return prev+next
    
})
console.log(newAry); */

// 调用reduce内置的方法可以实现数组中含有对象求和的操作，reduce第二个参数为当前数组遍历的初始值

// 4 2 1 [ '4', 2, '5', 4, 6, 9, 8 ]
// undefined '5' 2 [ '4', 2, '5', 4, 6, 9, 8 ]
// undefined 4 3 [ '4', 2, '5', 4, 6, 9, 8 ]
// undefined 6 4 [ '4', 2, '5', 4, 6, 9, 8 ]
// undefined 9 5 [ '4', 2, '5', 4, 6, 9, 8 ]
// undefined 8 6 [ '4', 2, '5', 4, 6, 9, 8 ]
