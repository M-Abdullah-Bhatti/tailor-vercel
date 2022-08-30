import React from 'react'
import Banner from '../assets/home.jpg'
import '../assets/css/Home.css'
import FeatureCards from '../components/FeatureCard/FeatureCards.js';
import Feature1 from '../assets/Feature1.png'
import Feature2 from '../assets/Feature2.jpg'
import Feature3 from '../assets/Feature3.jpg'
import Feature4 from '../assets/Feature4.png'
import Measure from '../assets/measurePhoto.png'
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';
import { useNavigate } from "react-router-dom";

import CarouselTest from '../components/Carousel/Carousel.js';

const Home = () => {
  const [state, dispatch] = useStoreContext();
  let navigate = useNavigate();

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
    navigate("/products", { replace: true });
  };

  return (
    <div>
      <div className='logoContainer'>
        <img src={Banner} alt='banner' className='banner' />
        <p className='bannerText'>Bring Confidence To What You Wear</p>
      </div>
      <div className='featureSection row'>
        <p className='featureTitle'>
          {/* Featured Items */}
        </p>


        <div className='featureCard  col feature1'><FeatureCards title="Shirts"/>
          <img src={Feature1} alt='' className='feature' /> </div>
        <div className='featureCard col feature2'><FeatureCards title="Pants"/>
          <img src={Feature2} alt='' className='feature' /></div>
        <div className='featureCard col feature3'><FeatureCards title="Shoes"/>
          <img src={Feature3} alt='' className='feature' /></div>
        <div className='featureCard col feature4'><FeatureCards title="Sweaters"/>
          <img src={Feature4} alt='' className='feature' /></div>
      </div >

      <div className='shopSection'>
        <div className='CategorySection row'>
          <div className='categoryBtn col'>
            <button className='CategoryLink  '  onClick={() => {
              handleClick('6238d4f0e81c3e0022922a3b')
            }}>Shop Shirts</button>
          </div>
          <div className='categoryBtn col'>
            <button className='CategoryLink  ' onClick={() => {
              handleClick('6238d4f0e81c3e0022922a3d')
            }}>Shop Slacks</button>
          </div>
          <div className='categoryBtn col'>
            <button className='CategoryLink  ' onClick={() => {
              handleClick('6238d4f0e81c3e0022922a41')
            }}>Shop Accessories</button>
          </div>
        </div>
      </div>

      <div className='statementSection'>
        <p className='statementTitle'>We are leading the race for  fashion and design in 21st Century.</p>
        <p className='statementText'>
          Boss Tailor provides the best value for price in country. Shop at our digital outlets to get the best articles which are trending worldwide and are based on new fashion trends  . With our eco-friendly up cycling model through , we are actively fighting against climate  exchange.
        </p>
      </div>


      <div className='MeasurementSection row'>
        <div className='col measure1 measure'>
          <img src={Measure} alt="" className='measurePhoto' />
          <p className='measureTitle'>Guide To Measuring Yourself</p>
        </div>
        <div className='col measure2 measure'>
          <CarouselTest />
        </div>
      </div>


    </div>
  );
};

export default Home