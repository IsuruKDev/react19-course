import { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

function ChatComponent({chatMessages}) {

    const chatMessagesRef = useRef(null);

    useEffect(()=>{
       const chatMessagesElem = chatMessagesRef.current;
       if(chatMessagesElem){
        chatMessagesElem.scrollTop = chatMessagesElem.scrollHeight;
       }
    },[chatMessages]);

    return (
        <div className='chat-component' ref={chatMessagesRef}>
            {chatMessages.map((chat)=>{
            return (
                <ChatMessage 
                    message={chat.message} 
                    sender={chat.sender}
                    key={chat.id} 
                    />
                )
            })}
        </div>
    )
    
}

export default ChatComponent