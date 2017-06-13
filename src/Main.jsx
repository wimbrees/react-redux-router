import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changenum } from './actions';
import ShowName from './ShowName.jsx';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Michael'
        }
    }

    changedNum() {
        let num = Math.floor(Math.random() * 100);
        console.log(num);
        this.props.changed(num);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <div >
                <h1>{this.props.num}</h1>
                <ShowName name={this.state.name}>
                    The name is:
                </ShowName>
                <hr />
                <button onClick={() => this.changedNum()}>Get a random number</button>
            </div>
        );
    }
}

const mapStateToProps = ({ num }) => {
    return {
        num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changed: (num) => {
            dispatch(changenum(num))
        }
    }
}

const MainWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainWithRedux;