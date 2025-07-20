import {useNavigate} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import RollText from '../custom_blocks/SplitText/RollText';
import ClickSpark from '../blocks/Animations/ClickSpark/ClickSpark'

import Silk from '../blocks/Backgrounds/Silk/Silk'
import ObsUrl from '../assets/obs_ims.webp'
import UraVidUrl from '../assets/uravid.mp4'
import VenusUrl from '../assets/venus_ims.webp'
import MoonsUrl from '../assets/moons.webp'

export default function Astro() {
    
    RollText();

    const navigate=useNavigate() 
    const handleClick = () => {
        navigate('/');
        }
    return (
        <div className="static">
            <div className="fixed inset-0 z-0 h-dvh w-dvw">
                <Silk
                  speed={3}
                  scale={1}
                  color= "#2F5D70" // "#7B7481"
                  noiseIntensity={1.5}
                  rotation={135}
                />
            </div>

            <div className='relative lg:sticky top-2 text-white text-left mt-6 ml-1 z-20'> 
                 <button className="rounded-md !bg-transparent border-1" onClick={handleClick}> 
                     <FaHome size={25}/> 
                 </button> 
             </div>

            <div className="relative z-10 items-start justify-center h-full w-full">
                <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}> {  
                <div className="flex flex-col p-4 sm:p-10 lg:p-20 gap-8">
                    <div className='max-w-7xl'>
                        <h1 className="text-6xl mb-2 text-white text-center"> Astronomy </h1>
                        <div className="flex bg-none rounded-xl items-center justify-left">
                            <p className="rolltext text-xl lg:text-2xl text-white text-left sm:text-justify">  
                            I use radio telescope arrays located around the world to observe the
                            planets and their moons. 
                            <br></br>
                            These observations reveal the hidden properties of these bodies at depths below
                             those seen by infrared and visible telescopes like Hubble and JWST. 
                            </p> 
                        </div> 
                    </div>

                    <div className='max-w-7xl'>
                        <img className="object-scale-down rounded-2xl border-1 border-white" src={ObsUrl} alt="Global radio observatories"/>

                    </div>
                    <div className='flex flex-col lg:flex-row border-1 bg-black
                                    rounded-xl max-w-7xl items-left lg:items-center
                                    '>
                        <div>
                            <h1 className="text-2xl lg:text-4xl font-bold mb-2 mx-6 my-2 text-left">Uranus</h1>
                            <p className='rolltext text-lg lg:text-xl text-left sm:text-justify mx-6 my-2'> 
                                I'm currently working on analyzing of 40 years worth of 
                                Very Large Array observations of Uranus, our nearest ice giant planet. This is around half of of the time it takes 
                                for the planet to orbit the Sun. Uranus has high axial tilt, and as a result, its poles can be hidden from view for many years. 
                                Uranus is now approaching polar solstice, where the planet's north pole will be pointed towards Earth.
                                <br></br>
                                <br></br>
                                The goal of such a long-baseline observing campaign is to study seasonality in the planet's atmosphere. As time goes on, 
                                the VLA images have gotten better and better, and in the past few years, our team has even been able to resolve and study the 
                                <a href="https://www.jpl.nasa.gov/news/nasa-scientists-make-first-observation-of-a-polar-cyclone-on-uranus/"> north polar cyclone. </a> 
                            </p>        
                        </div>

                        <div className="flex flex-col my-2 mx-2 gap-4 items-center">
                            <video className='w-auto max-w-sm min-w-2xs rounded-2xl' autoPlay muted playsInline loop >
                                <source src={UraVidUrl} type="video/mp4" alt='Uranus observations'></source>
                            </video>
                            <p> Uranus, Very Large Array, 1981-2021 </p>
                        </div>
                    </div> 

                    <div className='flex flex-col bg-black border-1 rounded-xl max-w-7xl items-left lg:items-center'>
                        <h1 className="text-2xl lg:text-4xl font-bold mb-2  mx-6 my-6 text-left text-black">The Surface of Venus</h1>
                        <div className='w-auto max-w-5xl min-w-2xs mx-6'> 
                            <img className= "object-scale-down rounded-2xl" src={VenusUrl} alt="Venus observations"/>
                        </div>
                        <p className='rolltext text-lg lg:text-xl text-left sm:text-justify mx-6 my-2'> 
                            Another ongoing project is the analysis of long-wavelength Very Large Array and Giant Meter Wavelength Telescope observations which can see through 
                            Venus' dense atmosphere. 
                            <br></br>
                            <br></br>
                            10-20 cm observations can achieve quite high resolution, almost as good as the data recorded by 
                            the Magellan spacecraft! While Magellan observed Venus' surface emission intensity, it did not measure its polarization. 
                            This is where the VLA data are quite helpful.  
                            <br></br>
                            <br></br>
                            Moving to meter-wavelengths, Venus gets much harder to observe due to confusion from strong background radio sources, but the VLA and GMRT can still measure the disk-integrated brightness quite well.
                            These observations have found that Venus' sub-surface emission intensity 
                            is much weaker than we would expect, suggesting some exotic sub-surface structure. 
                        </p>        
                    </div> 

                    <div className='flex flex-col rounded-xl max-w-7xl items-left lg:items-center bg-black border-1'>
                        <h1 className="text-2xl lg:text-4xl font-bold mb-2 mx-6 my-6 text-left text-black">Moons of Earth and Jupiter</h1>
                        <div className='w-auto max-w-5xl min-w-2xs mx-6'> 
                            <img className= "object-scale-down rounded-2xl" src={MoonsUrl} alt="Moon observations"/>
                        </div>

                        <p className='rolltext text-lg lg:text-xl text-left sm:text-justify mx-6 my-2'> 
                            In addition to observing planets, I am also interested in observations of airless bodies like the Moon. 
                            The observations above were obtained by the MeerKAT array as part of an engineering project to determine the 
                            polarization rotation angles of calibrator quasars. They are perhaps the most sensitive radio images of the Moon 
                            that have ever been made (most of the credit for the data processing goes to 
                            Benjamin Hugo from the SARAO). The bright spot in the center of the 40 cm image is actually the sum 
                            of reflected radio signals broadcast from Earth! 
                            <br></br>
                            <br></br>
                            I've also worked on processing and imaging observations of Jupiter's moons Ganymede and Callisto. Unlike the 
                            moon or Venus, these objects show surprisingly little surface polarization, which suggests the presence 
                            of small scattering inclusions in an icy regolith. 

                        </p>        
                    </div> 
                </div>
            } </ClickSpark>
            </div>

        </div>
    ); 
} 


