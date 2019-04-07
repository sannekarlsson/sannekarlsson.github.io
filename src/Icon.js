import React from 'react';

function Icon({ className, icon, title }) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
            width="100%" height="100%" viewBox="0 0 32 32"
            className={className}>
            <title>{title}</title>
            {icon}
        </svg>
    );
}

export default Icon;