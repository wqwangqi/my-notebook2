import React from 'react';
import SliderItem from './sliderItem';
import SliderDots from './sliderDots';
import SliderArrow from './sliderArrow';


export default class Slider extends React.Component{
    constructor(){
        super()
        this.state={index:0}
    }
    componentDidMount(){
        this.go()
    }
    turn=(step)=>{
        if(this.state.index===3){
            this.sliders.style.transitionDuration='0s';
            this.sliders.style.left = '0px';
            let left = window.getComputedStyle(this.sliders).left;
            this.sliders.style.transitionDuration = '0.5s';
            this.setState({index:0})
        }
        if(this.state.index+step===-1){
            this.sliders.style.transitionDuration='0s';
            this.sliders.style.left = '-1200px';
            let left = window.getComputedStyle(this.sliders).left;
            this.sliders.style.transitionDuration = '0.5s';
            this.setState({index:2})
            return 
        }
        if(this.state.index===3){
            this.setState({index:1})
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
        this.sliders = x
    }
    render(){
        return <div className='container' onMouseOver={()=>{clearInterval(this.timer)}} onMouseOut={()=>{this.go()}}>
            <SliderItem img={this.props.imgs} index={this.state.index} slider={this.getSlider}/>
            <SliderDots img={this.props.imgs} index={this.state.index} turn={this.turn}/>
            <SliderArrow turn={this.turn}/>
        </div>
    }
}