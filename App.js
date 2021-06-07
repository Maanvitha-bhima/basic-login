import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
function App() {

  const adminUser={
    email:"admin@admin.com",
    password:"admin@123"
  }
  const [user,setUser]=useState({name:"",email:""});
  const[error,setError]=useState("");
  const Login=details =>{
    console.log(details);

    if(details.email == "admin@admin.com" && details.password == "admin@123")
    {
      console.log("logged in!!");
      setUser({
        name:details.name,
        email:details.email
      });
    }
    else{
      console.log("details do not match");
      setError("Details do not match");
    }
  }
  const Logout= () =>{
    setUser({ name:"", email:""})
  }
  return (
    <div className="App">
      {(user.email != "")?(
        <div clasName="welcome:">
          <h2>welcome   <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
