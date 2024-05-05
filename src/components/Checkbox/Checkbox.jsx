import React, { useState } from 'react'
import Colors from "../../config/colors";
import { FaCheck, FaMinus } from 'react-icons/fa';

const Checkbox = ({ size, className, disabled, indeterminate, onClick, onChecked, value, id, name }) => {

    const [hover, setHover] = useState(false)
    const [focused, setFocused] = useState(false)
    const [checked, setChecked] = useState(false)
    const [isIndeterminate, setIndeterminate] = useState(false)

    // const [active, setActive] = useState(false)

    const handleClick = () => {
        if (indeterminate) {
            setIndeterminate(!isIndeterminate);
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
        'sm': 'w-4 h-4 rounded-[4px] ',
        'md': 'w-5 h-5 rounded-[6px]'
    }

    const sizeClass = sizeClasses[size] || sizeClasses['md']

    const style = {
        'primary': {
            base: {
                boxShadow: `inset 0 0 0 1px ${Colors.brand[300]}`,
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
    }

    const getStyle = () => {
        if (disabled) {
            return { ...style.primary.disabled }
        }
        else if (isIndeterminate && focused) {
            return { ...style.primary.checkedFocus }
        }
        else if (isIndeterminate && hover) {
            return { ...style.primary.checkedBase }
        }
        else if (isIndeterminate) {
            return { ...style.primary.checkedBase }
        }
        else if (checked && focused) {
            return { ...style.primary.checkedFocus }
        }
        else if (checked && hover) {
            return { ...style.primary.checkedBase }
        }
        else if (checked) {
            return { ...style.primary.checkedBase }
        }
        else if (focused) {
            return { ...style.primary.focus }
        }
        else if (hover) {
            return { ...style.primary.hover }
        }
        else {
            return { ...style.primary.base }
        }
    }

    const getIcon = () => {
        if (isIndeterminate) {
            return <FaMinus className='w-3 h-3' style={{ color: disabled ? Colors.gray[200] : Colors.brand[600] }} />;
        }
        else if (checked) {
            return <FaCheck className='w-3 h-3' style={{ color: disabled ? Colors.gray[200] : Colors.brand[600] }} />;
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
            className={`flex items-center justify-center w-4 h-4 rounded-[4px] outline-none ${sizeClass} ${className}`}
            style={getStyle()}
        >
            {getIcon()}
        </button>
    )
}

export default Checkbox