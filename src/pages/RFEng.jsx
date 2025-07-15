import {useNavigate } from 'react-router-dom';
import Silk from '../blocks/Backgrounds/Silk/Silk'
import { FaHome } from "react-icons/fa";
import gsap from 'gsap'; 
import { SplitText, ScrollTrigger } from 'gsap/all'; 
import {useGSAP} from '@gsap/react'; 

import FPRUrl from '../assets/FPR.jpg'
import VenusUrl from '../assets/venus_from_nasa_pioneer_1_orbiter.jpg'
import ReflUrl from '../assets/reflection_measurement.jpg'
import TCDAUrl from '../assets/TCDA_blender_render.webp'
import VivUrl from '../assets/array_layout.jpg'

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger); 

export default function RFEng() {
    useGSAP(() => {
        
        const elements = document.querySelectorAll(".rolltext");

        elements.forEach((el) => {
        const split = new SplitText(el, { type: "words" });

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: el,
                start: "top 95%",
                toggleActions: "play none none none",
                },
            y: 10, 
            autoAlpha:0,
            stagger: {amount: 1.0},
            ease: 'expo'
        });       
    });    
});  
    const navigate=useNavigate() 
    const handleClick = () => {
        navigate('/dev_home');
        }
    

    return (

        <div className="static">
            <div className="fixed inset-0 z-0 h-dvh w-dvw">
                <Silk
                  speed={3}
                  scale={1}
                  color= "#780014" // "#7B7481"
                  noiseIntensity={1.5}
                  rotation={45}
                />
            </div>

            <div className='relative lg:sticky top-2 text-white text-left mt-6 ml-1 z-20'>
                <button className="rounded-md !border-3 !border-white" onClick={handleClick}>
                    <FaHome size={25}/>
                </button>
            </div>

            <div className="relative z-10 items-start justify-center h-full w-full">
                <div className="flex flex-col p-4 sm:p-6 lg:p-20 gap-8">
                    <div>
                        <h1 className="text-6xl mb-2 text-white text-left font-serif"> I am a Microwave Engineer</h1>
                        <div className="flex bg-none rounded-xl items-center justify-left max-w-7xl">
                            <p className="rolltext text-xl lg:text-2xl text-white text-left sm:text-justify italic">  
                            My interest in microwave engineering started during my coursework and Ph.D. thesis research at Georgia Tech in the Electrical and Computer Engineering 
                            Department. From this background and my professional experience, I have a solid foundation in the fundamentals of microwave systems engineering.  
                            <br></br> 
                            <br></br> 
                            Particular areas of expertise include material characterization 
                            and antenna design.  
                            </p> 
                        </div> 
                    </div>

                    <div>
                        <h1 className="text-4xl mb-2 text-white text-left font-bold"> Past projects include... </h1>
                        <div className='flex flex-col lg:flex-row bg-linear-to-r from-gray-50 to-gray-300 rounded-xl max-w-7xl items-left lg:items-center'>
                            <div className='my-6'>
                                <h1 className="text-2xl lg:text-4xl font-bold mb-2 underline decoration-1 mx-6 my-2 text-left text-black">
                                    Microwave Spectroscopy
                                </h1>
                                <h1 className="text-xl lg:text-2xl font-bold mb-2 text-left mx-6 my-2 text-black">
                                    The Venusian Atmosphere
                                </h1>
                                <p className='rolltext text-lg lg:text-xl text-left sm:text-justify mx-6 my-2 text-black'> 
                                My doctoral thesis focused on measuring of the microwave and millimeter-wavelength absorption spectra of sulfuric acid vapor under 
                                conditions that would be found in the cloud level-atmosphere of Venus.
                                <br></br>
                                <br></br>
                                For this, I designed and fabricated high quality-factor open resonator systems capable of making measurements 
                                at wavelengths between 1 cm and 2 mm. The system was housed in a glass pressure-vessel rated to 5 bars, which was in turn placed in an oven which operated up to 300 degrees C. 
                                <br></br>
                                <br></br>
                                To say this was a challenging measurement would be an understatement. Sulfuric acid is both fantastically corrosive and has a very low boiling point, 
                                which meant that it was necessary to use highly corrosion-resistant materials and to achieve very consistent thermal conditions within the pressure vessel. 
                                <br></br>
                                <br></br>
                                The results of these experiments were published in Icarus 
                                <br></br>
                                Akins, A.B., Steffes, P.G., 2019. The millimeter-wavelength absorption of sulfuric acid vapor measured under simulated Venus conditions. 
                                Icarus 326, 18–28. (<a href="https://doi.org/10.1016/j.icarus.2019.02.031">link</a>)
                                <br></br>
                                Akins, A.B., Steffes, P.G., 2020. Measurements of the Ka Band opacity of sulfuric acid vapor with application towards radio occultations of Venus. 
                                Icarus 351, 113928. (<a href="https://doi.org/10.1016/j.icarus.2020.113928">link</a>)
                                </p>    
                            
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-col my-2 mx-2 gap-4 items-center justify-center">
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className="object-scale-down rounded-2xl" src={VenusUrl} alt="Venus"/>
                                </div>
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className= "object-scale-down rounded-2xl" src={FPRUrl} alt="Semi-confocal resonator"/>
                                </div>
                            </div> 
                        </div>

                        <div className='flex flex-col lg:flex-row bg-linear-to-r from-gray-50 to-gray-300 rounded-xl max-w-7xl items-left lg:items-center mt-8'>
                            <div className='my-6'>
                                <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-black underline decoration-1 mx-6 my-2 text-left">Wideband Antenna Design</h1>
                                <p className='rolltext text-lg lg:text-xl text-left sm:text-justify mx-6 my-2 text-black'> My group at JPL is interested in designing 
                                    next-generation microwave radiometer instruments with low size, weight, and power for future missions to the outer solar system. One focus in this effort has been the design of 
                                    wideband array antenna systems. 
                                    <br></br>
                                    <br></br>
                                    I worked with teams of antenna engineers to design and simulate (using Ansys HFSS) different wideband antenna systems, including 
                                    Vivaldi and tightly-coupled dipole array elements, for cumulative operation between 500 MHz-40 GHz.
                                    By combining these antennas with modern digital spectrometers, we hope to enable future missions to measure 
                                    the microwave continuum spectra of giant planet atmospheres with high sensitivity from orbit. 

                                </p> 
                            
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-col my-2 mx-2 gap-4 items-center justify-center">
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className="object-scale-down rounded-2xl" src={TCDAUrl} alt="Tightly coupled dipole array"/>
                                </div>
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className= "object-scale-down rounded-2xl" src={VivUrl} alt="Vivaldi array"/>
                                </div>
                            </div> 
                        </div>
                        
                        <div className='flex flex-col lg:flex-row bg-linear-to-r from-gray-50 to-gray-300 rounded-xl max-w-7xl items-center mt-8'>
                            <div className='my-6'>
                                <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-black underline decoration-1 mx-6 my-2 text-left">Non-Destructive Material Analysis</h1>
                                <p className='rolltext text-lg lg:text-xl text-left sm:text-justify mx-6 my-2 text-black'> When designing instruments for space, it is necessary to 
                                    satisfy mass and thermal requirements on external structures without severely impacting electromagnetic performance. 
                                    Towards this end, I conducted non-destructive material testing to verify the performance of the antenna reflector for the CRISTAL HRMR microwave radiometer. 
                                    Specifically, I ran experiments to determine that reflector conductivity was high enough to meet project 
                                    requirements after thermal treatment. 
                                    <br></br>
                                    <br></br>
                                    To test this, I used a 118 GHz radiometer testbed to measure the reflection of emission from a liquid nitrogen bath off of 
                                    small coupon samples of processed material. Calibration was performed using similarly sized samples of microwave absorber, copper, and steel blanks. 
                                    This was a fast and efficient way to non-destructively test the samples using the materials and systems that we had available, and I confirmed to the project team
                                    that the reflector treatment process didn't degrade reflectivity below 99.8%. 


                                </p>    
                            </div>
                            <div className="flex w-auto max-w-sm min-w-2xs my-2 mx-2 gap-4 ">
                                <img className="object-scale-down rounded-2xl" src={ReflUrl} alt="Reflection measurement setup"/>
                            </div> 
                        </div>
                        
                    </div>  
                </div>
            </div>

        </div>

    ); 
} 


