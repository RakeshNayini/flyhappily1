import '../css/Login.css';
function Login(){
    return(
        <div className="login">
         <h1>Login</h1>
         <label htmlFor="">
            Enter your Email
            <input type="email"/>
         </label><br/><br/>
         <label htmlFor="">
            Enter your Password
            <input type="password"/>
         </label><br/><br/>
         <label htmlFor="">
            <input type="checkbox" />Remember me
         </label>&nbsp;<button>Forgot Password?</button><br/><br/>
         <button>Login Now</button><br/><br/>
         <p>Don't have an account?<button>Signup Now</button></p>
        </div>
     );
}
export default Login;