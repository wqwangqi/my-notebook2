import React from 'react';
import ReactDOM from 'react-dom';
// 在react生成的过程中，会不断的调用一些函数，那么这些函数就是这个生命周期的钩子函数
// 每一个组件都有自己的生命周期
class Count extends React.Component {
    static defaultProps = {
        // 该对象会把属性放到实例props属性上
        // 如果有值不再使用默认值，如果没有才使用该默认值
        b: 520
    }
    constructor() {
        super();
        console.log('2.constructor');
        this.state = { num: 100 }
        // 这里面不能调用setState，否则会报错
    }
    // 组件将要挂载之前执行的钩子函数
    componentWillMount() {
        console.log('3.componentWillMount');
        console.log(this.refs.wq)  //undefined
        // setState在componentWillMount中是同步的
        // this.setState({num:99})   //改状态最好在这里面更改状态

    }
    // 组件挂载完成所调用的钩子函数
    componentDidMount() {
        // 经常用于操作DOM元素
        console.log('5.componentDidMount')
        console.log(this.refs.wq)   //<div></div>
    }
    add = () => {
        //this.setState({ num: this.state.num + 1 })
        ReactDOM.unmountComponentAtNode(window.root)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        // 当数据更新时，会触发这个函数，如果该函数返回false，那么不再调用下面的钩子函数，如果返回true，会继续调用后面的钩子函数
        console.log(nextProps, nextState);
        // nextProps:代表的是下一次的属性
        // nextState：代表的是下一次的状态
        // return !(nextState.num%2);
        // 性能优化：如果props和state没有变的话，就return false
        return true
    }
    // 组件将要更新
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    // 组件更新完成之后
    componentDidUpdate() {
        // 当所有的子组件更新完成之后，才会触发父组件身上的这个钩子函数
        console.log('componentDidUpdate')
    }
    // 当组件销毁时，触发该函数，组件销毁,DOM结构也会随着消失
    componentWillUnmount(){
        // react中组件的事件和定时器，可以这个方法清除
        console.log('componentWillUnmount')
    }
    // 组件正在挂载
    render() {
        console.log('4.render');
        return <div ref='wq'>{this.props.a}{this.props.b}{this.state.num}
            <button onClick={this.add}>点我</button>
            <Child m={this.state.num} />
        </div>
    }
}
// 生命周期：
// 组件的初始化：defaultProps===>constructor===>componentWillMount===>render===>componentDidMount（可以操作DOM）
// 组件的数据更新:shouldComponentUpdate===>componentWillUpdate===>render===>componentDidUpdate

class Child extends React.Component {
    constructor() {
        super();
    }
    componentWillReceiveProps() {
        // 当第一次接受父组件传递过来的数据时，不执行该函数；之后，只要父组件状态发生变化，就会触发该钩子函数；
        console.log("componentWillReceiveProps")
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate-child");
        return true;
    }
    componentWillUpdate() {
        console.log("componentWillUpdate-child");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate-child");
    }
    render() {
        return <div>{this.props.m}</div>
    }
}
// ReactDOM.unmountComponentAtNode()
ReactDOM.render(<Count a="1" />, window.root)

