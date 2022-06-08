import * as React from 'react';
import Video from '../components/Video';
import { useNavigate } from "react-router-dom";



const LandingPage = (): JSX.Element => { 

     let navigate = useNavigate()
     const [signUpUser, setSignUpUser] = React.useState('') 
     const [signUpPassword, setSignUpPassword] = React.useState('')
     const [loginUser, setLoginUser] = React.useState('') 
     const [loginPassword, setloginPassword] = React.useState('')

     const buttonClickSignUp =   () => {
     const formObject = { users : signUpUser, password: signUpPassword}
     try {
       fetch('http://localhost:8080/signup',
         { method: "POST",
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(formObject)
         })
         navigate('/profiles')
        } catch {
          navigate('/')

        }
     }

     const buttonClickLogIn = async () => {
      const formObject = { users : loginUser, password: loginPassword}
        const result = await fetch('http://localhost:8080/login',
          { method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formObject)
          })
          if(result.status==200) {
          navigate('/profiles')
          } else {
           alert("Account or Password are incorrect")
          }
         
      }

    return (
        <div>
            <h1 className="text-center bg-black text-white text-5xl">Code Review MarketPlace</h1>
     <div>
      <Video></Video>
      <div className="grid place-content-center h-center absolute bottom-64 left-72 z-1">
        <label>
          <div className="shadow-2xl bg-green-700 rounded-md py-7 px-7">
            <h4 className="mb-2 text-emerald-200">Sign Up</h4>
            <input
              className="shadow appearance-none mx-2 border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Username"
              onChange={(e) => setSignUpUser(e.target.value)}
            />
        
            <input
              className="shadow appearance-none mx-2 border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Password"
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 mx-2 hover:bg-blue-700 shadow-lg text-white font-bold py-2 px-4 rounded"
              onClick={buttonClickSignUp}
            >
              Submit
            </button>
          </div>
          </label>
          <label>
         <br/><br/>
          <div className="shadow-2xl bg-green-700 rounded-md py-7 px-7">
            <h4 className="mb-2 text-emerald-200">Login</h4>
            <input
              className="shadow appearance-none mx-2 border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Username"
              onChange={(e) => setLoginUser(e.target.value)}
            />
            <input
              className="shadow appearance-none mx-2 border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Password"
              onChange={(e) => setloginPassword(e.target.value)}
            />
            <button className="bg-blue-500 mx-2 hover:bg-blue-700 shadow-lg text-white font-bold py-2 px-4 rounded"
            onClick={buttonClickLogIn}
            >
              Submit
            </button>
          </div>
        </label>
      </div>
      </div>
      </div>
    );

}
export default LandingPage








