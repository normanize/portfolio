const Footer = () => {
    return (
        <footer className='min-h-12 flex justify-center items-center text-center border-t shadow-lg p-4'>
            <p className='flex flex-col md:flex-row font-fira-code text-sm space-x-2'>
                <span>DESIGNED AND DEVELOPED</span>
                <span>BY</span>
                <span>
                    <span className='font-semibold'>NORMAN AMARO</span> &copy; 2022 
                </span>
            </p>
        </footer>
    );
};

export default Footer;