import React, { useState } from "react";
import axios from "axios";
import {  Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormFloating } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [setIsLogin]=useState(true);
  const [showPassword] = useState(false);
  const [ setError] = useState('');

  const navigate = useNavigate();


  const handleUsernameChange = (e) => {
    setError('');
    const value = e.target.value;
    // below if code is know as regular expression. this is used for validation of username. you can not type another anything except this a-zA-Z0-9@$
    if (/^[a-zA-Z0-9@$]+$/g.test(value)) {
      setUsername(value);
    }
  };

  const handlePasswordChange = (e) => {
    setError('');
    const value = e.target.value;
    setPassword(value);
  };

  

  



  const precedLogin = (e) => {
    e.preventDefault();
  
    
      axios("http://localhost:3000/users")
        .then((response) => {
          console.log(response.data);
          response.data.map((item) => {
            if (item.username === username && item.password === password) {
              toast.success("login succesfully");
              localStorage.setItem('login',true);
              localStorage.setItem('user',JSON.stringify(item))
              navigate("/home");
            } else {
              console.log("incorrect username or paasword");
              setIsLogin(false);
            }
          });
        })
        .catch((err) => {
          toast.error('error')
          
        });



  };

  return(

    <div className="d-flex flex-column  align-items-center bg-light vh-100 bg-dark">
        <div className="w-30 mt-5 rounded bg-white border shadow p-3">
          <h3>Login</h3>
          <Form>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Enter user ID"
                  value={username}
                  onChange={handleUsernameChange}
              />
              <label htmlFor="floatingInputCustom">Enter Username</label>
            </Form.Floating>
  
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                placeholder="Enter Your Password"
                type={showPassword ? "text" : "password"}
                value={password}
               onChange={handlePasswordChange}
                
              />
              <label htmlFor="floatingInputCustom">Enter Password</label>
            </Form.Floating>
           
            <FormFloating className="mt-4">
            
              <Button variant="danger" onClick={(e) => precedLogin(e)}>
                Login
              </Button>
            </FormFloating>
          
          <Form.Text> if you are new <NavLink to={"/register"}>register</NavLink></Form.Text>
      
          </Form>
        </div>
      </div>
  )
  
    
};

export default Login;




