export default function AboutMe() {
    return (
        <div id="aboutme" className="flex aboutme py-14">
            <div className="w-full flex justify-start items-center max-w-screen-xl mx-auto">
                <div className="text-center md:text-left pt-24 pb-24 px-8 xl:p-0">
                    <h3 className="text-4xl font-bold text-red-700 mb-10 tracking-wider">About Me</h3>
                    <div>
                        <p className="text-gray-800 text-2xl mb-4">
                            I am a self-taught developer who is passionate about improving my coding skills and following coding standards.
                        </p>
                        <p className="text-gray-800 text-2xl mb-4">
                            I developed cross-platform mobile apps, custom web apps, and backend API's from scratch.
                        </p>
                        <p className="text-gray-800 text-2xl">
                            I have published multiple mobile applications on Appstore & Playstore.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}