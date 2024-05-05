import React from 'react';
import Colors from "../../config/colors";
import { FaRegCircle } from 'react-icons/fa6';


const Dropdown = ({ children }) => {
    return (
        <ul>
            {React.Children.map(children, (child, index) => {
                if (child.type && child.type.name === 'ListItem') {
                    return React.cloneElement(child, { key: index });
                } else {
                    console.warn('Dropdown only accepts ListItem as children');
                    return null;
                }
            })}
        </ul>
    );
};

const ListItem = ({ children, disabled, onClick , icon }) => {

    const handleClick = () => {
        if (!disabled) {
            onClick;    
            console.log({ children })
        }
    };

    return <li
        onClick={handleClick}
        className={`flex flex-row px-4 py-2.5 text-sm font-medium items-center gap-x-3 ${disabled ? '' : 'hover:bg-gray-50'} `}
        style={{
            color: disabled ? Colors.gray[200] : Colors.gray[700],
            cursor: 'pointer',
        }}
    >
        {icon && <FaRegCircle className='w-4 h-4' />}
        {children}
    </li>;
};

export { Dropdown, ListItem };
