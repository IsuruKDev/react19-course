import React from 'react'
import userIcon from './imgs/user.png'
import robotIcon from './imgs/robot.png'

function ChatMessage({message, sender}) {

    return (

        <div className={
                sender === 'user'
                ? 'chat-message-user'
                :'chat-message-robot'
            }>
                {sender === "robot" && (
                    <img src={robotIcon} alt='robot icon' className='profile-icon' />
                )}
                <div className='chat-message-text'>
                  {message}  
                </div>
                {sender === "user" && (
                    <img src={userIcon} alt='user icon' className='profile-icon' />
                )}
        </div>
    )
}

export default ChatMessage