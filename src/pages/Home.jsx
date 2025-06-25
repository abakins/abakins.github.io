import {useState} from 'react'; 
import {useNavigate } from 'react-router-dom';
import Silk from '../blocks/Backgrounds/Silk/Silk'

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
                setButtonText(bad_button);
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
            }
        }
    
    return (

        <div className="relative h-screen w-screen">
            <div className="absolute inset-0 z-0">
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
                        <img className="w-full max-w-md min-w-4xs border-2 rounded-md border-black" src="/headshot2.png" alt="Headshot"/>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-black">Hi, I'm Alex Akins</h1>
                        <h2 className="text-lg md:text-2xl font-serif italic mb-2 text-black">I am 
                            <select 
                                value={dropVal}
                                onChange={handleChange}>
                            <option value="microwave_eng">a Microwave Engineer</option>
                            <option value="space_ins">a Spacecraft Instrument Scientist</option>
                            <option value="astro">an Astronomer</option>
                            </select>
                        </h2>
                        <button className="rounded-md" onClick={handleClick}>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div> 
        </div> 

    ); 
} 
