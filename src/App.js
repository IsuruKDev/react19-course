
import { useState } from 'react';
import './App.css';
import ChatComponent from './ChatComponent';
import ChatInput from './ChatInput';

function App() {

  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="App">
      <ChatComponent 
        chatMessages = {chatMessages}
      />
      <ChatInput
        chatMessages = {chatMessages} 
        setChatMessages = {setChatMessages}
      />
    </div>
  );
}

export default App;
