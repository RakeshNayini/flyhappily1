import './App.css';
import Heading from './components/Heading';
import Maincomp from './components/Maincomp';
import Footer from './components/Footer';
import Menubar from './components/Menubar';

function App() {
  return (
    <div className="mainapp">
      <Heading />
      <Menubar />
      <Maincomp />
      <Footer />
    </div>
  );
}

export default App;
