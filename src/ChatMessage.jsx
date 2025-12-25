import React from 'react'
import userIcon from './imgs/user.png'
import robotIcon from './imgs/robot.png'

function ChatMessage({message, sender}) {

    return (

        <div>
            {sender === "robot" && (
                <img src={robotIcon} alt='robot icon' width={40} />
            )}
            {message}
            {sender === "user" && (
                <img src={userIcon} alt='user icon' width={40} />
            )}
        </div>
    )
}

export default ChatMessage