import {useState} from 'react'; 
import {useNavigate } from 'react-router-dom';

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
                setButtonText(good_button);
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
        <div className="flex items-center justify-center min-h-screen text-center p-6 bg-white">
            <div class="grid grid-cols-3 items-center gap-10">
                <div class="col-span-2">
                    <img class="w-auto shrink-0" src="/headshot.jpg" alt="Headshot"/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">Hi, I'm Alex</h1>
                    <h2 className="text-2xl font-serif italic mb-2">I am 
                        <select 
                            value={dropVal}
                            onChange={handleChange}>
                        <option value="microwave_eng">an RF/Microwave Engineer</option>
                        <option value="space_ins">a Spacecraft Instrument Scientist</option>
                        <option value="astro">an Astronomer</option>
                        <option value="aiml">an AI/ML Researcher</option>
                        </select>
                    </h2>
                    <button className="rounded-md" onClick={handleClick}>
                    {buttonText}
                    </button>
                </div>

            </div>
        </div>
    ); 
} 
