import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2 className='text-2xl m-1.5'>Login</h2>
        <input 
        className='border border-gray-300 p-2 rounded-md m-1.5'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input
        className='border border-gray-300 p-2 rounded-md m-1.5' 
        type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button 
        className='bg-blue-500 text-white p-2 rounded-md m-1.5'
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login