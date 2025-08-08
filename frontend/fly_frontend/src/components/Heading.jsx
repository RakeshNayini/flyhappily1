import flightlogo from '../assets/flight.png';
import Menubar from './Menubar';
import '../css/Heading.css'
function Heading() {
    return (
        <header className='heading'>
            <img src={flightlogo} alt="Flight Logo" />
            <b>FlyHappily</b>
            <Menubar />
        </header>
    );
}

export default Heading;
