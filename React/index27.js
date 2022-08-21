import React from 'react';

export default function App() {
  // list of users
  const users = [
    { name: 'Sarah Lifaefi' },
    { name: 'Patience Kavira' },
    { name: 'Abel Lifaefi' },
    { name: 'Neema Kelekele' },
  ]

  // the condition
  const showList = true

    return (
      <div>
      {
        showList ? (
          <div>
          <h1>Available users</h1>
          <ul>
            {users.map(user => 
                <li>{user.name}</li>)}
          </ul> 
          </div>
        ) : (
          <p>No user available.</p>
        )
      }
      </div>
    )
}