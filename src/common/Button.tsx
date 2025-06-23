import React from 'react'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'icon-only';
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    icon?: React.ReactNode;
    className?: string;
}
const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className,
    onClick,
    icon,
    type = 'button',
    disabled = false, }) => {

    const baseStyles = 'curson-pointer inline-flex items-center justify-center transition-global rounded-2';

    const variantStyles = {
        primary: 'h-12 px-6 bg-brand-primary-400 text-white body-16 font-semibold hover:bg-brand-primary-600',
        secondary: 'h-12 px-6 bg-white text-brand-primary-400 body-16 font-semibold border border-brand-primary-700',
        ghost: 'h-10 px-4 bg-transparent text-brand-primary-400 body-16 font-semibold',
        destructive: 'h-12 px-6 bg-semantic-error text-white body-16 font-semibold',
        'icon-only': 'size-10 bg-transparent p-0',
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className || ''}`;
    return (
        <>
            <button
                type={type}
                className={combinedStyles}
                onClick={onClick}
                disabled={disabled}
            >
                {icon && variant === 'icon-only' ? <div className="size-6">{icon}</div> : children}
            </button>
        </>
    )
}

export default Button