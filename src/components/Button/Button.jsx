import React, { useState } from "react";
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import { FaRegCircle } from "react-icons/fa";

const Button = ({ children, onClick, className, size, variant, disabled, icon, color }) => {

    const sizeClasses = {
        'sm': 'py-2 px-3.5 text-sm font-semibold gap-x-2',
        'md': 'py-2.5 px-4 text-sm font-semibold gap-x-2',
        'lg': 'py-2.5 px-[18px] text-base font-semibold gap-x-2',
        'xl': 'py-3 px-5 text-base font-semibold gap-x-2',
        '2xl': 'py-4 px-7 text-lg font-semibold gap-x-2',
    };

    const sizeClass = sizeClasses[size] || sizeClasses['md'];

    const iconsizeClasses = {
        'sm': 'p-2',
        'md': 'p-2.5',
        'lg': 'p-3',
        'xl': 'p-3.5',
        '2xl': 'p-4',
    };

    const iconsizeClass = iconsizeClasses[size] || iconsizeClasses['md'];

    const variantClasses = {
        'primary': 'bg-brand-600 hover:bg-brand-700 focus:ring-4 focus:ring-brand-100 disabled:bg-brand-200 disabled:hover:bg-brand-200 text-white outline-none',
        'secondary': 'shadow-[inset_0_0_0_1px] shadow-brand-300 hover:bg-brand-50 hover:text-brand-800 text-brand-600 focus:ring-4 focus:ring-brand-100 disabled:bg-brand-25 disabled:text-brand-300 disabled:hover:bg-brand-25 disabled:hover:text-brand-300 outline-none',
        'tertiary': 'hover:bg-brand-50 text-brand-600 hover:text-brand-800 disabled:text-gray-300 disabled:hover:bg-transparent focus:ring-4 focus:ring-brand-100 outline-none',
    }

    const variantClass = variantClasses[variant] || variantClasses['primary']

    const disabledClasses = {
        'primary': 'focus:ring-4 focus:ring-brand-100 text-white outline-none',
        'secondary': 'shadow-[inset_0_0_0_1px] shadow-brand-300 hover:bg-brand-50 hover:text-brand-800 text-brand-600 focus:ring-4 focus:ring-brand-100 outline-none',
        'tertiary': 'hover:bg-brand-50 text-brand-600 focus:ring-4 focus:ring-brand-100 outline-none',
    }

    const disabledClass = disabledClasses[variant] || disabledClasses['primary']

    return (
        <motion.button
            className={`flex flex-row items-center rounded-lg ${variantClass} ${icon == 'only' ? iconsizeClass : sizeClass} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    )
}

Button.defaultProps = {
    onClick: () => { },
    className: '',
    size: 'md',
    icon: '',
    disabled: false,
    variant: 'primary'
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    disabled: PropTypes.bool,
    icon: PropTypes.string,
};


export default Button