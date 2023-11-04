
import { Button, FormFloating, FormText } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, {  useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitRegister = (e) => {
    e.preventDefault();
    const allobj = { name, email, username, password };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allobj),
    })
      .then((res) => {
        // if(emailValidation()){
        toast.success("Register Succesfully");
        navigate('/')
        // }
      })
      .catch((err) => {
        toast.error("Failed :" + err.message);
      });
  };

  return (
    <div className="d-flex flex-column  align-items-center bg-light vh-100 bg-dark">
      <div className="w-35 mt-3 rounded bg-white border shadow p-3">
        <h3>Register</h3>
        <Form onSubmit={submitRegister}>
          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
            <label htmlFor="floatingInputCustom">Enter Name</label>
          </Form.Floating>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
            <label htmlFor="floatingInputCustom">Email Address</label>
          </Form.Floating>
          {/* <Form.Floating className="mb-2">
            <Form.Control
              id="floatingPasswordCustom"
              type="Number"
              required
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter Your Number"
            />
            <label htmlFor="floatingPasswordCustom">Enter Number</label>
          </Form.Floating> */}

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingPasswordCustom"
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <label htmlFor="floatingPasswordCustom">Enter Username</label>
          </Form.Floating>

          <Form.Floating className="mb-2">
            <Form.Control
              id="floatingPasswordCustom"
              type="Number"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Set Password"
            />
            <label htmlFor="floatingPasswordCustom">Set Unique Password</label>
          </Form.Floating>

          <FormFloating className="mt-2">
            <Button to="/login" type='submit' variant="primary">
               Register
            </Button>
          </FormFloating>
          <FormText>
          if you are already register then{" "}
            <NavLink to={"/"}>Login</NavLink>
          </FormText>
        </Form>
      </div>
    </div>
  );
};

export default AddContact;

