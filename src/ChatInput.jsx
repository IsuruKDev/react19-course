import React from 'react'

function ChatInput() {
  return (
    <>
        <input 
            type='text' 
            placeholder='Send a message to Chatbot...' 
            size={40}
        />
        <button>Send</button>
    </>
  )
}

export default ChatInput