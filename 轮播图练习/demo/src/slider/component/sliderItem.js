import React from 'react';
export default class SliderItem extends React.Component{
    constructor(){
        super();
    }
    render(){
        let style = {
            left:-this.props.index*400+'px',
            transition:`left 0.5s linear`
        }
        return <ul className='wrapper' style={style} ref={this.props.slider}>
            {this.props.img.map((item,index)=>{
                return <li key={index}>
                    <img src={item} alt=""/>
                </li>
            })}
        </ul>
    }
}