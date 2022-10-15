import React from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'
import './Dashboard.css'

function Dashboard() {

    const [switchloginsignup,setswitchloginsignup] = React.useState(false)

    const ListenToSignup = (data) => {
        if(data == true){
            setswitchloginsignup(true)
        }else if(data == false){
            setswitchloginsignup(false)
        }
    }
  return (
    <div className="dashBoard-container">
                {
                    switchloginsignup ? <Signup ListenToSignup= {ListenToSignup}/> : <Login ListenToSignup= {ListenToSignup} />
                }
            </div>
  )
}

export default Dashboard