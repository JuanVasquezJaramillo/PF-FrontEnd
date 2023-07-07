import { useState } from 'react'
import UserProfile from './components/userProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProfile></UserProfile>
    </>
  )
}

export default App
