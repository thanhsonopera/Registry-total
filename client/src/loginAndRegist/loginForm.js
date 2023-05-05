import Button from "../components/button/button";
import Formunit from "../components/formUnit/formUnit";
import { Link } from 'react-router-dom';
import './loginAndRegister.css';
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function LoginForm() {

    // Contexts

    const {loginUser} = useContext(AuthContext);


    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    const { username, password } = loginForm;

    const onChangeLoginForm = event => {
        setLoginForm(
            { ...loginForm, [event.target.name]: event.target.value }
        )
    };

    const login = async event => {
        event.preventDefault();

        try {
            const loginData = await loginUser(loginForm);
            console.log(loginData);
        } catch (error) {
            console.log(error);   
        }
    }

    return (
        <>
            <form onSubmit={login}>
                <Formunit label='Username' type='text' name='username' value={LoginForm.username} onChange={onChangeLoginForm} />
                <br></br>
                <Formunit label='Password' type='password' name='password' value={LoginForm.password} onChange={onChangeLoginForm} />
                <br></br>
                <Button nameOfButton='Login' />
                <br></br>
                <p>
                    Don't have an account?
                    <Link to='/register'>
                        <Button nameOfButton='Register' />
                    </Link>
                </p>
            </form>
        </>
    );
}

export default LoginForm;