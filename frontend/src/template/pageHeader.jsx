import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <header className="page-header">
        <h2>{props.name}
            <small>{props.small}</small>
        </h2>
    </header>
)