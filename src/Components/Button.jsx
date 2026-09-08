import React from 'react'

const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
}

const Button = ({ text, children, size = 'md', className = '', type = 'button', ...props }) => {
    const buttonText = children ?? text

    return (
        <button
            type={type}
            className={`rounded-full px-10 flex items-center justify-center py-3 bg-white font-medium text-black  ${sizeClasses[size] ?? sizeClasses.md} ${className}`}
            {...props}
        >
            {buttonText}
        </button>
    )
}

export default Button