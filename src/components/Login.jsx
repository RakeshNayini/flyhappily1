import { useState,useRef,useEffect } from "react";
import '../css/Login.css';
 function Login() {
     let emailRef = useRef();
     let passwordRef = useRef();
     let rememberRef = useRef();
     let [email, setEmail] = useState('');
     let [loginMessage, setLoginMessage] = useState('');

  useEffect(() => {
    let savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  let handleLogin = (e) => {
    e.preventDefault();
    let enteredEmail = emailRef.current.value;
    let enteredPassword = passwordRef.current.value;
    let remember = rememberRef.current.checked;
    

    console.log('Login Attempt:', {git init

      email: enteredEmail,
      password: enteredPassword,
      remember,
    });

    if (remember) {
      localStorage.setItem('rememberedEmail', enteredEmail);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    // Add your login logic here
    if (enteredEmail && enteredPassword) {
    setLoginMessage('Login successful!');
  } else {
    setLoginMessage('Please enter both email and password.');
  }

  };

  let handleForgotPassword = () => {
    let enteredEmail = emailRef.current.value;
    if (!enteredEmail) {
      alert('Please enter your email to receive a reset link.');
    } else {
      alert(`Password reset link sent to ${enteredEmail}`);
      // You can integrate backend logic here
    }
  };

  let  handleSignupRedirect = () => {
    alert('Redirecting to signup page...');
    // You can navigate to your signup route here
  };

  return (
    <div  className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="">
            Enter Your Email
           <input type="email" ref={emailRef} />
        </label><br/><br/>
        <label htmlFor="">
           Confirm a Password
           <input type="password"  ref={passwordRef} />
        </label><br/><br/>
        <div >
          <label htmlFor="">
            <input type="checkbox" ref={rememberRef} /> Remember Me
          </label>&nbsp;&nbsp;<span  onClick={handleForgotPassword}> Forgot Password?</span>
        </div>
       <button type="submit">Login</button>
      </form>
        <p>Don't have an account?{' '} <span onClick={handleSignupRedirect}>Signup now</span></p>
        <p>{loginMessage}</p>
    </div>
  );
}
export default Login;