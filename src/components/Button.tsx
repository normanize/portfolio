type ButtonType = {
    children: React.ReactNode;
}

const Button: React.FC<ButtonType & 
    React.ButtonHTMLAttributes<HTMLButtonElement>> = 
    ({ children, ...props }) => {
        
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Button;