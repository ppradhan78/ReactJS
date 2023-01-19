import React, { useState,PureComponent, Component, useEffect, useRef, Fragment } from 'react';

class PureComp extends PureComponent {

    render() {
        return (
            <div className="App">
                <h3>Pure Comp</h3>
                <h3> {this.prop.count}</h3>
            </div>
        );
    }
}

export default PureComp;