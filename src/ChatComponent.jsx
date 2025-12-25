import React, { useState } from 'react'
import ChatMessage from './ChatMessage';

function ChatComponent() {

    const [chatMessages, setChatMessages] = useState([{
        message:'hello chatbot',
        sender:'user',
        id:crypto.randomUUID()
    },{
        message:'hello, How can I help you?',
        sender:'robot',
        id:crypto.randomUUID()
    },{
        message:'can you get me todays date?',
        sender:'user',
        id:crypto.randomUUID()
    },{
        message:'Today is December 22nd Monday',
        sender:'robot',
        id:crypto.randomUUID()
    }]);

    const addMessage = ()=>{
        setChatMessages(
            [...chatMessages, {
                message:'Test',
                sender:'user',
                id:crypto.randomUUID()
            }]
        );
    }



    return (
        <>
            <button onClick={addMessage}>Test Click!</button>
            {chatMessages.map((chat)=>{
            return (
                <ChatMessage 
                    message={chat.message} 
                    sender={chat.sender}
                    key={chat.id} 
                    />
                )
            })}
        </>
    )
    
}

export default ChatComponent