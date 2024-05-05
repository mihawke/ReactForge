import React, { useState } from "react";
import PropTypes from 'prop-types';
import { color, motion } from "framer-motion"
import Colors from "../../config/colors";

const Button = ({ children, onClick, className, size, variant, disabled, icon, color  }) => {

    const [hover, setHover] = useState(false)
    const [focused, setFocused] = useState(false)
    // const [active, setActive] = useState(false)


    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    // const handleClick = () => {
    //     setActive(!active)
    // }

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

    const style = {
        'primary': {
            base: {
                backgroundColor: Colors[color][600] || Colors.brand[600],
                outline: 'none',
                color: '#FFFFFF'
            },
            focus: {
                boxShadow: `0 0 0 4px ${Colors[color][100]}` ||  `0 0 0 4px ${Colors.brand[100]}`
            },
            hover: {
                backgroundColor: Colors[color][700] || Colors.brand[700],
            },
            disabled: {
                backgroundColor: Colors[color][700] || Colors.brand[200],
            }
        },
        'secondary': {
            base: {
                backgroundColor: 'transparent',
                color: Colors[color][700],
                boxShadow: `inset 0 0 0 1px ${Colors[color][300]}` || `inset 0 0 0 1px ${Colors.brand[300]}`,
                outline: 'none'
            },
            focus: {
                boxShadow: `inset 0 0 0 1px ${Colors[color][300]},0 0 0 4px ${Colors[color][100]}` || `inset 0 0 0 1px ${Colors.brand[300]},0 0 0 4px ${Colors.brand[100]}`
            },
            hover: {
                backgroundColor: Colors[color][50] ||  Colors.brand[50],
                color: Colors[color][800] || Colors.brand[800]
            },
            disabled: {
                backgroundColor: Colors.brand[25],
                boxShadow: `inset 0 0 0 1px ${Colors[color][200]}` || `inset 0 0 0 1px ${Colors.brand[200]}`,
                color: Colors.brand[200]
            }
        },
        'tertiary': {
            base: {
                backgroundColor: 'transparent',
                color: Colors[color][700],
                outline: 'none'
            },
            focus: {
                boxShadow:  `0 0 0 4px ${Colors[color][100]}` || `0 0 0 4px ${Colors.brand[100]}`
            },
            hover: {
                backgroundColor: Colors[color][50] || Colors.brand[50],
                color:  Colors[color][800] || Colors.brand[800]
            },
            disabled: {
                color: Colors.gray[200]
            }
        }
    }

    return (
        <motion.button
            className={`flex flex-row items-center rounded-lg ${icon == 'only' ? iconsizeClass : sizeClass} ${className}`}
            onClick={()=> {handleClick(), onClick()}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={disabled}
            onMouseDown={()=>setFocused(true)}
            onMouseUp={()=>setFocused(false)}
            style={
                disabled ? { ...style[variant].base, ...style[variant].disabled }
                    : focused ? hover ? { ...style[variant].base, ...style[variant].focus, ...style[variant].hover }
                        : { ...style[variant].base, ...style[variant].focus } : hover ? { ...style[variant].base, ...style[variant].hover }
                        : { ...style[variant].base }
            }
        >
            {children}
        </motion.button>
    );
}

Button.defaultProps = {
    onClick: () => { },
    className: '',
    size: 'md',
    icon: '',
    disabled: false,
    variant: 'primary',
    color: 'brand'
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