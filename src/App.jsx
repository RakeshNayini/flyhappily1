import './App.css';
import Heading from './components/Heading';
import Maincomp from './components/Maincomp';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="mainapp">
      <Heading />
      <Maincomp />
      <Footer />
      <Login />
      <Register />
      
    </div>
  );
}

export default App;
