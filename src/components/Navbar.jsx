export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md">
            <h1 className="text-xl font-bold">Reshmi Seetha</h1>
            <div className="space-x-6">
                <a href="#home" className="hover:text-blue-500">Home</a>
                <a href="#projects" className="hover:text-blue-500">Projects</a>
                <a href="#experience" className="hover:text-blue-500">Experience</a>
                <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>
        </nav>
    );
}