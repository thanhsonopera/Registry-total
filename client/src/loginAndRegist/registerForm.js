import Formunit from "../components/formUnit/formUnit";
import {Link} from 'react-router-dom';
import './loginAndRegister.css';
import Button from "../components/button/button";

export default function RegisterForm() {
    return (
        <>
            <form>
                <Formunit label='Full name' type='text' />
                <br></br>
                <Formunit label='Username' type='text' />
                <br></br>
                <Formunit label='Password' type='password' />
                <br></br>
                <Formunit label='Repeat password' type='password' />
                <br></br>
                <Button nameOfButton='Register'/>
                <br></br>
                <p>
                    Already have an account?
                    <Link to='/login'>
                        <Button nameOfButton='Login'/>
                    </Link>
                </p>
            </form>
        </>
    );
}