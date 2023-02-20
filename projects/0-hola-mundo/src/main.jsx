import React from 'react'
import ReactDOM from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
const users = [
  {
    userName: 'chermdev',
    name: 'Carlos Hernandez',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  }
]

root.render(
  <section className='App'>
    {users.map(({ userName, name, isFollowing }) => (
      <TwitterFollowCard
        userName={userName}
        initialIsFollowing={isFollowing}>
        {name}
      </TwitterFollowCard>
    )
    )}

  </section>
)
