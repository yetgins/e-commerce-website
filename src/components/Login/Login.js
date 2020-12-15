import React,{useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../../firebase/firebase';
import Button from '../Button/Button';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t31.0-8/14707935_1788829271388556_232388326914306008_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=4PMERTtBB-4AX9M1taw&_nc_ht=scontent.fsaw2-1.fna&oh=5201bc0bc2ea6a88867d9c4916ca60e3&oe=5FFD8D19"
                    //src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt=''
                />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <Button type='submit' text='Sign In' onClick={signIn} height='30px' width='100%'/>
                </form>

                <p>
                    By signing-in you agree to the YETGINS Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Button text='Create your ShipShop Account' onClick={register} height='30px' width='100%' background='white' />
            </div>
        </div>
    )
}

export default Login
