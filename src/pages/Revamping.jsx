
import Silk from '../blocks/Backgrounds/Silk/Silk'

export default function Revamping() {

    return (

        <div className="static">
            <div className="fixed inset-0 z-0 h-dvh w-dvw">
                <Silk
                    speed={3}
                    scale={1}
                    color="#8c8c8c" // "33474f"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            <div className="relative z-10 flex items-center justify-center h-full w-full">
                <div className="flex flex-col justify-center items-center p-6 
                  bg-black border-white border-1 rounded-xl">
                    <img className="w-full max-w-md border-1 rounded-md bg-white" src="/headshot2.webp" alt="Headshot" />
                    <h1 className="text-4xl font-bold mb-2 mt-2">Hi, I'm Alex Akins</h1>
                    <p className="text-xl text-white text-justify max-w-xl">
                        I'm a planetary scientist and engineer based in Atlanta, GA. 
                        <br /><br />
                        I work as a researcher at the Jet Propulsion Laboratory (NASA/Caltech)
                        <br /><br />
                        I'm currently revamping my website, but please feel free to reach out to me  
                        via <a href="mailto:alexakins@gmail.com">e-mail</a> or  
                        via <a href="https://www.linkedin.com/in/alexbakins/">LinkedIn</a> if you are interested in the work that I do.
                        <br /><br />
                        In the meantime, you can find my CV below. 
                        <br /><br />
                    </p>
                    <p className="text-xl text-white text-justify max-w-xl">

                        <a href="/CV.pdf" download className="link_button px-6 py-2 rounded-lg bg-[#8c8c8c]"
                            style={{ color: 'white' }}>
                            Download CV
                        </a>
                    </p>
                    
                </div>
            </div>
        </div>

    );
}