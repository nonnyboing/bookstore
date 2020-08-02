import React, {useState} from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [key, setKey] = useState('');
    const [msg, setMsg] = useState('');
    const [token, setToken] = useState('');

    //const history = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMsg('');

        name === 'email' ? setUsername(value) : setKey(value);
    }
    
    const handleLogin = () => {
        const name = username;
        const pass = key;
        
        const user = {
            email: name,
            password: pass
        }

        console.log(user);
        
        axios.post('/auth/login', user)
            .then((res) => {
                console.log(res.data);
                const token = res.data.token;
                setToken(token);
                //history.push("/books");
            })
            .catch((error) => {
                console.log(error);
                setMsg(error.response.data);
                console.log(msg);
            });
        
        //window.location.reload(true);

    }

    const renderRedirect = () => {
        if (token) {
          return <Redirect to={{
              pathname: '/books',
              state: {auth: token} 
            }}
          />
        }
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
            <div className='text-center text-danger font-weight-bold'>
                <p> {msg.error} </p>
            </div>
            {renderRedirect()}
            
        </div>
    )
}

export default Login;