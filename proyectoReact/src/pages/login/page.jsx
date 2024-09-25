import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function Login() {
  const [stateLogin, setStateLogin] = useState({
    username: "",
    password: "",
  });

  // Funciones
  const cambioUsername = (e) => {
    setStateLogin({ ...stateLogin, username: e.target.value });
  };
  const cambioPassword = (e) => {
    setStateLogin({ ...stateLogin, password: e.target.value });
  };

  const enviarLogin = () => {
    console.log("Enviar");
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-center min-h-screen bg-gray-100"
        style={{ height: "100vh" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Login AroundTheCorner</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formLogin">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={cambioUsername}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onChange={cambioPassword}
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end">
              <Button
                style={{ backgroundColor: "#A167A5", borderColor: "#A167A5" }}
                type="submit"
                onClick={enviarLogin}
              >
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Login;
