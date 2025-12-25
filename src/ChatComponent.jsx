import ChatMessage from './ChatMessage';

function ChatComponent({chatMessages}) {

    return (
        <>
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