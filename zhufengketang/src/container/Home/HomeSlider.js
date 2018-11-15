// 轮播图
import React from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends React.Component{
    constructor(){
       super()
       this.state={index:0}
    }
    render(){
        let option = {
            continuous: true,
            auto:2000,
            callback:(index,ele)=>{
                // 每轮播一张，就会执行一次，给当前函数传了一个index，代表当前显示图片的索引
                // console.log(index);
                this.setState({index:index})
        }}
       return <div className='home-swipe'>
            <ReactSwipe className="carousel" swipeOptions={option} key={this.props.sliders.length}>  
                {this.props.sliders.map((item,index)=>{
                    return <div key={index}>
                        <img src={item} alt=""/>
                    </div>
                })}
            </ReactSwipe>
            <div className='focus'>
                {this.props.sliders.map((item,index)=>{
                    return <span  key={index} className={this.state.index===index?'active':''}></span>
                })}
            </div>
       </div>
    }
}