import React, { Component } from 'react';

class FromTitleEmployee extends Component {

    render() {
        //console.log(this.props.dataForEmployee)
        return (
            <div>
                <p>From: {this.props.dataForEmployee.city}, {this.props.dataForEmployee.country}</p>
                <p>Job Title: {this.props.dataForEmployee.title}</p>
                <p>Employer: {this.props.dataForEmployee.employer}</p>
            </div>
        );

    }

}


export default FromTitleEmployee