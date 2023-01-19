import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import React, { useState, Component, useEffect, useRef, Fragment, createRef } from 'react';
function Nave() {

    return (
        <div>
            <Link to="">Home Page</Link> <br />
            <Link to="/about">about Page</Link> <br />
            <Link to="/users">users Page</Link> <br />
        </div>
    )
}
export default Nave;
