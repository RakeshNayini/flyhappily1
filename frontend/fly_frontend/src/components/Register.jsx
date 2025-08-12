import '../css/Register.css';
function Register(){
 return(
    <div className="register">
        <h1>Registeration</h1>
        <label htmlFor="">
            Enter your Name
            <input type="text" />
        </label><br/><br/>
        <label htmlFor="">
            Enter your Email
            <input type="email" />
        </label><br/><br/>
        <label htmlFor="">
           Create a password
           <input type="password"/>
        </label><br/><br/>
        <label htmlFor=""> 
            Confirm a password
            <input type="Confirm password" />
        </label><br/><br/>
        <label htmlFor="">
            <input type="checkbox" />I accept all terms&conditions
        </label><br/><br/>
        <button>Register Now</button><br/><br/>
        <p>Already have an account?<button>Login Now</button></p>
    </div>
 );
}
export default Register;