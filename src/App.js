import Topbar from './components/topbar/TopBar'
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Pricing from './pages/pricing/Pricing'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
           <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/about-us" component={AboutUs} /> */}
          {/* <Route path="/faq" component={FAQ} />  */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;