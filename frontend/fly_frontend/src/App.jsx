
import FlightSearch from './components/FlightSearch';
import Footer from './components/Footer';
import Maincomp from './components/Maincomp';
import Navbar from './components/Navbar';
import Secondcomp from './components/Secondcomp';

function App() {
  return (
    <div className="mainapp">
        <Navbar />
        <Maincomp />
        <Secondcomp />
        <FlightSearch />
        <Footer />
    </div>
  );
}

export default App;





