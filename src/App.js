import Topbar from './components/topbar/TopBar'
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
<Topbar />
     <Home />
    <Footer/>
    {/* <SingleJob /> */}
    </div>
  );
}

export default App;