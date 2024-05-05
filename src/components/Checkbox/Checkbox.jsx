import React, { useState } from 'react'
import Colors from "../../config/colors";
import { FaCheck, FaCircle, FaMinus } from 'react-icons/fa';

const Checkbox = ({ size, className, disabled, variant ,indeterminate, onClick, onChecked, value, id, name }) => {

    const [hover, setHover] = useState(false)
    const [focused, setFocused] = useState(false)
    const [checked, setChecked] = useState(false)
    const [isIndeterminate, setIndeterminate] = useState(false)

    // const [active, setActive] = useState(false)

    const handleClick = () => {
        if(variant === 'checkbox'){
            if (indeterminate) {
                setIndeterminate(!isIndeterminate);
            }
            else {
                setChecked(!checked);
            }   
        }
        else {
            setChecked(!checked);
        }
        if (onClick) {
            onClick();
        }
        if (onChecked && checked) {
            onChecked();
        }
    }

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    const sizeClasses = {
        'sm': 'w-4 h-4 rounded-[4px]',
        'md': 'w-5 h-5 rounded-[6px]'
    }

    const sizeClass = sizeClasses[size] || sizeClasses['md']

    const style = {
        'checkbox': {
            base: {
                boxShadow: `inset 0 0 0 1px ${Colors.gray[300]}`,
            },
            checkedBase: {
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]}`,
            },
            checkedFocus: {
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]},0 0 0 4px ${Colors.brand[100]}`,
            },
            focus: {
                boxShadow: `inset 0 0 0 1px ${Colors.brand[300]},0 0 0 4px ${Colors.brand[100]}`,
            },
            hover: {
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]}`,
            },
            disabled: {
                boxShadow: `inset 0 0 0 1px ${Colors.gray[200]}`,
            }
        },
        'radio': {
            base: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.gray[300]}`,
            },
            checkedBase: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]}`,
            },
            checkedFocus: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]},0 0 0 4px ${Colors.brand[100]}`,
            },
            focus: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.brand[300]},0 0 0 4px ${Colors.brand[100]}`,
            },
            hover: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]}`,
            },
            disabled: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.gray[200]}`,
            }
        },
        'checkcircle': {
            base: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.gray[300]}`,
            },
            checkedBase: {
                borderRadius:'100%',
                backgroundColor: Colors.brand[600],
            },
            checkedFocus: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]},0 0 0 4px ${Colors.brand[100]}`,
            },
            focus: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.brand[300]},0 0 0 4px ${Colors.brand[100]}`,
            },
            hover: {
                borderRadius:'100%',
                boxShadow: `inset 0 0 0 1px ${Colors.brand[600]}`,
            },
            disabled: {
                borderRadius:'100%',
                backgroundColor: Colors.brand[200],
            }
        },
    }

    const getStyle = () => {
        if (disabled) {
            return { ...style[variant].disabled }
        }
        else if (isIndeterminate && focused) {
            return { ...style[variant].checkedFocus }
        }
        else if (isIndeterminate && hover) {
            return { ...style[variant].checkedBase }
        }
        else if (isIndeterminate) {
            return { ...style[variant].checkedBase }
        }
        else if (checked && focused) {
            return { ...style[variant].checkedFocus }
        }
        else if (checked && hover) {
            return { ...style[variant].checkedBase }
        }
        else if (checked) {
            return { ...style[variant].checkedBase }
        }
        else if (focused) {
            return { ...style[variant].focus }
        }
        else if (hover) {
            return { ...style[variant].hover }
        }
        else {
            return { ...style[variant].base }
        }
    }

    const getIcon = () => {
        if (isIndeterminate && variant == 'checkbox') {
            return <FaMinus className='w-3 h-3' style={{ color: disabled ? Colors.gray[200] : Colors.brand[600] }} />;
        }
        else if (checked && variant == 'checkbox') {
            return <FaCheck className='w-3 h-3' style={{ color: disabled ? Colors.gray[200] : Colors.brand[600] }} />;
        }
        else if (checked && variant == 'checkcircle') {
            return <FaCheck className='w-3 h-3' style={{ color: '#FFFFFF'}} />;
        }
        else if (checked && variant == 'radio') {
            return <FaCircle className='w-2 h-2' style={{ color: disabled ? Colors.gray[200] : Colors.brand[600] }} />;
        }
    }

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={disabled}
            onClick={handleClick}
            onMouseDown={() => setFocused(true)}
            onMouseUp={() => setFocused(false)}
            value={value}
            id={id}
            name={name}
            className={`flex items-center justify-center outline-none ${sizeClass} ${className}`}
            style={getStyle()}
        >
            {getIcon()}
        </button>
    )
}

Checkbox.defaultProps = {
    onClick: () => { },
    className: '',
    size: 'md',
    disabled: false,
    variant: 'checkbox'  
};

export default Checkbox