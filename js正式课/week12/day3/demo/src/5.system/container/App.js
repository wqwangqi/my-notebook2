import React from 'react';
import NAV from '../component/NAV'
export default class App extends React.Component{
   constructor(){
      super()
   }
   render(){
      return <div>
         <NAV/>
         {this.props.children}
      </div>
   }
}