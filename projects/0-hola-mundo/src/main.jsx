import React from 'react'
import ReactDOM from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <section className='App'>
    <TwitterFollowCard userName="chermdev">
      Carlos Hernandez
    </TwitterFollowCard>

    <TwitterFollowCard userName="midudev">
      Miguel Ángel Durán
    </TwitterFollowCard>

  </section>
)
