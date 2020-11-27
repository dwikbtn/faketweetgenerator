import React from 'react'

export default function TweetBody(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.username}</p>
            <p>{props.body}</p>
            <p>{props.from}</p>
            <p>{props.rt}</p>
            <p>{props.qrt}</p>
            <p>{props.likes}</p>
            <p>{props.reply}</p>
        </div>
    )
}
