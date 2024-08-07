import React ,{ useState , useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login , logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData)
      {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false))
  },[])

  // console.log(import.meta.env.VITE_APPWRITE_URL);
  return !loading ? (
    <div className='h-screen w-full flex flex-wrap space-y-96 content-between bg-white'>
      <div className='h-screen w-full block'> 
        <Header  />
        <main>
      <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
