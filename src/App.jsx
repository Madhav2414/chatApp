
import './App.css'
import { Routes, Route } from 'react-router-dom';
import About from './view/About';
import HomePage from './view/pages/HomePage';
import MessageInput from './components/MessageBar/messageInput';
import Sidebar from './components/SideBar/Sidebar';
import Chat from './components/UserChat/SenderChat';
import ChatSearch from './components/UserChatHeader/ChatSearch';
import Navbar from './components/NavBar/Navbar';
import LandingPage from './view/pages/LandingPage/LandingPage';
function App() {

  return (
    <>
      <Routes>
      <Route path='/landingPage' element={<LandingPage />} />
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/ChatSearch' element={<ChatSearch />} />
        <Route path='/UserChat' element={<Chat />} />
        <Route path='/message' element={<MessageInput />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
