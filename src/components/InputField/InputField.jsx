import React, { useState } from "react";
import PropTypes from 'prop-types';
import { color, motion } from "framer-motion"
import Colors from "../../config/colors";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BsExclamationCircle } from "react-icons/bs";

const InputField = ({
    containerClassName,
    labelClassName,
    inputClassName,
    inputContainerClassName,
    hintClassName,
    icon,
    helpIcon,
    hint,
    placeholder,
    label,
    onChange,
    value,
    id,
    name,
    type,
    disabled,
    destructive
}) => {

    const [focused, setFocused] = useState(false)
    const [hover, setHover] = useState(false)
    const [showhint, setShowhint] = useState(false)

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    const style = {
        base: {
            boxShadow: `inset 0 0 0 1px ${Colors.gray[300]}`
        },
        disable: {
            color: Colors.gray[300],
            backgroundColor: Colors.gray[50],
            boxShadow: `inset 0 0 0 1px ${Colors.gray[300]}`
        },
        focus: {
            boxShadow: `0 0 0 4px ${Colors.brand[100]},inset 0 0 0 1px ${Colors.gray[300]}`
        },
        hover: {
            boxShadow: `inset 0 0 0 1px ${Colors.gray[400]}`
        },
        destructive: {
            boxShadow: `inset 0 0 0 1px ${Colors.error[300]}`,
        },
        destructiveFocus: {
            boxShadow: `0 0 0 4px ${Colors.error[100]},inset 0 0 0 1px ${Colors.error[300]}`
        }
    }

    const getStyle = () => {
        if(disabled){
            return {...style.disable}
        }
        else if(destructive && !focused){
            return { ...style.base, ...style.destructive }
        }
        else if(focused && destructive){
            return { ...style.base, ...style.destructiveFocus }
        }
        else if(focused && hover){
            return { ...style.base, ...style.focus }
        }
        else if(focused){
            return { ...style.base, ...style.focus }
        }
        else if(hover){
            return { ...style.base, ...style.hover }
        }
        else{
            return {...style.base}
        }
    }

    const getHelpIcon = () => {
        if (helpIcon && !destructive) {
            return <FaRegCircleQuestion className="w-5 h-5" style={{ color: Colors.gray[500] }} onClick={() => setShowhint(!showhint)} />;
        }
        else if (helpIcon && destructive) {
            return <BsExclamationCircle className="w-5 h-5" style={{ color: Colors.error[500] }} onClick={() => setShowhint(!showhint)} />;
        }
    }

    return (
        <div className={`flex flex-col gap-y-1.5 w-full ${containerClassName}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <label
                className={`text-sm font-medium ${labelClassName}`}
                style={{
                    color: Colors.gray[700]
                }}
            >{label} </label>
            <div
                className={`flex flex-row bg-white w-full p-2.5 placeholder:text-gray-600 rounded-lg items-center ${inputContainerClassName}`}
                style={getStyle()}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            >
                <div className="flex flex-row w-full items-center gap-x-2">
                    <div style={{ color: Colors.gray[500] }}>
                        {icon}
                    </div>
                    <input
                        className={`bg-white w-full ${disabled ? 'placeholder:text-gray-400' : 'placeholder:text-gray-500'} outline-none ${inputClassName}`}
                        placeholder={placeholder}
                        disabled={disabled}
                        value={value}
                        id={id}
                        name={name}
                        type={type}
                        style={disabled ? { backgroundColor: Colors.gray[50] } : {
                            color: Colors.gray[900],
                        }}
                        onChange={onChange}
                    />
                </div>
                {getHelpIcon()}
            </div>
            {showhint && <label
                className={`text-sm font-normal ${hintClassName}`}
                style={destructive ? { color: Colors.error[500] } : { color: Colors.gray[600] }}
            >{hint}</label>}
        </div>
    )
}

InputField.defaultProps = {
    onClick: () => { },
    label: 'Label',
    placeholder: "olivia@untitledui.com",
    hint: 'This is a hint text to help user.',
    icon: '',
    helpIcon: false,
    disabled: false,
    variant: 'primary',
    color: 'brand'
};

export default InputField