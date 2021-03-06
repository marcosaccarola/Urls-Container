import { useEffect, useState } from 'react'
import { login } from '../utilities/fetches'
import './000.css'
import Bar from './10-Bar'
import ControlsAbove from './20-ControlsAbove'
import Central from './30-Central'
import ControlsBelow from './40-ControlsBelow'

const Home=()=>{
    const[user,setUser]=useState()

    useEffect(() => {
        login({"email":"2ndTest@email.com","pw":"1234Test!",setUser})
    },[])

    return(
        <>
            <Bar user={user} />
            <ControlsAbove />
            <Central user={user} setUser={setUser} />
            <ControlsBelow />
        </>
    )
}

export default Home