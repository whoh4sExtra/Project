import React, {useEffect, useState} from 'react'
import ChatInput from './ChatInput.js';
import axios from 'axios';
import { AllMsgRoute, SendMsgRoute } from '../Router.js';

export default function Chatbox({currentChat}) {
    const [LoginUser,SetLoginUser] = useState(JSON.parse(localStorage.getItem("chat-app-current-user")));
    const [Messages,SetMessages] = useState([]);
    
    const SendMsg = async (e) => {
        await axios.post(SendMsgRoute, {
            from: LoginUser._id,
            to: currentChat._id,
            message: e,
        })
    }

    useEffect(() => {
        const data = axios.post(AllMsgRoute, {
            from: LoginUser._id,
            to: currentChat._id
        });
        data.then(value=>(SetMessages(value.data)))
    },[currentChat,Messages])
    
    return (
        <div className='chat-box'>
            <div className='chat-box-header'>
              <h1>{currentChat.username}</h1> 
            </div>
            <div className='chat-box-content'>
                {
                    Messages.map((data,index) => (
                        <div 
                        key= {index}
                        className={`message ${data.fromSelf ? "sended" : "received"}`}>
                            <div className='content'>
                                <p>
                                    {data.message}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ChatInput SendMsg={SendMsg} ></ChatInput>
        </div>
    )
}
