import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

const NotFoundComponent = () => {
    return (
    <div style={{ textAlign: "center" }}>
        <h1>Page Not Found</h1>
        <p >
            <Link to="/">Go to Home </Link>
        </p>
    </div>
    )
}

export default NotFoundComponent;