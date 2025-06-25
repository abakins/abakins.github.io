
export default function Revamping() {
  
  return (
    <div className="flex flex-col justify-center items-center max-h-wd p-6 
                  bg-neutral-100 border-black border-2 rounded-xl shadow-xl">
    <img class="w-full max-w-md border-2 rounded-md" src="/headshot2.png" alt="Headshot" />
      <h1 className="text-4xl font-bold mb-2 mt-2 text-black">Hi, I'm Alex Akins</h1>
      <p className="text-lg text-black max-w-xl">
        I'm a scientist and engineer by training. <br></br>
        I'm currently employed as a researcher at the Jet Propulsion Laboratory in Pasadena, CA, 
        although I'm based in Atlanta, GA.  <br /><br />
        I'm currently revamping my website, but please feel free to reach out to me via <a href="mailto:alexakins@gmail.com"> e-mail </a>
         or via <a href="https://www.linkedin.com/in/alexbakins/"> LinkedIn </a> if you're interested in the work that I do. 
        <br /><br />
        In the meantime, here is a current CV  
        <br /><br />

        <a href="/CV.pdf" download className="inline-block px-6 py-2 bg-black rounded-lg hover:text-white"
        style={{color:'white'}}>
        Download CV
        </a>

      </p>
    </div>
  );
}