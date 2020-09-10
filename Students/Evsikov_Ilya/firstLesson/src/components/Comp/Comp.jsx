import './style.css';

import React from 'react';

export default props => {
    // let name = props.name;
    let {name} = props;
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2>Something from react-component</h2>
            <p className="red">Hello {name}</p>
        </div>
    )
}