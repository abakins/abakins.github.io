import {useState} from 'react'; 
import {useNavigate } from 'react-router-dom';
import Silk from '../blocks/Backgrounds/Silk/Silk'
import ParUrl from '../assets/conga_parrot.gif'

export default function Home() {
    const good_button = "Find out more";
    const bad_button = "Still in development...";
    const [dropVal, setDropVal] = useState("microwave_eng");
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
            case "hobby": 
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
                navigate('/RF_engineer');
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
                  color= "33474f" // "#7B7481"
                  noiseIntensity={1.5}
                  rotation={0}
                />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full w-full">        
                <div className="flex flex-col md:flex-row max-w-4xl z-10 p-6 gap-4 bg-white border-2 rounded-xl items-center justify-center">
                    <div>   
                        <img className="w-full max-w-md min-w-4xs border-2 rounded-md border-black" src="/headshot2.webp" alt="Headshot"/>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-black">Hi, I'm Alex Akins</h1>
                        <h2 className="text-lg md:text-2xl font-serif italic mb-2 text-black">I am 
                            <select 
                                value={dropVal}
                                onChange={handleChange}>
                            <option value="microwave_eng">a Microwave Engineer</option>
                            <option value="astro">an Astronomer</option>
                            <option value="space_ins">a Spacecraft Instrument Scientist</option>
                            </select>
                        </h2>
                        <button className="w-auto max-w-40 " onClick={handleClick}>
                            <p>{buttonText}</p>
                        </button>   

                        <a href="/CV.pdf" download className=" mt-10 px-6 py-2 rounded-[12px] 
                                                              bg-linear-to-r/decreasing from-violet-800 via-lime-300 to-violet-800 
                                                              flex items-center"
                                                    style={{ color: 'white' }}>
                            <p>Or just download my CV 
                            </p>
                            <span>
                                <img src={ParUrl} className="w-10 ml-4 rounded-full border-black border-1 self-center" />
                            </span>    
                        </a>
                    </div>
                    
                </div>
            </div> 
        </div> 

    ); 
} 
