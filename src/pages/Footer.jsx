export default function Footer() {
  return (
    <footer className="flex w-full bg-white justify-center py-16">
        <div className="text-darkflow text-center">
                <p className="font-bold text-2xl text-pinkflow py-2">Fitri Sagita Portfolio</p>
                <ul className="flex gap-6 text-lg justify-center">
                    <li><a href="#home" className="hover:text-rose-800">Home</a></li>
                    <li><a href="#about" className="hover:text-rose-800">About</a></li>
                    {/* <li><a href="#skiils" className="hover:text-rose-800">Skills</a></li> */}
                    <li><a href="#projects" className="hover:text-rose-800">Projects</a></li>
                    <li><a href="#contact" className="hover:text-rose-800">Contact Me</a></li>
                </ul>
                <br/>
                <hr/>
                <br/>
                <p className="text-darkflow">©2026 a website portfolio by <strong>Fitri Sagita</strong></p>
        </div>
    </footer>
  );
}