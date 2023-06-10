import React, { useState, useEffect } from 'react'

export default function Contacts({contacts,CurrentChat}) {
  const [SelectedIndex, SetselectedIndex] = useState(undefined)
  const [LoginUser,SetLoginUser] = useState(JSON.parse(localStorage.getItem("chat-app-current-user")));
  const SelectChat = (index,data) => {
    SetselectedIndex(index)
    CurrentChat(data)
  }
  return (
    <div className='chat-contacts'>
        <div className='contact-header'>
          <h2>Contacts</h2>
          {/* <h2>Welcome, {currentUser.username}</h2> */}
        </div>
        <div className='contact-content'>
            {contacts.map((data, index) => 
              {return data.username !== LoginUser.username ? 
              <div 
                key={index}
                className='contact-text'
              >
                <div 
                className={`name ${index === SelectedIndex ?
                   "selected" : ""}`}
                  onClick={() => SelectChat(index, data)}>
                  <h3>{data.username}</h3>
                </div>
              </div> : ""
              }
            )}
        </div>
    </div>
  )
}
