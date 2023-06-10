import React, {useState} from 'react'
export default function ChatInput({SendMsg}) {
  const [Msg,SetMsg] = useState();
  const SendChat = (e) =>
  {
    e.preventDefault();
    if (Msg.length > 0) {
     SendMsg(Msg);
     SetMsg('');
    }
  }
  return (
    <form className='chat-box-messagebox' onSubmit={(e) => SendChat(e)}>
    <input 
        className='Input-chat-box' 
        placeholder='Enter Message'
        onChange={(e) => SetMsg(e.target.value)}
        value={Msg}
    />
    <button className='Button-chat-box'>
      <i className="fa-regular fa-paper-plane"></i>
    </button>
    </form> 
  )
}
