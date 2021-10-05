import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://3.109.247.241:6678/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();
        setRedirect(true);
        props.setName(content.name);
    };
    if (redirect) {
        return React.createElement(Redirect, { to: "/" });
    }
    return (React.createElement("form", { onSubmit: submit },
        React.createElement("h1", { className: "h3 mb-3 fw-normal" }, "Please sign in"),
        React.createElement("input", { type: "text", className: "form-control", placeholder: "Email address", required: true, onChange: e => setEmail(e.target.value) }),
        React.createElement("input", { type: "password", className: "form-control", placeholder: "Password", required: true, onChange: e => setPassword(e.target.value) }),
        React.createElement("button", { className: "w-100 btn btn-lg btn-primary", type: "submit" }, "Sign in")));
};
export default Login;