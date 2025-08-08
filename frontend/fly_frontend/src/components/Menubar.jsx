import userlogo from '../assets/user.png';
import '../css/Menubar.css';
function Menubar(){
    return(
        <aside className="menubar">
            <ul className="menu">
                <li>Home</li>
                <li>Flights</li>
                <li>MyBookings</li>
                <li>Support</li>
            </ul>
            <ul className='actions'>
                <li><button><img src={userlogo} alt="user logo" />Signin</button></li>
                <li><button>Register</button></li>
            </ul>
        </aside>
    );
}
export default Menubar;