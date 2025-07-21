import {useState} from 'react'; 
import {useNavigate } from 'react-router-dom';

import { FaArrowDown,FaGithub,FaInstagram,FaLinkedin  } from "react-icons/fa";

import Silk from '../blocks/Backgrounds/Silk/Silk'
import ClickSpark from '../blocks/Animations/ClickSpark/ClickSpark'
import TextType from '../blocks/TextAnimations/TextType/TextType'

export default function Home() {
    const good_button = "Go 🚀";
    const bad_button = "Still in development...";
    const [dropVal, setDropVal] = useState("astro");
    const [buttonText, setButtonText] = useState(good_button);
    
    const navigate=useNavigate() 

    const handleChange = (x) => {
        setDropVal(x.target.value)
        console.log(x.target.value);
        setButtonText(x.target.value);
        switch (x.target.value) { 
            case "microwave_eng": 
                setButtonText(good_button);
                break
            case "astro": 
                setButtonText(good_button);
                break
            case "space_ins": 
                setButtonText(bad_button);
                break
            default:
                setButtonText(bad_button);
                break
            }
        }

    const handleClick = () => {
        switch (dropVal) { 
            case 'microwave_eng': 
                navigate('/microwave_engineering');
                break
            case 'astro': 
                navigate('/astronomy');
                break
            }
        }
    
    return (

        <div className="static">
            <div className="fixed inset-0 z-0 h-dvh w-dvw">
                <Silk
                  speed={3}
                  scale={1}
                  color= "#8c8c8c" 
                  noiseIntensity={1.5}
                  rotation={0}
                />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full w-full">  
                <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}> {      
                <div className="flex flex-col md:flex-row max-w-4xl z-10 p-6 gap-4 border-2 
                                rounded-xl items-center justify-center bg-black">
                    <div>   
                        <img className="w-full max-w-md min-w-xs border-1 bg-white rounded-md" src="/headshot2.webp" alt="Headshot"/>
                    </div>
                    <div className='flex flex-col items-center gap-2 max-w-md'>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-black">
                            <TextType 
                              text={["Hi, I'm Alex Akins"]}
                              typingSpeed={75}
                              pauseDuration={1500}
                              showCursor={true}
                              cursorCharacter="|"
                              cursorBlinkDuration={0.5}
                              onSentenceComplete
                            />
                            </h1>
                        <p className="text-justify text-lg md:text-xl"> I'm a planetary scientist and engineer based in Atlanta, GA. 
                            I work as a researcher at the 
                            <a href="https://www.jpl.nasa.gov/" className='!text-theme_red'> Jet Propulsion Laboratory </a> (NASA/Caltech)
                            <br></br>
                            <br></br>
                            You can click through the menu below to find out more about my work. 
                        </p>
                        <div className='relative inline-block border-b-1'>
                            <h2 className="text-xl md:text-2xl">
                                <select
                                    value={dropVal}
                                    onChange={handleChange}
                                >
                                <option value="astro">Astronomy </option>
                                <option value="microwave_eng">Microwave Engineering</option>
                                <option value="space_ins">Spacecraft Instrument Science</option>
                                </select>
                            </h2>
                            <div className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2">
                                <FaArrowDown />
                            </div>
                        </div>
                        <button className="!bg-theme_blue w-auto max-w-lg mt-2" onClick={handleClick}>
                            <p>{buttonText}</p>
                        </button>   

                        <a href="/CV.pdf" download className="link_button mt-10 px-6 py-2 rounded-lg bg-[#8c8c8c]
                                                              flex items-center !text-white">
                            <p className='text-lg md:text-xl'>Download my CV 
                            </p>
                        </a>

                        <div className='flex flex-row gap-8 mt-4 '>
                        <a href="https://www.linkedin.com/in/alexbakins/"><FaLinkedin size={30} color="white"/></a>
                        <a href="https://github.com/abakins/"><FaGithub size={30} color="white"/></a>
                        <a href="https://www.instagram.com/assumingalex/"><FaInstagram size={30} color="white"/></a>
                        </div>
                    </div>
                    
                </div>
                } </ClickSpark>
            </div> 
        </div> 
        
    ); 
} 
