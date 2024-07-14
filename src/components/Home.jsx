// Home.js
import React from 'react';
import r1 from "../assets/World_Environment.png";
import r2 from "../assets/t2.png";
import r3 from "../assets/t4.png";
import r4 from "../assets/t5.png";
import r5 from "../assets/t6.png";
import RecyclerList from '../carosel/RecyclerList';//recylerList
// import RecyclerList from '../carosel/RecyclerList';
import "../style/Home.scss";

const Home = () => {
  return (
    <div>
   <div className='home1'>
    <main>
        {/* <h1 className='s'>Recycle India</h1> */}
        <h1>Welcome to Recycle India </h1>
        <p>
        Our mission is to promote sustainable living by encouraging recycling
          practices and reducing environmental impact. 
        </p>
    </main>
   </div>
   <div>{/*recler list from here */}
<RecyclerList></RecyclerList>

   </div>{/*to here */}
   <div className='home2'>
    <h1>Top5 Reasons To Recycle</h1>
    {/* <p style="border-bottom:3px solid #fff;width: 15%;"></p> */}
    <div className='HoneInside'>{/*here  */}
      <div>
      <img src={r1} alt="graphics"/>
      <div>
        <b>Enviroment Protect</b>
        <p>Saves Environment from pollution and reduces greenhouse gases. Shields wildlife, forests and other natural resources.</p>
        </div>
      </div>
      <div>
      <img src={r2} alt="graphics"/>
      <div>
    <b>Preserves natural recourses</b>
    <p>We need to take responsibility of saving resources for our future generation. Recycling Helps in conversation of water, forests and mineral resources</p>
 
    </div>
      </div>
      <div>
      <img src={r3} alt="graphics"/>
      <div>
        <b>Reduces Landfill space.</b>
        <p>Extending space for landfills is reduced to large extent with the help of recycle treatment.</p>
        </div>
      </div>
      <div>
      <img src={r4} alt="graphics"/>
       <div> <b>Creates Jobs.</b>
        <p>The idea of recycling creates employment for both recycling industries and manufacturing units</p>
        </div>
      </div>
      <div>
      <img src={r5} alt="graphics"/>
      <div>        <b>Saves Energy</b>
        <p>We save energy as we recycle and reuse materials, by eradicating the necessity of extracting and processing raw materials & finished goods.</p></div>

      </div>

    </div>{/*to here */}
      </div>
      
   </div>
  );
};

export default Home;
