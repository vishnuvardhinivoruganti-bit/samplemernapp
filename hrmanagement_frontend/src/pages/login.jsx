import {useState} from 'react';
function Login()
{
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let handleLogin=(event)=>{
      event.preventDefault();
      console.log(email);
      console.log(password)
    }
    return(
        <div>
         <form onSubmit={handleLogin}>
    <input type="email" value={email} 
      onChange={(event)=>setEmail(event.target.value)}
    placeholder="Enter your emailid"></input><br/>
    
    <input type="password" value={password}
     onChange={(event)=>setPassword(event.target.value)}
     placeholder="Enter your password"></input><br/>
    <button type="submit">Login</button>
         </form>
        </div>
    )
}
export default Login