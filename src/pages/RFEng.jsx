
import FPRUrl from '../assets/FPR.jpg'
import ReflUrl from '../assets/reflection_measurement.jpg'
import TCDAUrl from '../assets/TCDA_blender_render.png'

export default function RFEng() {

    return (
        <div className="items-start justify-center min-h-screen text-center bg-white">
            <div className="bg-white mb-8">
                <h1 className="text-4xl font-bold italic mb-2"> I am an RF/Microwave Engineer</h1>
                <p className="text-justify"> 
                My background in RF and microwave engineering comes from my education at Georgia Tech, where I studied with faculty who specialized in the "Electromagnetics" 
                sub-discipline of Electrical and Computer Engineering. As a result, I have a solid foundation in the fundamentals of microwave systems engineering. 
                Particular areas of interest for me include <span className="underline decoration-sky-500 decoration-2">material characterization </span>  
                and <span className="underline decoration-pink-500 decoration-2">antenna design</span>.    
                </p>
            </div>

            <div className="bg-gray-50">
                <h2 className="text-4xl font-sans mb-2 box-decoration-slice bg-linear-65 from-sky-900 via-purple-500 to-sky-300 px-2 text-white"> 
                        Material Characterization
                </h2>
                <div class="grid grid-cols-2 items-center gap-10">
                    <div>
                        <p className='text-justify indent-8'> The focus of my doctoral thesis was on the measurement of the microwave and millimeter-wavelength absorption spectra of sulfuric acid vapor under 
                        conditions that would be found in the cloud level-atmosphere of Venus. For this, I designed and fabricated open resonator systems capable of making measurements 
                        at wavelengths between 1 cm and 2 mm. The system was housed in a glass pressure-vessel rated to 5 bars, which was in turn placed in an oven which operated up to 300 degrees C. 
                        </p>

                        <p className='text-justify indent-8'> To say this was a challenging measurement would be an understatement. Sulfuric acid is both fantastically corrosive and has a very low boiling point, 
                        which meant that it was necessary to use highly corrosion-resistant materials and to achieve very consistent thermal conditions within the pressure vessel. 
                        </p>

                        <p className='text-justify indent-8'> Since my doctoral work, I've taken on a few other material characterization projects, 
                            including dielectric constant measurements of cold ices (&lt;-180 C), and reflectivity measurements for microwave radiometer antenna materials. 
                        </p>

                    </div>
                    <div className='flex'>
                        <img class="size-64" src={FPRUrl} alt="Semi-confocal resonator"/>
                        <img class="size-64" src={ReflUrl} alt="Reflection test"/>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <h2 className="text-4xl font-sans mb-2 box-decoration-slice bg-linear-65 from-sky-900 via-purple-500 to-sky-300 px-2 text-white"> 
                        Antenna Design
                </h2>
                <div class="grid grid-cols-2 items-center gap-10">
                    <div>
                        <p className='text-justify indent-8'> The focus of my doctoral thesis was on the measurement of the microwave and millimeter-wavelength absorption spectra of sulfuric acid vapor under 
                        conditions that would be found in the cloud level-atmosphere of Venus. For this, I designed and fabricated open resonator systems capable of making measurements 
                        at wavelengths between 1 cm and 2 mm. The system was housed in a glass pressure-vessel rated to 5 bars, which was in turn placed in an oven which operated up to 300 degrees C. 
                        </p>

                    </div>
                    <div className='flex'>
                        <img class="size-64" src={TCDAUrl} alt="TCDA"/>
                    </div>
                </div>
            </div>

        </div>

    ); 
} 


