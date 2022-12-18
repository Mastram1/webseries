
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
    <div className="">
      {loading && <div className="spinner"/>}
      <iframe
        onLoad={() => setLoading(false)}
        src={location.state.from}
        width="100%"
        height="600"
        frameborder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowfullscreen
      ></iframe>
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