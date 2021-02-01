import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed'
// import ChatFeed from './component/ChatFeed'

const App = () => {
  return (
    <ChatEngine 
        height="100vh"
        projectID="94a03afc-fee1-4323-a560-a68fce8b8a56"
        userName="Kushanrawindu"
        userSecret="963320213"
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
      
    
  );
}

export default App;
