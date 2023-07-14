import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    style: React.CSSProperties | undefined,
    children: React.ReactNode,
}

export default function Button({ style, children, ...props }: ButtonProps) {
    return (
        <button style={style} {...props}>
            {children}
        </button>
    )
}