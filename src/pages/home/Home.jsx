import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Middle from '../../components/middle/Middle'
import Job from '../../components/job/Job'
import Jobs from '../../components/jobs/Jobs'
import Login from '../../tempelates/Login/Login'

export default function Home() {
  return (
    <>
      <Header />
       <Middle />
       <div className="jb">
          <h2 className='text'>Featured Jobs</h2>
       {/* <Job />
       <Job />
       <Job />
       <Job />
       <Job />
       <Job /> */}
       <Jobs />
  {/* <Login /> */}
       </div>
       
      {/* <Footer /> */}
    </>
  )
}