import React, { useState } from 'react'
import { Chatbot } from './Chatbot';

function ChatInput({chatMessages, setChatMessages}) {

  const [chatInput, setChatInput] = useState('');

  function textChangeEvent(event){
    setChatInput(event.target.value);
  }

  const addMessage = ()=>{

    const tempChatMessages = [...chatMessages, {
            message:chatInput,
            sender:'user',
            id:crypto.randomUUID()
        }];

    setChatMessages(tempChatMessages);

    const chatResponse = Chatbot.getResponse(chatInput);
    setChatMessages(
        [...tempChatMessages, {
            message:chatResponse,
            sender:'robot',
            id:crypto.randomUUID()
        }]
    );
    setChatInput('');
  }

  return (
    <>
        <input 
            type='text' 
            placeholder='Send a message to Chatbot...' 
            size={40}
            onChange={textChangeEvent}
            value={chatInput}
        />
        <button
          onClick={addMessage}
        >Send</button>
    </>
  )
}

export default ChatInput