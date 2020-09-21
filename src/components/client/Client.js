import React from 'react'

export default function Client(props) {
    // const { clients } = props;
    return (
        <div>
            {props.clients.map(c =>(
                <p key={c.id}>{c.name}</p>
            ))}
        </div>
    )
}
