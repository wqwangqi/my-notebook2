// 创建了四个组件，其中slider是集合组件；
// 将其他子组件集成的这个大组件中
import React from 'react';
import SliderItem from './sliderItem';
import SliderDots from './sliderDots';
import SliderArrow from './sliderArrow';
// export default 把当前组件导出
export default class Slider extends React.Component{
    constructor(){
        super();
        this.state = {index:0}
        // 定义一个初始的状态值，当前index代表当前显示图片的索引
    }
    componentDidMount(){
        this.go();
    }
    turn=(step)=>{
        // 根据不同的条件，控制step是不一样的
        if(this.state.index===3){
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = '0px';
            // 强行重绘
            let left = window.getComputedStyle(this.sliders).left;
            this.sliders.style.transitionDuration = '0.5s';
            this.setState({index:0})
        }
        if(this.state.index+step===-1){
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = '-1200px';
            // 强行重绘
            let left = window.getComputedStyle(this.sliders).left;
            this.sliders.style.transitionDuration = '0.5s';
            this.setState({index:2})
            return;
        }
        if(this.state.index===3){
            this.setState({index:1});
            return
        }
        this.setState({index:this.state.index+step})
    }
    go=()=>{
        this.timer = setInterval(()=>{
            this.turn(1)
        },2000)
    }
    getSlider=(x)=>{
        this.sliders = x;
        // 将子组件中的元素，给了父组件中的sliders的属性
    }

    render(){
        return <div className='container' onMouseOver={()=>{clearInterval(this.timer)}} onMouseOut={()=>{this.go()}}>
            <SliderItem imgs = {this.props.img} index={this.state.index} slider={this.getSlider}/>
            <SliderDots imgs = {this.props.img} index={this.state.index} turn={this.turn}/>
            <SliderArrow turn={this.turn}/>
        </div>
    }
}
