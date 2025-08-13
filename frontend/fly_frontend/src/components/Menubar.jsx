import userlogo from '../assets/user.png';
function Menubar(){
    return(
        <aside className="menubar">
            <ul className="menu">
                <li>Home</li>
                <li>Flights</li>
                <li>MyBookings</li>
                <li>Support</li>
            </ul>
                <button className='signin'><img src={userlogo} alt="user logo" />Sign In</button>
                <button className='register'>Register</button>
        </aside>
    );
}
export default Menubar;