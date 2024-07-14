import React, { useState } from "react";
import "../style/about.scss";
// import "../style/About.scss";//no need oof css file
import {Carousel} from "react-responsive-carousel";//carousel it is inbuild  function of react
import img1 from "../assets/l1.jpg";
import img2 from "../assets/el2.png";
import img3 from "../assets/save_enviroment.jpg";
import v1 from "../video/v1.mp4";

import  "react-responsive-carousel/lib/styles/carousel.min.css";//inbuild css 

const About =()=>{

    
    const videosArr = [
        v1,
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
      ];
   /*video title  */   const videoTitle=['Sort for a sustainable future','Wild life','Sky and clouds view','Enjoy peacfull enviroment','Forest enviroment','Enjoy sea enviroment','Wave of sea']

/*video description */ const videoDescription=["Dubai is a vibrant and modern city known for its stunning skyline, luxury shopping, and futuristic architecture. Home to iconic landmarks such as the Burj Khalifa, the world's tallest building, and the Palm Jumeirah, an artificial archipelago, Dubai seamlessly blends tradition with innovation.","Wild animal life is characterized by a diverse array of species, each adapted to its environment through evolutionary processes. In the wild, animals employ various survival strategies, including physical adaptations, behavioral patterns, and unique ecological roles.","The view of the clouds and sky is a captivating and ever-changing spectacle that can evoke a sense of wonder and tranquility. The sky serves as a canvas for nature's artistic expressions, offering a myriad of colors, patterns, and textures","Enjoying a peaceful environment is a serene escape from the hustle and bustle of everyday life. Surrounded by nature's tranquility, one finds solace in the gentle rustle of leaves, the melodious chirping of birds, and the soothing flow of a nearby stream","A forest view is a captivating tableau of nature's grandeur. Towering trees create a lush canopy, dappling sunlight on the forest floor. The air is filled with the earthy scent of moss and the gentle murmur of rustling leaves","Enjoying the sea environment is a sensory symphony of relaxation. The rhythmic sound of waves kissing the shore creates a soothing soundtrack, accompanied by the gentle caress of sea breeze.","The sea view captivates with its mesmerizing waves — a rhythmic dance of energy and serenity. Each wave rises and falls in graceful patterns, reflecting the sunlight in a shimmering display. "]

const[videoSrc ,setVideoSrc]=useState(videosArr[0])///acceseing first video from videoarr collection

const[videoTitles,setVideoTitles]=useState(videoTitle[0])//use for video title or title

const [videoDes,setVideoDes]=useState(videoDescription[0])//use for video description to iterarte the video desc

    return(<>
        <div className="About"> 
        <Carousel
        infiniteLoop//it run infinite
        autoPlay//it changes auto matic
        showStatus={false}//it remove the status of 1of2
        showArrows={false}//arrow of changes will remove
        showThumbs={false}//which indicate the current display of  image in small box bottom left
        interval={3000} 
        showIndicators={false}//it show the how many slide

        >
            <div>
                <img src={img1} alt="Item1" />
                <b className="legend">Keep calm and recycle on!...</b>{/*legend inbuild fucntion */}
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <b className="legend"> If You Can't Resuse It,<br></br>Refuse It!...</b>
            </div>
            <div>
                <img src={img3} alt="Item3" />
                <b className="legend"> Be a part of the solution,not the pollution!...</b>
            </div>
        </Carousel>
        </div>
        <div className='about2'>
            <div className='ab_in1'>

            <div id='aSkills'>{/*status bar..from here */}
                <div className='Skill_Bar'>
                    <div id="plastic">{/*html =plastic */}
                        <span className='skill_area'>Plastic waste</span>
                        <span className='percentage'>85%</span>
                    </div>
                </div>

                <div className='Skill_Bar'>
                    <div id="wast_p">{/*css =WASTAGE OF PAPER */}
                        <span className='skill_area'>WASTAGE OF PAPER</span>
                        <span className='percentage'>78%</span>
                    </div>
                </div>
                <div className='Skill_Bar'>
                    <div id="dump_wast">{/*bs =DUMPED E-WASTE */}
                        <span className='skill_area'>DUMPED E-WASTE</span>
                        <span className='percentage'>72%</span>
                    </div>
                </div>

                <div className='Skill_Bar'>
                    <div id="orga_wast">{/*php =ORGANIC AND NATURAL WASTE*/}
                        <span className='skill_area'>ORGANIC AND NATURAL WASTE</span>
                        <span className='percentage'>80%</span>
                    </div>
                </div>



            </div>{/*to here */}
            </div>

            
            <div className='ab_in2'>
                <h2>Why Recycle ?</h2>
                <p className='p1'>It's never late to show your concern.</p>
                <p className='p2'>Recycling significantly reduces the need for landfills. The world has changed very much in the past century and the amount of waste we produce as humans is rapidly increasing. The human population has grown, and consumers are now making more purchases than before. Changes in lifestyle practices, such as eating fast food and opting for disposable items, means more waste is now being created.</p>

            </div>
            
        </div>
        <div className="about3">

    <div className="in_ab1" >
        < video controls controlsList="nodownload"
        src={videoSrc}//all video show it store in VideoArr
        />
        <div className="in_in_ab1">
            <h3>
                {videoTitles}{/*video heading accessesing from array using usestate hook */}
            </h3>
            <p>
                {videoDes} {/*video description */}
            </p>
        </div>
    </div>
    <div className="in_ab2">
            {
                videosArr.map((item,index)=>(
                    // /NOTE:IMPORTANT TO HANDLE MORE THAN TWO USESTATE WITH SINGLE STATE
                    <button className="b1"
                    onClick={()=>{
                        setVideoSrc(item);//it accessing the item of videoArr
                        setVideoTitles(videoTitle[index]);//from here i am accessing videoTitles useState element
                        setVideoDes(videoDescription[index])//accessing the video description 

                    }}
                    >
                        {(videoTitle[index])} {/*{index +1}now it's index start from 1 instead of 0.......now only we keep the button as title name */}


                    </button>

                ))
            }
    </div>

</div>

        </>
    )
};
export default About;
