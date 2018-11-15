import React from 'react';
import NAV from '../component/NAV/NAV';
export default class App extends React.Component{
   constructor(){
      super()
   }
   render(){
      return <div>
        {this.props.children}
        <NAV/>
      </div>
   }
}
