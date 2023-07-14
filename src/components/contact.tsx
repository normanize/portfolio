import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
    FaSkype
} from 'react-icons/fa'

export default function contact() {

    const navigate = (url: string) => {
        window.open(url)
    }

    return (
        <div className='contact flex bg-smoky-black px-8'>
            <div className="flex max-w-screen-xl mx-auto py-40 px-8">
                <div className="flex flex-col justify-center items-center">
                    <h3 className='text-gray-300 font-bold text-3xl text-center'>You can find me in</h3>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-20 mt-16'>
                        <FaGithub
                            onClick={() => navigate('http://bitly.ws/xxZP')}
                            className='text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaLinkedinIn
                            onClick={() => navigate('http://bitly.ws/xxZS')}
                            className='text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaSkype
                            onClick={() => navigate('skype:normanamaro.work?chat')}
                            className='text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaFacebook
                            onClick={() => navigate('https://www.facebook.com/n0rmanize')}
                            className='text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                        <FaInstagram
                            onClick={() => navigate('https://www.instagram.com/puts.norms')}
                            className='text-5xl text-gray-500 hover:text-white cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}