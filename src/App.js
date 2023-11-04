import Topbar from './components/topbar/TopBar'
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Pricing from './pages/pricing/Pricing'
import Find_Job from './components/find_jobs'
import JobDescription from './components/job_description'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import JobPost from './pages/jobPost/JobPost';

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/find-job" element={<Find_Job />} />
          <Route path="/job/:jobId" element={<JobDescription />} />
           <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/about-us" component={AboutUs} /> */}
          {/* <Route path="/faq" component={FAQ} />  */}
            <Route path="/jobpost" element={<JobPost />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;