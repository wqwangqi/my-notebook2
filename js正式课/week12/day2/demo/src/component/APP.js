import React from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';
export default class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className='container'>
            <div className='row'>
            {/* bootstrap :栅格化布局，默认12行：col-md-2  col-lg-2  col-xs-2  常用颜色：success danger warning ... */}
                <div className='col-md-6 col-md-offset-3'>
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <TodoHeader/>
                        </div>
                        <div className="panel-body">
                            <TodoBody/>
                        </div>
                        <div className="panel-footer">
                            <TodoFooter/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}