import React from 'react'
import If from './if'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <If test={!props.hide}>
            <button className={'btn btn-' + props.style} onClick={props.onClick}>
                <i className={'fa fa-' + props.icon}></i>
            </button>
    </If>
)

