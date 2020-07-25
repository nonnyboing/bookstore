import React, {useState} from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [key, setKey] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        name === 'email' ? setUsername(value) : setKey(value);
    }
    
    const handleLogin = () => {
        const name = String(username);
        const pass = String(key);
        
        const user = {
            email: name,
            password: pass
        }
        console.log(user);
        
        axios.post('/auth/login', { params: {email: name, password: pass}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        
        //window.location.reload(true);

    }

    return (
        <div className='w-50 container text-primary border border-primary rounded mt-5' style={{backgroundColor: "#fceed1"}}>
            <form className='was-validated'>
                <p className='text-center h6 mt-4 mb-4 font-weight-bold'><u>Enter your Login Details</u></p>
                <div className='form-group'>
                    <label for='validationInput'>Email</label>
                    <input type='email' id='validationInput' className='form-control is-invalid' placeholder='Enter username' name='email' onChange={handleChange} required></input>
                </div>
                <div className='form-group'>
                    <label for='password'>Password</label>
                    <input type='password' id='password' className='form-control is-invalid' placeholder='Enter Password' name='password' onChange={handleChange} required></input>
                </div>
                <div className='form-group form-check'>
                    <input type='checkbox' id='checkboxx' className='form-check-input'></input>
                    <label for='checkboxx'>keep me signed in</label>
                </div>
                <div className='form-group text-center'>
                    <button type='button' id='login' className='btn btn-primary btn-lg' onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;