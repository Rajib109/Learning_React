import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='text-2xl m-1.5'>please login</div>

    return <div className='text-2xl m-1.5'>Welcome {user.username}</div>
}

export default Profile