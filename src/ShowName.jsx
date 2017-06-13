import React, { Component } from 'react';

const ShowName = ({ name, children }) => {
    return (
        <div>{ `${children} ${name}` }</div>
    );
}

export default ShowName;