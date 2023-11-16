import React from 'react';
import Hero from "../Pages/Hero";
import Partners from "../Pages/Partners";
import Content from "../Pages/Content";
import Products from "../Pages/Products";
import Choose from "../Pages/Choose";
import Started from "../Pages/Started";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Rotate } from "react-awesome-reveal";
import "../Styles/Home.css";



const Home = () => {
  return (
    <div ClassName="Home">
      
      <Hero/>
{/* Apply animations only on screens wider than 601px using media query */}
      <Fade>
      <Partners className="animated-element" />
      </Fade>

      <Zoom>
      <Content className="animated-element"/>
      </Zoom>

      <Bounce>
      <Products className="animated-element"/>
      </Bounce>

      <Fade>
      <Choose className="animated-element"/>
      </Fade>

    <Rotate>
      <Started className="animated-element"/>
     </Rotate>
    </div>
  )
}

export default Home
