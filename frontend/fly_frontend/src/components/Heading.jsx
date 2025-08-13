import flightlogo from '../assets/flight.png';
function Heading() {
    return (
        <header className='heading'>
           <label htmlFor="\"> 
                <img src={flightlogo} alt="Flight Logo" />
                <b>FlyHappily</b>
            </label>
        </header>
    );
}

export default Heading;
