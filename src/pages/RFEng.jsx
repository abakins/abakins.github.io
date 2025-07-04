import Silk from '../blocks/Backgrounds/Silk/Silk'

import FPRUrl from '../assets/FPR.jpg'
import VenusUrl from '../assets/venus_from_nasa_pioneer_1_orbiter.jpg'
import ReflUrl from '../assets/reflection_measurement.jpg'
import TCDAUrl from '../assets/TCDA_blender_render.webp'
import VivUrl from '../assets/array_layout.jpg'

export default function RFEng() {

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

            
            <div className="relative z-10 items-start justify-center h-full w-full">
                <div className="flex flex-col p-4 sm:p-10 lg:p-20 gap-8">
                    <div >
                        <h1 className="text-4xl mb-2 text-white text-left underline"> I am a Microwave Engineer</h1>
                        <div className="flex bg-none rounded-xl items-center justify-left">
                            <p className="text-lg text-white text-left sm:text-justify italic">  
                            My interest in microwave engineering started during my coursework and Ph.D. thesis research at Georgia Tech in the Electrical and Computer Engineering 
                            Department.  
                            <br></br> 
                            From this background and my professional experience, I have a solid foundation in the fundamentals of microwave systems engineering.  
                            <br></br> 
                            Particular areas of expertise include <span className="underline ">material characterization </span>   
                            and <span className="underline">antenna design</span>.  
                            </p> 
                        </div> 
                    </div>

                    <div>
                        <h1 className="text-4xl mb-2 text-white text-left font-bold"> Past projects include... </h1>
                        <div className='flex flex-col lg:flex-row bg-white rounded-xl max-w-7xl items-left lg:items-center'>
                            <div>
                                <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-black underline mx-6 my-2 text-left">Microwave Spectroscopy</h2>
                                <h2 className="text-lg lg:text-2xl font-bold mb-2 text-black text-left italic mx-6 my-2">The Venusian Atmosphere</h2>
                                <p className='text-lg text-left sm:text-justify mx-6 my-2'> A large part of my doctoral thesis focused on measuring of the microwave and millimeter-wavelength absorption spectra of sulfuric acid vapor under 
                                conditions that would be found in the cloud level-atmosphere of Venus.
                                <br></br>
                                <br></br>
                                For this, I designed and fabricated open resonator systems capable of making measurements 
                                at wavelengths between 1 cm and 2 mm. The system was housed in a glass pressure-vessel rated to 5 bars, which was in turn placed in an oven which operated up to 300 degrees C. 
                                <br></br>
                                <br></br>
                                To say this was a challenging measurement would be an understatement. Sulfuric acid is both fantastically corrosive and has a very low boiling point, 
                                which meant that it was necessary to use highly corrosion-resistant materials and to achieve very consistent thermal conditions within the pressure vessel. 
                                </p>    
                            
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-col my-2 mx-2 gap-4 items-center">
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className="object-scale-down rounded-2xl" src={VenusUrl} alt="Venus"/>
                                </div>
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className= "object-scale-down rounded-2xl" src={FPRUrl} alt="Semi-confocal resonator"/>
                                </div>
                            </div> 
                        </div>

                        <div className='flex flex-col lg:flex-row bg-white rounded-xl max-w-7xl items-center my-8'>
                            <div>
                                <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-black underline mx-6 my-2 text-left">Non-Destructive Reflector Characterization</h2>
                                <p className='text-lg text-left sm:text-justify mx-6 my-2'> When designing reflector-fed microwave instruments for space, it is necessary to 
                                    satisfy mass and thermal requirements on external structures without severely impacting instrument electromagnetic performance. 
                                    For the instrument in question, the reflector material was a lightweight composite material which was treated using a vapor-deposited aluminum 
                                    process and painted white to minimize solar heating. My job was to determine that the reflector conductivity after this process was high enough to meet the project 
                                    requirements. 
                                    <br></br>
                                    <br></br>
                                    To test this, I used a 118 GHz radiometer testbed instrument to measure the reflection of emission from a liquid nitrogen bath off of 
                                    small coupon samples of processed material. Calibration was performed using similarly sized samples of microwave absorber, copper, and steel blanks. 
                                    This was a fast and efficient way to non-destructively test the samples using the materials and systems that we had available, and I could confirm that 
                                    the reflector treatment process didn't degrade reflectivity below 99.8%. 


                                </p>    
                            </div>
                            <div className="flex w-auto max-w-sm min-w-2xs my-2 mx-2 gap-4 ">
                                <img className="object-scale-down rounded-2xl" src={ReflUrl} alt="Reflection measurement setup"/>
                            </div> 
                        </div>
                        <div className='flex flex-col lg:flex-row bg-white rounded-xl max-w-7xl items-left lg:items-center'>
                            <div>
                                <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-black underline mx-6 my-2 text-left">Wideband Antenna Design</h2>
                                <p className='text-lg text-left sm:text-justify mx-6 my-2'> My group at JPL is interested in designing 
                                    next-generation spacecraft microwave radiometer systems which reduce their size, weight, and power, thereby 
                                    enabling greater flexibility in mission formulation. One focus in this effort has been the design of 
                                    array antenna systems operating over 3-4:1 bandwidths for future missions to the outer solar system
                                    <br></br>
                                    <br></br>
                                    I worked with teams of antenna engineers to design and simulate different wideband antenna system, including 
                                    Vivaldi and tightly-coupled dipole array elements, for cumulative operation between 500 MHz-40 GHz. 
                                    By combining these antennas with modern digital spectrometers, we hope to enable future missions to measure 
                                    the microwave continuum spectra of giant planet atmospheres with high sensitivity from orbit. 

                                </p> 
                            
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-col my-2 mx-2 gap-4 items-center">
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className="object-scale-down rounded-2xl" src={TCDAUrl} alt="Tightly coupled dipole array"/>
                                </div>
                                <div className='w-auto max-w-sm min-w-2xs'> 
                                    <img className= "object-scale-down rounded-2xl" src={VivUrl} alt="Vivaldi array"/>
                                </div>
                            </div> 
                        </div>
                    </div>  
                </div>
            </div>

        </div>

    ); 
} 


