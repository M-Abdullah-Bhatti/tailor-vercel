import React from 'react'
import { Carousel } from "react-bootstrap"
import photo1 from "../../assets/measureslide.png"
// import photo2 from "../assets/testimage2.png"
// import photo3 from "../assets/testimage3.jpg"
import './style.css';


function CarouselTest() {
    return (
        <div>
            <Carousel fade={true} className="carousel" controls={true}>
                <Carousel.Item interval={4000}>
                        <div className='carousel'>
                    <img
                        className="d-block w-100 carSlide"

                        src={photo1}
                        alt="First slide"
                    />
                        </div>
                    <Carousel.Caption className='carSlideText carousel-caption'>
                        <h3 className='slideTitle'>Neck</h3>
                        <p className='slideText'>You can measure your neck by the latest shirt you are wearing ..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carSlideText carousel-caption'>
                        <h3 className='slideTitle'>Shoulders</h3>
                        <p className='slideText'>Measure your shoulders by using a inch tape from bone to bone</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carSlideText carousel-caption'>
                        <h3 className='slideTitle'>Biceps</h3>
                        <p className='slideText'>They are the easiest to measure , keep the tape in line with your chest</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption className='carSlideTextLg carousel-caption'>
                        <h3 className='slideTitle'>Arms</h3>
                        <p className='slideText'>Just below the area of elbows , repeat this process atleast 2 times.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption className='carSlideText carousel-caption'>
                        <h3 className='slideTitle'>Wrists</h3>
                        <p className='slideText'>Wrap the tape measure around your wrist, just above your hands.</p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Sixth slide"
                    />
                    <Carousel.Caption className='carSlideTextMd carousel-caption'>
                        <h3 className='slideTitle'>Torso Length</h3>
                        <p className='slideText'>Relax your arms. Measure from the highest point of your shoulder at the base of your neck straight down your torso—in line with your first thumb joint.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Seventh slide"
                    />
                    <Carousel.Caption className='carSlideTextMd carousel-caption'>
                        <h3 className='slideTitle'>Chest</h3>
                        <p className='slideText'>Measure around your chest beneath your armpits, and in line with your nipples. Ensure the tape measure is level all the way around. Keep your arms relaxed at your sides.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Ninth slide"
                    />
                    <Carousel.Caption className='carSlideTextLg carousel-caption'>
                        <h3 className='slideTitle'>Waist</h3>
                        <p className='slideText'>Place your finger along the  belly button and measure the waist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Tenth slide"
                    />
                    <Carousel.Caption className='carSlideText carousel-caption'>
                        <h3 className='slideTitle'>Hips</h3>
                        <p className='slideText'>Measure the hips by keeping the tape on the widest points</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Eleventh slide"
                    />
                    <Carousel.Caption className='carSlideTextLg carousel-caption'>
                        <h3 className='slideTitle'>Legs</h3>
                        <p className='slideText'>Measure your legs by sitting down in a comforted position.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Twelfth slide"
                    />
                    <Carousel.Caption className='carSlideTextXl carousel-caption'>
                        <h3 className='slideTitle'>Crotch</h3>
                        <p className='slideText'>Let another person measure your crotch , which is going to be much easier</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={11000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Thirteenth slide"
                    />
                    <Carousel.Caption className='carSlideText carousel-caption'>
                        <h3 className='slideTitle'>Thighs</h3>
                        <p className='slideText'>Wrap the tape measure around your thigh just below the crotch. Ensure the  process is repeated for 2 times.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 carSlide"
                        src={photo1}
                        alt="Fourteenth slide"
                    />
                    <Carousel.Caption className='carSlideText carousel-caption'>
                        <h3 className='slideTitle'>Knees</h3>
                        <p className='slideText'>Wrap the tape measure around your knee cap at the center of the knee</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel> 
        </div>
    )
}

export default CarouselTest