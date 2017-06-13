import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changenum } from './actions';

class First extends Component {
    
    handleChange(event) {
        this.props.changed(event.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.number} onChange={(e) => this.handleChange(e)}/>
            </div>
        );
    }
    
}

const FirstWithRedux = connect(
    ({ num }) => ({ number: num }),  // Name of the property in centralised state: Name of the property in this.props to access that state
    { changed: changenum }   // Prop name in this.props: Action name in actions file
)(First)

export default FirstWithRedux;