import React from 'react'

const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-4 text-md',
    lg: 'px-6 py-3 text-lg',
    bg: 'bg-[#1d4e26] text-white  cursor-pointer'
}

const Button = ({ text, children, bg, size = 'md', className = '', type = 'button', ...props }) => {
    const buttonText = children ?? text

    return (
        <button
            type={type}
            className={`rounded-full px-10 flex items-center uppercase justify-center py-3 ${sizeClasses[bg] ?? sizeClasses.bg} ${className}`}
            {...props}
        >
            {buttonText}
        </button>
    )
}

export default Button