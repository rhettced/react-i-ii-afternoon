import React, {Component} from 'react';

class NameCard extends Component{

    render(){
       //console.log(this.props.dataForNames.name.first);
        return(
        <h1>{this.props.dataForNames.name.first} {this.props.dataForNames.name.last}</h1>
        );
    }

}

export default NameCard;