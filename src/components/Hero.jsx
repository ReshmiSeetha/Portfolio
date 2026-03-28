export default function Hero() {
    return (
        <section className="flex justify-between items-center px-8 py-20">
            <div>
                <h1 className="text-4xl font-bold">
                    Hi, I'm Reshmi Seetha
                </h1>
                <p className="mt-4 text-lg text-gray-500">
                    Java Full Stack Developer
                </p>
                <p className="mt-4 max-w-md">
                    I build scalable web applications using Spring Boot and React.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-blue-500 text-white px-5 py-2 rounded">
                        View Projects
                    </button>
                    <button className="border px-5 py-2 rounded">
                        Contact Me
                    </button>
                </div>
            </div>
            <div>
                <img
                    src="https://via.placeholder.com/150"
                    className="rounded-full"
                    alt="profile"
                />
            </div>
        </section>
    );
}