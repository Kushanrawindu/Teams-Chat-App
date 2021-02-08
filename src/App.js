import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine 
        height="100vh"
        projectID="94a03afc-fee1-4323-a560-a68fce8b8a56"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
      
    
  );
}

export default App;
