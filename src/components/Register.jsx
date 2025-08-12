import { useRef, useState } from 'react';
import '../css/Register.css';
function Register() {
    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    let confirmRef = useRef();
    let termRef=useRef();
    let [error, setError] = useState('');

  let handleRegister = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let confirm = confirmRef.current.value;
    let checkbox=termRef.current.value;
     
  // Basic validation
  if (!name || !email || !password || !confirm) {
    setError('All fields are required.');
    return;
  }

  if (password !== confirm) {
    setError('Passwords do not match.');
    return;
  }

  if (!checkbox) {
    setError('You must accept the terms and conditions.');
    return;
  }
   // If all validations pass
  setError('');
  alert('Registration successful!');
  console.log('Register:', { name, email, password });
  }

  // Add backend registration logic here

   let handleLoginRedirect = () => {
    alert('Redirecting to login page...');
    // You can navigate to your login route here
  };

  return (
    <div className="register">
      <h2>Registeration</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="">
            Enter Your Name
            <input type="text" ref={nameRef} />
        </label><br/><br/>
        <label htmlFor="">
            Enter Your Email
            <input type="email" ref={emailRef} />
        </label><br/><br/>
        <label htmlFor="">
            Create a Password
            <input type="password"  ref={passwordRef} />
        </label><br/><br/>
        <label htmlFor="">
            Create a Confirm Password
            <input type="password" ref={confirmRef} />
        </label><br/><br/>
         <label htmlFor="">
            <input type="checkbox" ref={termRef} /> I accept all terms & conditions
          </label><br/><br/>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?{' '}<span onClick={handleLoginRedirect}>Login now</span> </p>
      <p>{Error}</p>
    </div>
  );
}
export default Register;