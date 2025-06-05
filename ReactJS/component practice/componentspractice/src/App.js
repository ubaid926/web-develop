import './App.css';
import Navbar from './components/navbar';
import firstimage from './assets/images/Hero section.png'
import Secondsecpara from './components/second';
import secondsecimg1 from './assets/images/Lighting design icon.png'
import secondsecimg2 from './assets/images/Interior design icon.png'
import secondsecim3 from './assets/images/Outdoor design icon.png'
import thirdsecimg from './assets/images/Mask group.png'
import Third from './components/third';
import Fourth from './components/fourth';
import { useState } from 'react';

function App() {
  // const [user,setuser]=useState("")
  return (
    <div className="App">
      <div className="firstsection">
        <Navbar />
        <img className='firstimg' src={firstimage} alt="" />
      </div>
      <div className="secondsection">
        <h1 className="secondsechead">
          Our Services
        </h1>
        <div className='secondsecparadiv'>
          <div className="secondsecpara1">
            <img src={secondsecimg1} alt="" />
            <Secondsecpara title="Lighting Design" description="Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere" />
          </div>
          <div className="secondsecpara1">
            <img src={secondsecimg2} alt="" />
            <Secondsecpara title="Interior Design" description="From concept to completion, we oversee every detail to bring 
          your vision to life efficiently" /></div>
          <div className="secondsecpara1">
            <img src={secondsecim3} alt="" />
            <Secondsecpara title="Outdoor Design" description="Celebrate the changing seasons with our seasonal outdoor decor services" />
          </div>
        </div>
      </div>
      <div className="thirdsection">
        <img src={thirdsecimg} alt="" />
        <Third />
      </div>
      <Fourth />
    </div>
  );
}

export default App;
