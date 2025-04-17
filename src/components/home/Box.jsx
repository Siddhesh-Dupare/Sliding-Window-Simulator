import React from "react";

import '../../styles/box.css'

import { Link } from 'react-router-dom'

function Box( props ) {
    return (
        <>
            <div className="box-wrapper">
                <div className="title">
                    <h3>{ props.title }</h3>
                    
                    <hr />
                </div>

                <div className="description">
                    <p>
                        { props.description }
                    </p>

                    <ul style={{ display: props.flag }}>
                        <li>{ props.link1 }</li>
                        <li>{ props.link2 }</li>
                    </ul>

                </div>

                <div className="redirect-btn">
                    <hr />
                    <Link to={ props.redirect }><li>{ props.link }</li></Link>
                </div>
            </div>
        </>
    );
}

export default Box;
