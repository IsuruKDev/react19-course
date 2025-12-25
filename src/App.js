
import { useState } from 'react';
import './App.css';
import ChatComponent from './ChatComponent';
import ChatInput from './ChatInput';

function App() {

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

  return (
    <div className="App">
      <ChatInput
        chatMessages = {chatMessages} 
        setChatMessages = {setChatMessages}
      />
      <ChatComponent 
        chatMessages = {chatMessages}
      />
    </div>
  );
}

export default App;
