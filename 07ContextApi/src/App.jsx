import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {
  

  return (
    <UserContextProvider>
    <div className='flex justify-center items-center flex-col h-screen bg-gray-900 text-white'>
      <h1 className='text-3xl font-bold m-1.5'>Context</h1>
      <Login />
      
      <Profile />
    </div>
    </UserContextProvider>
  )
}

export default App
