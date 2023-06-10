import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { allUsersRoute } from '../Router';
import Contacts from '../components/Contacts.js';
import Chatbox from '../components/Chatbox.js';
export default function Main() { 

  const [ContactList, SetContactList] = useState([])
  const [LoginUser,SetLoginUser] = useState(undefined);
  const [CurrChat,SetCurrChat] = useState(undefined);
  const NavPage = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("chat-app-current-user")) {
      NavPage("/login");
    } else {
      SetLoginUser(JSON.parse(localStorage.getItem("chat-app-current-user")));
    }
  },[])

  useEffect( () => {
    if(LoginUser){
      const data = axios.get(`${allUsersRoute}/${LoginUser.username}`);
      data.then(value => SetContactList(value.data));
    } 
  },[LoginUser])

  const getCurrentChat = (e) => {
    SetCurrChat(e)
  };

  const Logout = (e) => {
    localStorage.clear();
    NavPage("/login");
  }

  return (
    <div className='container'>
      <div className='Chat-app'>
        <Contacts 
          contacts={ContactList}
          currentUser={LoginUser}
          CurrentChat={getCurrentChat}
        />
        {CurrChat === undefined ? (
          <div className='chat-box'><br/></div>) : 
          (<Chatbox 
            currentChat={CurrChat}
          />)
        }
        <div className='logout' onClick={() => Logout()}>
          <i class="fa-solid fa-door-open"></i>
        </div>
      </div>
    </div>
  )
}


