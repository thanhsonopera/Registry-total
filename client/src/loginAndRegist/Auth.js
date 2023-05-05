import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import './Auth.css'

const Auth = ({ authRoute }) => {
    return (
        <>
            <div className="cover">
                <div className="main">
                    <div className="logoOfPage">
                        <h1>Registry<br></br>total</h1>
                    </div>

                    <div className="form">
                        <h2>Vehicles Registration system</h2>
                        <br></br>
                        {authRoute === "login" ? <LoginForm /> : <RegisterForm />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Auth;