import React from 'react';
export default class SliderDots extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <ul className='focus'>
            {this.props.img.map((item,index)=>{
                if(index===this.props.img.length-1){
                    return null;
                }
                return <li key={index} className={this.props.index===index||this.props.index-index===this.props.img.length-1?'active':''} onClick={()=>{this.props.turn(index-this.props.index)}}></li>
            })}
        </ul>
    }
}