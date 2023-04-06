

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

import { UseScreenSize } from "../hooks/UseScreenSize";
import { NameValidation, EmailValidation, PasswordValidation } from "../helpers/Validation";
import "../styles/Auth.css";

import iconGoogle from "../images/google.png";
import iconEyeClose from "../images/ic_eye_off.png";
import iconEye from "../images/ic_eye.png";


const Auth = () => {

    const [isEyeOpen, SetIsEyeOpen] = useState(false);
    const isLogin = useLocation().pathname === '/auth';
    const screenHeight = UseScreenSize();

    const [emailVal, SetEmailVal] = useState('');
    const [passwordVal, SetPasswordVal] = useState('');
    const [nameVal, SetNameVal] = useState('');
    const [resultEmail, SetResaltEmail] = useState({ message: 'Email', style: 'gray' });
    const [resultPassword, SetResaltPassword] = useState({ message: 'Password', style: 'gray' });
    const [resultName, SetResaltName] = useState({ message: 'Name', style: 'gray' });


    const ClickEye = () => {
        SetIsEyeOpen(!isEyeOpen);
    }

    const HandleUserInput = (e) => {
        Check_Symbol(e.target.name, e.target.value);
    }

    const BtnClick = () => {

        if (resultEmail.message === 'Ok!'
            && resultPassword.message === 'Ok!')
        {
            if (!isLogin)
            {
                if (resultName.message === 'Ok!')
                {
                    console.log("Regiter");
                }
            }
            else 
            {
                console.log("Login");
            }
        }
    }

    const Check_Symbol = (name, value) => {

        let result = '';
        let passwoedReg = new RegExp("[sa-zA-Z0-9._]");
        let nameReg = new RegExp("[sa-zA-Z]");
        let emailReg = new RegExp("[a-zA-Z0-9-._\\@]");

        if (!value) {
            switch (name) {
                case 'email':
                    SetEmailVal('');
                    SetResaltEmail({ message: 'Email', style: 'gray' });
                    break;
                case 'password':
                    SetPasswordVal('');
                    SetResaltPassword({ message: 'Password', style: 'gray' });
                    break;
                case 'name':
                    SetNameVal('');
                    SetResaltName({ message: 'Name', style: 'gray' });
                    break;
                default:
                    break;
            }
        }
        else {
            for (let i = 0; i < value.length; i++) {
                switch (name) {
                    case 'email':

                        if (emailReg.test(value[i])) {
                            result += value[i];
                            SetEmailVal(result);
                        }
                        SetResaltEmail(EmailValidation(result));
                        break;

                    case 'password':
                        if (passwoedReg.test(value[i])) {
                            result += value[i];
                            SetPasswordVal(result);
                        }
                        SetResaltPassword(PasswordValidation(result));
                        break;

                    case 'name':
                        if (nameReg.test(value[i])) {
                            result += value[i];
                            SetNameVal(result);
                        }
                        SetResaltName(NameValidation(result));
                        break;

                    default:
                        break;
                }
            }
        }
    }


    return (
        <div className="authContainer"
            style={{ height: screenHeight }}>

            <h4>
                {(isLogin)
                    ? 'Loginin'
                    : 'Registration'}
            </h4>

            <Form className="formCenter">

                <small style={{ color: resultEmail.style }}>{resultEmail.message}</small>
                <Form.Control
                    style={{ borderColor: resultEmail.style }}
                    type="text"
                    name="email"
                    className="rounded-pill shadow-none"
                    autoComplete="email"
                    placeholder="Input email"
                    value={emailVal}
                    onChange={HandleUserInput} />


                <div className={(resultPassword.message) ? "passGroup" : "passGroup mt-4"} >
                    <small style={{ color: resultPassword.style }}>{resultPassword.message}</small>
                    <Form.Control
                        type={(isEyeOpen) ? "text" : "password"}
                        style={{ borderColor: resultPassword.style }}
                        name="password"
                        required min={8}
                        autoComplete="password"
                        className="rounded-pill shadow-none"
                        placeholder="Input password"
                        value={passwordVal}
                        onChange={HandleUserInput} />

                    <img className='right'
                        src={(isEyeOpen) ? iconEye : iconEyeClose}
                        alt='shop'
                        onClick={ClickEye} />
                </div>


                <small style={{ color: resultName.style }}>{(isLogin) ? '' : resultName.message}</small>
                <Form.Control
                    style={{ borderColor: resultName.style }}
                    type="text"
                    name="name"
                    hidden={isLogin}
                    autoComplete="text"
                    className="rounded-pill shadow-none"
                    placeholder="Your name"
                    value={nameVal}
                    onChange={HandleUserInput} />

                <Button variant="primary"
                    className="rounded-pill shadow-none mt-4"
                    onClick={BtnClick}>
                    Ok</Button>

            </Form >

            <Link className="google" >
                <img src={iconGoogle} alt='shop' />
                Login with google
            </Link>

            {
                (isLogin)
                    ? <Link to='/register'>No account?
                        <span>registration</span></Link>

                    : <Link to='/auth'
                        className="registrLink">Have at account?
                        <span>loginin</span></Link>
            }

        </div >
    );
}

export default Auth;