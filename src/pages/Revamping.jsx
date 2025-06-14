
export default function Revamping() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-white">
    <img class="size-72 shrink-0" src="/headshot.jpg" alt="Headshot" />
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Alex Akins</h1>
      <p className="text-lg text-gray-600 max-w-xl">
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