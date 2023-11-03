import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Middle from '../../components/middle/Middle'
import Job from '../../components/job/Job'

export default function Home() {
  return (
    <>
      <Header />
       <Middle />
       <div className="jb">
          <h2 className='text'>Featured Jobs</h2>
       <Job />
       <Job />
       <Job />
       <Job />
       <Job />
       <Job />
       <Job />
       
       </div>
       
      {/* <Footer /> */}
    </>
  )
}