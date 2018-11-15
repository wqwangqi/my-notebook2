import React from 'react';
import PropTypes from 'prop-types';
export default class Title extends React.Component{
constructor(){
   super()
}
static contextTypes={
    color:PropTypes.string
}
render(){
   return <div style={{color:this.context.color}}>
       今天周四晴天
   </div>
   }
}