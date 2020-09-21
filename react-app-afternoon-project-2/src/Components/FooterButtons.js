import React, {Component} from 'react';

class FooterButtons extends Component{

    render(){
        return(
            <div className='footbuttons'>
                <button onClick={this.props.previous}> {'< Previous'} </button>
                <div className='middlesButtons'>
                    <button className='blueButtons'> Edit </button>
                    <button className='blueButtons' onClick={this.props.delete}> Delete </button>
                    <button className='blueButtons'> New </button>
                </div>
                <button onClick={this.props.next}> {'Next >'} </button>
            </div>
        );
    }

}

export default FooterButtons;