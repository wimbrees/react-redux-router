import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doublenum } from './actions';

class Second extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.double}>Double num value</button>
            </div>
        );
    }
}

const SecondWithRedux = connect(
    null,  // State is not needed here
    { double: doublenum }  
)(Second)

export default SecondWithRedux;