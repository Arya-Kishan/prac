import { useEffect, useState } from 'react'
import { Button, Stack } from '@mui/material'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import './App.css'
import { app } from './components/Firebase'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

function App() {

  const [data, setData] = useState(null)

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(val => console.log(val))
      .catch(error => console.log(error))
  }

  const handleSignOut = () => {
    signOut(auth)
  }

  useEffect(() => {

    onAuthStateChanged(auth, (userData) => {

      if (userData) {
        console.log(userData)
        setData(userData)
      } else {
        setData(null)
      }

    })

  }, [])


  return (
    <>
      {
        data ? (
          <>
            <h1>WELCOME</h1>
            <div>{data.displayName}</div>
            <div>{data.email}</div>
            <div><img src={data.photoURL} alt="" srcset="" /></div>
            <button onClick={handleSignOut}>LOGOUT</button>
          </>
        ) : (
          <>
            <h1>PLS DO SIGN IN</h1>
            <button onClick={handleSignIn}>LOGIN WITH GMAIL</button>
          </>
        )
      }
    </>
  )
}

export default App
