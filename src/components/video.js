
import { useLocation } from 'react-router-dom'
import React from "react";
import { useState } from 'react';


function Video () {
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  React.useEffect(()=>{
console.log("Location From Cards", location);
  },[])
  // const { url } = location.state;
  // console.log(props);
 
  return (
    <div className="d-flex">
      {loading && <div className="spinner" />}
      <iframe
        onLoad={() => setLoading(false)}
        src={location.state.from}
        width="80%"
        height="300"
        frameborder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen
      ></iframe>
      <a href="https://t.adtng2.com/246207/3785/0?bo=Array&target=banners&pyt=multi&file_id=334491&po=6456" target={"_blank"}>
       <img src="https://i.ibb.co/GtDzPPf/75defo.gif" alt="75defo" border="0"/>
     
       <img src="https://i.ibb.co/5Lq9B9K/75dfwo.gif" alt="75dfwo" border="0"/>
     
<img src="https://i.ibb.co/hMtRLzF/75dg78.gif" alt="75dg78" border="0"/>
     
       <img src="https://i.ibb.co/wBG7hfJ/gif1.gif" alt="gif1" border="0"/>
      </a>
     
    </div>
  );
}
export default Video; 

// import React from 'react'

// function video(props) {
//   console.log(props);
//   return (
//     <div>
//       <iframe
//         className=""
//         src={props.videoLinks}
//         width="100%"
//         height="500"
//         frameborder="0"
//         webkitallowfullscreen="true"
//         mozallowfullscreen="true"
       
//       ></iframe>
//     </div>
//   );
// }

// export default video